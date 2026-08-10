// Generated from zed/themes/artisan-theme.json during the palette migration.
// This is now the source of truth for the Zed theme; edit here, not in zed/themes/.
const { palette: p, alpha } = require('./palette')

// Zed requires an explicit alpha channel on every color; default it to fully opaque.
const c = (color, aa = 'ff') => alpha(color, aa)

module.exports = {
  "$schema": "https://zed.dev/schema/themes/v0.2.0.json",
  "name": "Artisan Theme",
  "author": "VheissuLabs",
  "themes": [
    {
      "name": "Artisan Theme",
      "appearance": "light",
      "style": {
        "background": c(p.bg),
        "border": c(p.black, '00'),
        "border.variant": c(p.border),
        "border.focused": c(p.red, '88'),
        "border.selected": c(p.border),
        "border.transparent": c(p.black, '00'),
        "border.disabled": c(p.border),
        "surface.background": c(p.bg),
        "elevated_surface.background": c(p.bg),
        "element.background": c(p.border),
        "element.hover": c(p.surfaceHover),
        "element.active": c(p.surfaceActive),
        "element.selected": c(p.selection),
        "element.disabled": c(p.border),
        "ghost_element.background": c(p.black, '00'),
        "ghost_element.hover": c(p.border),
        "ghost_element.active": c(p.surfaceActive),
        "ghost_element.selected": c(p.selection),
        "ghost_element.disabled": c(p.border),
        "drop_target.background": c(p.selection, '88'),
        "text": c(p.ink),
        "text.muted": c(p.gray),
        "text.placeholder": c(p.ink, '66'),
        "text.disabled": c(p.ink, '44'),
        "text.accent": c(p.blue),
        "icon": c(p.ink),
        "icon.muted": c(p.ink, '66'),
        "icon.disabled": c(p.ink, '33'),
        "icon.placeholder": c(p.ink, '66'),
        "icon.accent": c(p.red),
        "editor.foreground": c(p.ink),
        "editor.background": c(p.bg),
        "editor.gutter.background": c(p.bg),
        "editor.active_line.background": c(p.surfaceHover),
        "editor.line_number": c(p.grayLight),
        "editor.active_line_number": c(p.ink),
        "editor.invisible": c(p.border),
        "editor.wrap_guide": c(p.border),
        "editor.active_wrap_guide": c(p.grayPale),
        "editor.document_highlight.read_background": c(p.yellow, '33'),
        "editor.document_highlight.write_background": c(p.yellow, '55'),
        "tab_bar.background": c(p.bg),
        "tab.inactive_background": c(p.bg),
        "tab.active_background": c(p.bg),
        "status_bar.background": c(p.bg),
        "title_bar.background": c(p.bg),
        "title_bar.inactive_background": c(p.bg),
        "toolbar.background": c(p.bg),
        "panel.background": c(p.bg),
        "panel.focused_border": c(p.blue),
        "pane.focused_border": c(p.border),
        "scrollbar.thumb.background": c(p.ink, '20'),
        "scrollbar.thumb.hover_background": c(p.ink, '40'),
        "scrollbar.thumb.border": c(p.black, '00'),
        "scrollbar.track.background": c(p.bg, '00'),
        "scrollbar.track.border": c(p.black, '00'),
        "search.match_background": c(p.yellow, '66'),
        "link_text.hover": c(p.red),
        "conflict": c(p.red),
        "conflict.background": c(p.red, '15'),
        "conflict.border": c(p.red),
        "created": c(p.green),
        "created.background": c(p.green, '15'),
        "created.border": c(p.green),
        "deleted": c(p.red),
        "deleted.background": c(p.red, '15'),
        "deleted.border": c(p.red),
        "error": c(p.red),
        "error.background": c(p.red, '15'),
        "error.border": c(p.red),
        "hidden": c(p.grayMid),
        "hidden.background": c(p.grayMid, '15'),
        "hidden.border": c(p.grayMid),
        "hint": c(p.gray),
        "hint.background": c(p.gray, '15'),
        "hint.border": c(p.gray),
        "ignored": c(p.grayMid),
        "ignored.background": c(p.grayMid, '15'),
        "ignored.border": c(p.grayMid),
        "info": c(p.blue),
        "info.background": c(p.blue, '15'),
        "info.border": c(p.blue),
        "modified": c(p.blue),
        "modified.background": c(p.blue, '15'),
        "modified.border": c(p.blue),
        "predictive": c(p.grayLight),
        "predictive.background": c(p.grayLight, '15'),
        "predictive.border": c(p.grayLight),
        "renamed": c(p.green),
        "renamed.background": c(p.green, '15'),
        "renamed.border": c(p.green),
        "success": c(p.green),
        "success.background": c(p.green, '15'),
        "success.border": c(p.green),
        "unreachable": c(p.grayLight),
        "unreachable.background": c(p.grayLight, '15'),
        "unreachable.border": c(p.grayLight),
        "warning": c(p.yellow),
        "warning.background": c(p.yellow, '15'),
        "warning.border": c(p.yellow),
        "version_control.added": c(p.green, '20'),
        "version_control.modified": c(p.blue),
        "version_control.deleted": c(p.red, '20'),
        "terminal.background": c(p.bg),
        "terminal.foreground": c(p.ink),
        "terminal.ansi.black": c(p.ink),
        "terminal.ansi.red": c(p.red),
        "terminal.ansi.green": c(p.green),
        "terminal.ansi.yellow": c(p.yellow),
        "terminal.ansi.blue": c(p.blue),
        "terminal.ansi.magenta": c(p.pink),
        "terminal.ansi.cyan": c(p.green),
        "terminal.ansi.white": c(p.bg),
        "terminal.ansi.bright_black": c(p.gray),
        "terminal.ansi.bright_red": c(p.red),
        "terminal.ansi.bright_green": c(p.green),
        "terminal.ansi.bright_yellow": c(p.yellow),
        "terminal.ansi.bright_blue": c(p.blue),
        "terminal.ansi.bright_magenta": c(p.pink),
        "terminal.ansi.bright_cyan": c(p.green),
        "terminal.ansi.bright_white": c(p.white),
        "syntax": {
          "attribute": {
            "color": c(p.blue)
          },
          "boolean": {
            "color": c(p.pink)
          },
          "comment": {
            "color": c(p.gray),
            "font_style": "italic"
          },
          "comment.doc": {
            "color": c(p.gray),
            "font_style": "italic"
          },
          "constant": {
            "color": c(p.pink)
          },
          "constructor": {
            "color": c(p.blue)
          },
          "embedded": {
            "color": c(p.ink)
          },
          "emphasis": {
            "font_style": "italic"
          },
          "emphasis.strong": {
            "font_weight": 700
          },
          "enum": {
            "color": c(p.blue)
          },
          "function": {
            "color": c(p.blue)
          },
          "hint": {
            "color": c(p.gray)
          },
          "keyword": {
            "color": c(p.red)
          },
          "label": {
            "color": c(p.blue)
          },
          "link_text": {
            "color": c(p.blue)
          },
          "link_uri": {
            "color": c(p.blue)
          },
          "namespace": {
            "color": c(p.blue)
          },
          "number": {
            "color": c(p.pink)
          },
          "operator": {
            "color": c(p.ink)
          },
          "predictive": {
            "color": c(p.grayLight)
          },
          "preproc": {
            "color": c(p.red)
          },
          "primary": {
            "color": c(p.ink)
          },
          "property": {
            "color": c(p.red)
          },
          "punctuation": {
            "color": c(p.ink)
          },
          "punctuation.bracket": {
            "color": c(p.ink)
          },
          "punctuation.delimiter": {
            "color": c(p.ink)
          },
          "punctuation.list_marker": {
            "color": c(p.red)
          },
          "punctuation.special": {
            "color": c(p.red)
          },
          "selector": {
            "color": c(p.red)
          },
          "string": {
            "color": c(p.green)
          },
          "string.escape": {
            "color": c(p.pink)
          },
          "string.regex": {
            "color": c(p.yellow)
          },
          "string.special": {
            "color": c(p.pink)
          },
          "string.special.symbol": {
            "color": c(p.pink)
          },
          "tag": {
            "color": c(p.red)
          },
          "text.literal": {
            "color": c(p.green)
          },
          "title": {
            "color": c(p.red),
            "font_weight": 700
          },
          "type": {
            "color": c(p.blue)
          },
          "variable": {
            "color": c(p.red)
          },
          "variable.special": {
            "color": c(p.red),
            "font_style": "italic"
          },
          "variant": {
            "color": c(p.pink)
          }
        },
        "players": [
          {
            "cursor": c(p.red),
            "background": c(p.red, '20'),
            "selection": c(p.selection)
          },
          {
            "cursor": c(p.blue),
            "background": c(p.blue, '20'),
            "selection": c(p.selection)
          },
          {
            "cursor": c(p.green),
            "background": c(p.green, '20'),
            "selection": c(p.selection)
          },
          {
            "cursor": c(p.yellow),
            "background": c(p.yellow, '20'),
            "selection": c(p.selection)
          },
          {
            "cursor": c(p.pink),
            "background": c(p.pink, '20'),
            "selection": c(p.selection)
          },
          {
            "cursor": c(p.gray),
            "background": c(p.gray, '20'),
            "selection": c(p.selection)
          },
          {
            "cursor": c(p.ink),
            "background": c(p.ink, '20'),
            "selection": c(p.selection)
          },
          {
            "cursor": c(p.redDark),
            "background": c(p.redDark, '20'),
            "selection": c(p.selection)
          }
        ]
      }
    }
  ]
}
