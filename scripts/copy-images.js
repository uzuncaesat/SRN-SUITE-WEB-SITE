const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'Fotoğraflar');
const destDir = path.join(__dirname, '..', 'public', 'images');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Read source directory
const files = fs.readdirSync(sourceDir);

// Copy each .jpg file
files.forEach((file) => {
  if (file.toLowerCase().endsWith('.jpg')) {
    const sourcePath = path.join(sourceDir, file);
    const destPath = path.join(destDir, file);
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied: ${file}`);
  }
});

console.log('All images copied successfully!');
