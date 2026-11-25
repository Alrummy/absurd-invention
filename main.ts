const fs = require('node:fs');
const path = require('node:path');

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
// The joke is that a mute button makes the meeting realize it should be an email.
const text = 'Introducing the Meeting Mute Button for Humans: press it and your coworker pauses mid-sentence for exactly as long as it takes everyone to remember the meeting could have been an email.\n';
fs.writeFileSync(
  path.join(outDir, 'entry.txt'),
  text,
  'utf8'
);
