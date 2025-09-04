// start.js
const { spawn } = require('child_process');
const path = require('path');

// This will run "electron ." just like npm start
const electronPath = path.join(__dirname, 'node_modules', '.bin', 'electron.cmd');

const child = spawn(electronPath, ['.'], { stdio: 'inherit' });

child.on('close', (code) => {
  process.exit(code);
});
