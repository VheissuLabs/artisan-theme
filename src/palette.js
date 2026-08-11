/**
 * Single source of truth for every color in Artisan Theme.
 *
 * Edit a value here and run `npm run build` to regenerate the VS Code, Zed and
 * Ghostty themes. Nothing downstream should contain a raw hex literal.
 */

const palette = {
  // Laravel brand + accents
  red: '#CA2606',
  redDark: '#B52400',
  green: '#007A4C',
  yellow: '#F9B803',
  blue: '#2176D3',
  pink: '#B23473',
  selection: '#D4E9FF',

  // Neutrals, darkest to lightest
  black: '#000000',
  ink: '#171717',
  gray: '#6B6B6B',
  grayDim: '#7F7F7F',
  grayMid: '#888888',
  grayLight: '#AAAAAA',
  grayPale: '#CACACA',
  borderStrong: '#D2D2D2',
  surfaceActive: '#D5D5D5',
  border: '#E0E0E0',
  surfaceHover: '#EBEBEB',
  bg: '#F3F3F3',
  bgRaised: '#FAFAFA',
  white: '#FFFFFF',
}

/**
 * Append an alpha channel: alpha(palette.red, '88') -> '#CA260688'
 */
function alpha(color, aa) {
  return color + aa
}

module.exports = { palette, alpha }
