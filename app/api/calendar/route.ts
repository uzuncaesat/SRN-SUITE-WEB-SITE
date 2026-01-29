import { NextResponse } from 'next/server';

export interface CalendarEvent {
  start: string;
  end: string;
  summary: string;
}

export interface CalendarResponse {
  bookedDates: string[];
  events: CalendarEvent[];
  lastUpdated: string;
  hasIcalUrl: boolean;
}

// Cache the calendar data for 5 minutes
let cachedData: CalendarResponse | null = null;
let cacheTime: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Parse iCal date format (YYYYMMDD or YYYYMMDDTHHMMSS)
function parseICalDate(dateStr: string): Date | null {
  if (!dateStr) return null;
  
  // Remove any timezone suffix like 'Z'
  const cleanDate = dateStr.replace('Z', '');
  
  // Format: YYYYMMDD
  if (cleanDate.length === 8) {
    const year = parseInt(cleanDate.substring(0, 4));
    const month = parseInt(cleanDate.substring(4, 6)) - 1;
    const day = parseInt(cleanDate.substring(6, 8));
    return new Date(year, month, day);
  }
  
  // Format: YYYYMMDDTHHMMSS
  if (cleanDate.length >= 15 && cleanDate.includes('T')) {
    const year = parseInt(cleanDate.substring(0, 4));
    const month = parseInt(cleanDate.substring(4, 6)) - 1;
    const day = parseInt(cleanDate.substring(6, 8));
    const hour = parseInt(cleanDate.substring(9, 11));
    const minute = parseInt(cleanDate.substring(11, 13));
    const second = parseInt(cleanDate.substring(13, 15));
    return new Date(year, month, day, hour, minute, second);
  }
  
  return null;
}

// Parse iCal content and extract events
function parseICalContent(icalContent: string): CalendarEvent[] {
  const events: CalendarEvent[] = [];
  
  // Split by VEVENT blocks
  const eventBlocks = icalContent.split('BEGIN:VEVENT');
  
  for (let i = 1; i < eventBlocks.length; i++) {
    const block = eventBlocks[i].split('END:VEVENT')[0];
    
    let startDate: Date | null = null;
    let endDate: Date | null = null;
    let summary = 'Reserved';
    
    // Parse each line in the block
    const lines = block.split('\n');
    for (const line of lines) {
      const trimmedLine = line.trim();
      
      // DTSTART
      if (trimmedLine.startsWith('DTSTART')) {
        const dateMatch = trimmedLine.match(/[:;].*?(\d{8}(?:T\d{6})?Z?)/);
        if (dateMatch) {
          startDate = parseICalDate(dateMatch[1]);
        }
      }
      
      // DTEND
      if (trimmedLine.startsWith('DTEND')) {
        const dateMatch = trimmedLine.match(/[:;].*?(\d{8}(?:T\d{6})?Z?)/);
        if (dateMatch) {
          endDate = parseICalDate(dateMatch[1]);
        }
      }
      
      // SUMMARY
      if (trimmedLine.startsWith('SUMMARY')) {
        const summaryMatch = trimmedLine.match(/SUMMARY[;:](.+)/);
        if (summaryMatch) {
          summary = summaryMatch[1].trim();
        }
      }
    }
    
    if (startDate && endDate) {
      events.push({
        start: startDate.toISOString(),
        end: endDate.toISOString(),
        summary,
      });
    }
  }
  
  return events;
}

export async function GET() {
  try {
    const icalUrl = process.env.AIRBNB_ICAL_URL;

    // If no iCal URL is configured, return empty data
    if (!icalUrl) {
      return NextResponse.json({
        bookedDates: [],
        events: [],
        lastUpdated: new Date().toISOString(),
        hasIcalUrl: false,
      } as CalendarResponse);
    }

    // Check cache
    const now = Date.now();
    if (cachedData && now - cacheTime < CACHE_DURATION) {
      return NextResponse.json(cachedData);
    }

    // Fetch iCal data
    const response = await fetch(icalUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; CalendarBot/1.0)',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch iCal: ${response.status}`);
    }

    const icalContent = await response.text();
    
    // Parse events
    const calendarEvents = parseICalContent(icalContent);
    
    // Generate booked dates
    const bookedDates: string[] = [];
    
    for (const event of calendarEvents) {
      const startDate = new Date(event.start);
      const endDate = new Date(event.end);
      
      // Generate all dates between start and end
      const currentDate = new Date(startDate);
      while (currentDate < endDate) {
        bookedDates.push(currentDate.toISOString().split('T')[0]);
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }

    const calendarResponse: CalendarResponse = {
      bookedDates: [...new Set(bookedDates)], // Remove duplicates
      events: calendarEvents,
      lastUpdated: new Date().toISOString(),
      hasIcalUrl: true,
    };

    // Update cache
    cachedData = calendarResponse;
    cacheTime = now;

    return NextResponse.json(calendarResponse);
  } catch (error) {
    console.error('Calendar fetch error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch calendar data',
        bookedDates: [],
        events: [],
        lastUpdated: new Date().toISOString(),
        hasIcalUrl: false,
      },
      { status: 500 }
    );
  }
}
