#!/usr/bin/env node

import { writeFileSync } from 'fs';

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: npx note <your note here>');
  process.exit(0);
}

const noteContent = args.join(' ');
const date = new Date().toISOString().split('T')[0];
const slug = noteContent
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')
  .substring(0, 50);

const filename = `note-${date}-${slug}.md`;
const fullContent = `# ${noteContent}\n\nCreated: ${new Date().toISOString()}\n`;

writeFileSync(filename, fullContent, 'utf8');
console.log(`✅ Created: ${filename}`);