#!/usr/bin/env node
// Regenerates every theme file from src/palette.js. Run with `npm run build`.
const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')

const outputs = [
  ['themes/laravel-theme-color-theme.json', JSON.stringify(require('./vscode-theme'), null, 2) + '\n'],
  ['zed/themes/artisan-theme.json', JSON.stringify(require('./zed-theme'), null, 2) + '\n'],
  ['ghostty/artisan', require('./ghostty-theme')],
  // Zed validates the license inside the extension directory (zed/), not the
  // repo root, so keep a copy there rather than letting the two drift.
  ['zed/LICENSE', fs.readFileSync(path.join(root, 'LICENSE'), 'utf8')],
]

for (const [file, contents] of outputs) {
  const target = path.join(root, file)
  fs.mkdirSync(path.dirname(target), { recursive: true })
  fs.writeFileSync(target, contents)
  console.log('wrote ' + file)
}
