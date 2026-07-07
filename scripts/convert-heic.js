// Fotoğraflar klasöründeki HEIC dosyalarını JPEG'e çevirip
// public/images/gallery/ içine sıradaki gallery-XX.jpg adıyla ekler.
const fs = require('fs');
const path = require('path');
const convert = require('heic-convert');

const sourceDir = path.join(__dirname, '..', 'Fotoğraflar');
const galleryDir = path.join(__dirname, '..', 'public', 'images', 'gallery');

async function main() {
  const heicFiles = fs
    .readdirSync(sourceDir)
    .filter((f) => f.toLowerCase().endsWith('.heic'))
    .sort();

  const existing = fs
    .readdirSync(galleryDir)
    .map((f) => /^gallery-(\d+)\.jpg$/.exec(f))
    .filter(Boolean)
    .map((m) => parseInt(m[1], 10));
  let next = Math.max(...existing) + 1;

  for (const file of heicFiles) {
    const inputBuffer = fs.readFileSync(path.join(sourceDir, file));
    const outputBuffer = await convert({
      buffer: inputBuffer,
      format: 'JPEG',
      quality: 0.85,
    });
    const destName = `gallery-${String(next).padStart(2, '0')}.jpg`;
    fs.writeFileSync(path.join(galleryDir, destName), Buffer.from(outputBuffer));
    console.log(`${file} -> ${destName}`);
    next++;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
