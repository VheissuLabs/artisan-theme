// Source of truth for the Ghostty theme; edit here, not in ghostty/artisan.
const { palette: p } = require('./palette')

// Ghostty's 16 ANSI slots, normal then bright.
const ansi = [
  p.ink, p.red, p.green, p.yellow, p.blue, p.pink, p.green, p.bg,
  p.gray, p.red, p.green, p.yellow, p.blue, p.pink, p.green, p.white,
]

const lines = [
  "# Artisan - A light theme inspired by Laravel's branding",
  '# https://github.com/VheissuLabs/artisan-theme',
  '',
  `background = ${p.bg}`,
  `foreground = ${p.ink}`,
  `cursor-color = ${p.red}`,
  `selection-background = ${p.selection}`,
  `selection-foreground = ${p.ink}`,
  '',
  '# Normal colors',
  ...ansi.slice(0, 8).map((color, i) => `palette = ${i}=${color}`),
  '',
  '# Bright colors',
  ...ansi.slice(8).map((color, i) => `palette = ${i + 8}=${color}`),
]

module.exports = lines.join('\n') + '\n'
