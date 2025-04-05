const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'message.txt');

try {
  fs.writeFileSync(filePath, 'Node.js is awesome!');
  console.log('File created and written successfully.');
} catch (err) {
  console.error('Error writing to file:', err.message);
}

fs.readFile(filePath, 'utf8', (readErr, data) => {
  if (readErr) {
    return console.error('Error reading file:', readErr.message);
  }
    console.log('File contents:', data);

  fs.unlink(filePath, (deleteErr) => {
    if (deleteErr) {
      return console.error('Error deleting file:', deleteErr.message);
    }
    console.log('File deleted successfully.');
  });
});
