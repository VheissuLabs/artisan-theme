// Generated from themes/laravel-theme-color-theme.json during the palette migration.
// This is now the source of truth for the VS Code theme; edit here, not in themes/.
const { palette: p, alpha } = require('./palette')

module.exports = {
  "name": "Artisan Theme",
  "type": "light",
  "semanticHighlighting": true,
  "semanticTokenColors": {
    "namespace": p.blue,
    "type": p.blue,
    "class": p.blue,
    "interface": p.blue,
    "enum": p.blue,
    "struct": p.blue,
    "typeParameter": p.blue,
    "function": p.blue,
    "method": p.blue,
    "macro": p.yellow,
    "variable": p.red,
    "parameter": p.red,
    "property": p.red,
    "enumMember": p.pink,
    "decorator": p.yellow,
    "comment": {
      "foreground": p.gray,
      "fontStyle": "italic"
    },
    "string": p.green,
    "keyword": p.red,
    "number": p.pink,
    "operator": p.ink,
    "regexp": p.yellow
  },
  "colors": {
    "foreground": p.ink,
    "focusBorder": alpha(p.red, '88'),
    "selection.background": p.selection,
    "descriptionForeground": p.gray,
    "errorForeground": p.red,
    "icon.foreground": p.ink,
    "widget.shadow": alpha(p.black, '15'),
    "textLink.foreground": p.blue,
    "textLink.activeForeground": p.red,
    "textBlockQuote.background": alpha(p.border, '44'),
    "textBlockQuote.border": p.border,
    "textCodeBlock.background": alpha(p.border, '44'),
    "textPreformat.foreground": p.red,
    "textSeparator.foreground": p.border,
    "editor.background": p.bg,
    "editor.foreground": p.ink,
    "editorCursor.foreground": p.red,
    "editorCursor.background": p.white,
    "editor.lineHighlightBackground": p.surfaceHover,
    "editor.lineHighlightBorder": p.surfaceHover,
    "editor.selectionBackground": p.selection,
    "editor.selectionHighlightBackground": alpha(p.selection, '88'),
    "editor.wordHighlightBackground": alpha(p.yellow, '33'),
    "editor.wordHighlightStrongBackground": alpha(p.yellow, '55'),
    "editor.findMatchBackground": alpha(p.yellow, '66'),
    "editor.findMatchHighlightBackground": alpha(p.yellow, '33'),
    "editor.rangeHighlightBackground": alpha(p.yellow, '20'),
    "editorLink.activeForeground": p.blue,
    "editorWhitespace.foreground": p.border,
    "editorIndentGuide.background1": p.border,
    "editorIndentGuide.activeBackground1": p.grayPale,
    "editorRuler.foreground": p.border,
    "editorBracketMatch.background": alpha(p.yellow, '44'),
    "editorBracketMatch.border": p.yellow,
    "editorLineNumber.foreground": p.grayLight,
    "editorLineNumber.activeForeground": p.ink,
    "editorGutter.addedBackground": p.green,
    "editorGutter.modifiedBackground": p.blue,
    "editorGutter.deletedBackground": p.red,
    "sideBar.background": p.bg,
    "sideBar.foreground": p.ink,
    "sideBar.border": p.border,
    "sideBarTitle.foreground": p.ink,
    "sideBarSectionHeader.background": p.bg,
    "sideBarSectionHeader.foreground": p.ink,
    "sideBarSectionHeader.border": p.border,
    "activityBar.background": p.bg,
    "activityBar.foreground": p.red,
    "activityBar.inactiveForeground": alpha(p.ink, '66'),
    "activityBar.border": p.border,
    "activityBar.activeBorder": p.red,
    "activityBarBadge.background": p.red,
    "activityBarBadge.foreground": p.white,
    "titleBar.activeBackground": p.bg,
    "titleBar.activeForeground": p.ink,
    "titleBar.inactiveBackground": p.bg,
    "titleBar.inactiveForeground": alpha(p.ink, '99'),
    "tab.activeBackground": p.white,
    "tab.activeForeground": p.ink,
    "tab.activeBorder": p.red,
    "tab.inactiveBackground": p.bg,
    "tab.inactiveForeground": alpha(p.ink, 'AA'),
    "tab.hoverBackground": p.white,
    "tab.unfocusedActiveBackground": p.white,
    "tab.unfocusedActiveForeground": alpha(p.ink, 'CC'),
    "editorGroupHeader.tabsBackground": p.bg,
    "statusBar.background": p.bg,
    "statusBar.foreground": p.ink,
    "statusBar.border": alpha(p.black, '00'),
    "statusBar.debuggingBackground": p.red,
    "statusBar.debuggingForeground": p.white,
    "statusBar.noFolderBackground": p.bg,
    "statusBar.noFolderForeground": p.ink,
    "statusBarItem.hoverBackground": p.border,
    "statusBarItem.activeBackground": p.surfaceActive,
    "statusBarItem.prominentBackground": p.border,
    "statusBarItem.prominentHoverBackground": p.surfaceActive,
    "statusBarItem.remoteBackground": p.green,
    "statusBarItem.remoteForeground": p.white,
    "input.background": p.white,
    "input.border": p.border,
    "input.foreground": p.ink,
    "input.placeholderForeground": alpha(p.ink, '66'),
    "inputOption.activeBackground": alpha(p.blue, '33'),
    "inputOption.activeBorder": p.blue,
    "inputValidation.errorBackground": p.white,
    "inputValidation.errorBorder": p.red,
    "inputValidation.warningBackground": p.white,
    "inputValidation.warningBorder": p.yellow,
    "inputValidation.infoBackground": p.white,
    "inputValidation.infoBorder": p.blue,
    "button.background": p.red,
    "button.foreground": p.white,
    "button.hoverBackground": p.redDark,
    "button.secondaryBackground": p.border,
    "button.secondaryForeground": p.ink,
    "button.secondaryHoverBackground": p.surfaceActive,
    "dropdown.background": p.white,
    "dropdown.border": p.border,
    "dropdown.foreground": p.ink,
    "checkbox.background": p.white,
    "checkbox.border": p.border,
    "checkbox.foreground": p.ink,
    "list.activeSelectionBackground": p.selection,
    "list.activeSelectionForeground": p.ink,
    "list.inactiveSelectionBackground": alpha(p.selection, '88'),
    "list.inactiveSelectionForeground": p.ink,
    "list.hoverBackground": p.surfaceHover,
    "list.focusBackground": p.selection,
    "list.focusForeground": p.ink,
    "list.highlightForeground": p.red,
    "list.errorForeground": p.red,
    "list.warningForeground": p.yellow,
    "tree.indentGuidesStroke": p.border,
    "scrollbar.shadow": alpha(p.black, '00'),
    "scrollbarSlider.background": alpha(p.ink, '20'),
    "scrollbarSlider.hoverBackground": alpha(p.ink, '40'),
    "scrollbarSlider.activeBackground": alpha(p.ink, '60'),
    "minimap.selectionHighlight": p.selection,
    "minimap.findMatchHighlight": alpha(p.yellow, '88'),
    "minimapGutter.addedBackground": p.green,
    "minimapGutter.modifiedBackground": p.blue,
    "minimapGutter.deletedBackground": p.red,
    "quickInput.background": p.bg,
    "quickInput.foreground": p.ink,
    "quickInputTitle.background": p.bg,
    "quickInputList.focusBackground": p.selection,
    "pickerGroup.foreground": p.red,
    "pickerGroup.border": p.border,
    "peekView.border": p.red,
    "peekViewEditor.background": p.bgRaised,
    "peekViewEditor.matchHighlightBackground": alpha(p.yellow, '55'),
    "peekViewResult.background": p.bg,
    "peekViewResult.fileForeground": p.ink,
    "peekViewResult.lineForeground": alpha(p.ink, 'CC'),
    "peekViewResult.matchHighlightBackground": alpha(p.yellow, '55'),
    "peekViewResult.selectionBackground": p.selection,
    "peekViewResult.selectionForeground": p.ink,
    "peekViewTitle.background": p.bg,
    "peekViewTitleDescription.foreground": p.gray,
    "peekViewTitleLabel.foreground": p.ink,
    "badge.background": p.red,
    "badge.foreground": p.white,
    "notificationCenterHeader.background": p.bg,
    "notifications.background": p.white,
    "notifications.border": p.border,
    "notifications.foreground": p.ink,
    "notificationsErrorIcon.foreground": p.red,
    "notificationsWarningIcon.foreground": p.yellow,
    "notificationsInfoIcon.foreground": p.blue,
    "gitDecoration.addedResourceForeground": p.green,
    "gitDecoration.modifiedResourceForeground": p.blue,
    "gitDecoration.deletedResourceForeground": p.red,
    "gitDecoration.untrackedResourceForeground": p.green,
    "gitDecoration.ignoredResourceForeground": p.grayLight,
    "gitDecoration.conflictingResourceForeground": p.red,
    "gitDecoration.renamedResourceForeground": p.green,
    "gitDecoration.stageModifiedResourceForeground": p.blue,
    "gitDecoration.stageDeletedResourceForeground": p.red,
    "diffEditor.insertedTextBackground": alpha(p.green, '15'),
    "diffEditor.removedTextBackground": alpha(p.red, '15'),
    "diffEditor.insertedLineBackground": alpha(p.green, '10'),
    "diffEditor.removedLineBackground": alpha(p.red, '10'),
    "panel.background": p.bg,
    "panel.border": p.border,
    "panelTitle.activeBorder": p.red,
    "panelTitle.activeForeground": p.ink,
    "panelTitle.inactiveForeground": alpha(p.ink, '99'),
    "terminal.background": p.bg,
    "terminal.foreground": p.ink,
    "terminal.ansiBlack": p.ink,
    "terminal.ansiRed": p.red,
    "terminal.ansiGreen": p.green,
    "terminal.ansiYellow": p.yellow,
    "terminal.ansiBlue": p.blue,
    "terminal.ansiMagenta": p.pink,
    "terminal.ansiCyan": p.green,
    "terminal.ansiWhite": p.bg,
    "terminal.ansiBrightBlack": p.gray,
    "terminal.ansiBrightRed": p.red,
    "terminal.ansiBrightGreen": p.green,
    "terminal.ansiBrightYellow": p.yellow,
    "terminal.ansiBrightBlue": p.blue,
    "terminal.ansiBrightMagenta": p.pink,
    "terminal.ansiBrightCyan": p.green,
    "terminal.ansiBrightWhite": p.white,
    "terminalCursor.foreground": p.red
  },
  "tokenColors": [
    {
      "name": "Comments",
      "scope": [
        "comment",
        "punctuation.definition.comment"
      ],
      "settings": {
        "foreground": p.gray,
        "fontStyle": "italic"
      }
    },
    {
      "name": "Keywords",
      "scope": [
        "keyword",
        "keyword.control",
        "keyword.control.conditional",
        "keyword.control.loop",
        "keyword.control.import",
        "keyword.control.from",
        "keyword.control.flow",
        "keyword.control.trycatch",
        "keyword.control.exception"
      ],
      "settings": {
        "foreground": p.red
      }
    },
    {
      "name": "Operators",
      "scope": [
        "keyword.operator",
        "keyword.operator.arithmetic",
        "keyword.operator.assignment",
        "keyword.operator.logical",
        "keyword.operator.comparison",
        "keyword.operator.relational"
      ],
      "settings": {
        "foreground": p.ink
      }
    },
    {
      "name": "Operator keywords (new, instanceof, typeof)",
      "scope": [
        "keyword.operator.new",
        "keyword.operator.expression",
        "keyword.operator.instanceof",
        "keyword.operator.typeof",
        "keyword.operator.word"
      ],
      "settings": {
        "foreground": p.red
      }
    },
    {
      "name": "Storage (var, let, const, class, function, etc.)",
      "scope": [
        "storage",
        "storage.type",
        "storage.modifier"
      ],
      "settings": {
        "foreground": p.red
      }
    },
    {
      "name": "Strings",
      "scope": [
        "string",
        "string.quoted",
        "string.quoted.single",
        "string.quoted.double",
        "string.quoted.triple",
        "string.template",
        "punctuation.definition.string.begin",
        "punctuation.definition.string.end"
      ],
      "settings": {
        "foreground": p.green
      }
    },
    {
      "name": "String interpolation",
      "scope": [
        "meta.template.expression",
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "meta.interpolation",
        "punctuation.section.interpolation.begin",
        "punctuation.section.interpolation.end"
      ],
      "settings": {
        "foreground": p.ink
      }
    },
    {
      "name": "Regular expressions",
      "scope": [
        "string.regexp"
      ],
      "settings": {
        "foreground": p.yellow
      }
    },
    {
      "name": "Escape characters",
      "scope": [
        "constant.character.escape"
      ],
      "settings": {
        "foreground": p.pink
      }
    },
    {
      "name": "Numbers",
      "scope": [
        "constant.numeric",
        "constant.numeric.integer",
        "constant.numeric.float",
        "constant.numeric.hex"
      ],
      "settings": {
        "foreground": p.pink
      }
    },
    {
      "name": "Language constants (true, false, null)",
      "scope": [
        "constant.language",
        "constant.language.boolean",
        "constant.language.null",
        "constant.language.undefined"
      ],
      "settings": {
        "foreground": p.pink
      }
    },
    {
      "name": "Other constants",
      "scope": [
        "constant.other",
        "variable.other.constant"
      ],
      "settings": {
        "foreground": p.pink
      }
    },
    {
      "name": "Variables",
      "scope": [
        "variable",
        "variable.other",
        "variable.other.readwrite"
      ],
      "settings": {
        "foreground": p.red
      }
    },
    {
      "name": "Variable - this/self/super",
      "scope": [
        "variable.language",
        "variable.language.this",
        "variable.language.self",
        "variable.language.super"
      ],
      "settings": {
        "foreground": p.red,
        "fontStyle": "italic"
      }
    },
    {
      "name": "Parameters",
      "scope": [
        "variable.parameter"
      ],
      "settings": {
        "foreground": p.red
      }
    },
    {
      "name": "Object properties",
      "scope": [
        "variable.other.property",
        "variable.other.member",
        "variable.other.object.property",
        "support.variable.property"
      ],
      "settings": {
        "foreground": p.red
      }
    },
    {
      "name": "Function definitions",
      "scope": [
        "entity.name.function",
        "entity.name.function.method"
      ],
      "settings": {
        "foreground": p.blue
      }
    },
    {
      "name": "Function calls",
      "scope": [
        "meta.function-call entity.name.function",
        "variable.function",
        "support.function"
      ],
      "settings": {
        "foreground": p.blue
      }
    },
    {
      "name": "Classes / Types / Interfaces",
      "scope": [
        "entity.name.class",
        "entity.name.type",
        "entity.name.type.class",
        "entity.name.type.interface",
        "entity.name.type.enum",
        "entity.name.type.struct",
        "entity.name.type.alias"
      ],
      "settings": {
        "foreground": p.blue
      }
    },
    {
      "name": "Inherited class",
      "scope": [
        "entity.other.inherited-class"
      ],
      "settings": {
        "foreground": p.blue
      }
    },
    {
      "name": "Type references",
      "scope": [
        "support.type",
        "support.class",
        "storage.type.built-in",
        "storage.type.primitive"
      ],
      "settings": {
        "foreground": p.blue
      }
    },
    {
      "name": "Decorators / Annotations",
      "scope": [
        "meta.annotation",
        "meta.decorator",
        "punctuation.decorator",
        "entity.name.function.decorator"
      ],
      "settings": {
        "foreground": p.yellow
      }
    },
    {
      "name": "HTML/XML Tags",
      "scope": [
        "entity.name.tag",
        "punctuation.definition.tag.begin",
        "punctuation.definition.tag.end"
      ],
      "settings": {
        "foreground": p.red
      }
    },
    {
      "name": "HTML/XML Attributes",
      "scope": [
        "entity.other.attribute-name"
      ],
      "settings": {
        "foreground": p.blue
      }
    },
    {
      "name": "CSS Selectors",
      "scope": [
        "entity.name.tag.css",
        "entity.other.attribute-name.class.css",
        "entity.other.attribute-name.id.css"
      ],
      "settings": {
        "foreground": p.red
      }
    },
    {
      "name": "CSS Property names",
      "scope": [
        "support.type.property-name.css"
      ],
      "settings": {
        "foreground": p.blue
      }
    },
    {
      "name": "CSS Units",
      "scope": [
        "keyword.other.unit.css"
      ],
      "settings": {
        "foreground": p.pink
      }
    },
    {
      "name": "Punctuation",
      "scope": [
        "punctuation.separator",
        "punctuation.terminator",
        "punctuation.accessor",
        "punctuation.section",
        "meta.brace.round",
        "meta.brace.square",
        "meta.brace.curly"
      ],
      "settings": {
        "foreground": p.ink
      }
    },
    {
      "name": "Variable prefix sigils ($, @)",
      "scope": [
        "punctuation.definition.variable"
      ],
      "settings": {
        "foreground": p.red
      }
    },
    {
      "name": "PHP / Blade directives",
      "scope": [
        "keyword.blade",
        "support.function.construct.begin.blade",
        "support.function.construct.end.blade"
      ],
      "settings": {
        "foreground": p.red
      }
    },
    {
      "name": "Markdown headings",
      "scope": [
        "markup.heading",
        "entity.name.section",
        "markup.heading.setext"
      ],
      "settings": {
        "foreground": p.red,
        "fontStyle": "bold"
      }
    },
    {
      "name": "Markdown bold",
      "scope": [
        "markup.bold"
      ],
      "settings": {
        "fontStyle": "bold"
      }
    },
    {
      "name": "Markdown italic",
      "scope": [
        "markup.italic"
      ],
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "name": "Markdown links",
      "scope": [
        "markup.underline.link"
      ],
      "settings": {
        "foreground": p.blue
      }
    },
    {
      "name": "Markdown code",
      "scope": [
        "markup.raw",
        "markup.inline.raw",
        "markup.raw.block",
        "markup.fenced_code.block"
      ],
      "settings": {
        "foreground": p.green
      }
    },
    {
      "name": "Markdown list markers",
      "scope": [
        "markup.list punctuation.definition.list"
      ],
      "settings": {
        "foreground": p.red
      }
    },
    {
      "name": "Markdown quotes",
      "scope": [
        "markup.quote"
      ],
      "settings": {
        "foreground": p.gray,
        "fontStyle": "italic"
      }
    },
    {
      "name": "Diff inserted",
      "scope": [
        "markup.inserted"
      ],
      "settings": {
        "foreground": p.green
      }
    },
    {
      "name": "Diff deleted",
      "scope": [
        "markup.deleted"
      ],
      "settings": {
        "foreground": p.red
      }
    },
    {
      "name": "Diff changed",
      "scope": [
        "markup.changed"
      ],
      "settings": {
        "foreground": p.blue
      }
    },
    {
      "name": "JSON keys",
      "scope": [
        "support.type.property-name.json"
      ],
      "settings": {
        "foreground": p.blue
      }
    },
    {
      "name": "YAML keys",
      "scope": [
        "entity.name.tag.yaml"
      ],
      "settings": {
        "foreground": p.blue
      }
    },
    {
      "name": "Invalid / Illegal",
      "scope": [
        "invalid.illegal"
      ],
      "settings": {
        "foreground": p.white,
        "background": p.red
      }
    },
    {
      "name": "Deprecated",
      "scope": [
        "invalid.deprecated"
      ],
      "settings": {
        "foreground": p.white,
        "background": p.yellow
      }
    },
    {
      "name": "Namespace / Module names",
      "scope": [
        "entity.name.namespace",
        "entity.name.type.module"
      ],
      "settings": {
        "foreground": p.blue
      }
    },
    {
      "name": "Support constants",
      "scope": [
        "support.constant"
      ],
      "settings": {
        "foreground": p.pink
      }
    }
  ]
}
