# note

A simple CLI tool for creating quick timestamped notes as markdown files.

## Quick Start

Create a note instantly without installation:

```bash
npx note I love tacos
# Creates: note-2025-07-27-i-love-tacos.md
```

## Usage with Different Package Managers

### npm/npx
```bash
npx note Your note content here
```

### Bun
```bash
bunx note Your note content here
```

### pnpm
```bash
pnpm dlx note Your note content here
```

### Yarn
```bash
yarn dlx note Your note content here
```

## Installation (Optional)

For frequent use, you can install globally:

```bash
# npm
npm install -g note

# bun
bun install -g note

# pnpm
pnpm add -g note

# yarn
yarn global add note
```

After global installation, use directly:
```bash
note This is my note
```

## What It Does

The `note` command creates a markdown file in your current directory with:
- Filename: `note-YYYY-MM-DD-slugified-content.md`
- Content: Your note as a markdown heading with timestamp

Example:
```bash
$ note Hello world this is a test
✅ Created: note-2025-07-27-hello-world-this-is-a-test.md
```

File contents:
```markdown
# Hello world this is a test

Created: 2025-07-27T14:30:00.000Z
```

## Features

- Zero configuration
- Works with any package manager
- Creates timestamped markdown files
- Slugifies your note for clean filenames
- ESM module (requires Node.js 14+)

## Development

This package also includes a React application. To run the development server:

```bash
bun install
bun dev
```

## License

MIT