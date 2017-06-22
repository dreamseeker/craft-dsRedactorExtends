// Inline Style
// Adapted from offical Redactor site
// https://imperavi.com/redactor/plugins/inlinestyle/

if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.inlinestyle = function () {
  return {
    langs: {
      en: {
        "style": "Style"
      },
      ja: {
        "style": "インラインスタイル"
      }
    },
    init: function () {
      var tags = {
        "marked": {
          title: "Marked",
          args: ['mark']
        },
        "code": {
          title: "Code",
          args: ['code']
        },
        "sample": {
          title: "Sample",
          args: ['samp']
        },
        "variable": {
          title: "Variable",
          args: ['var']
        },
        "shortcut": {
          title: "Shortcut",
          args: ['kbd']
        },
        "cite": {
          title: "Cite",
          args: ['cite']
        },
        "sup": {
          title: "Superscript",
          args: ['sup']
        },
        "sub": {
          title: "Subscript",
          args: ['sub']
        }
      };

      // if define custom tags, override them.
      if (this.opts.inlinestyleTags) {
        tags = this.opts.inlinestyleTags;
      }

      var that = this;
      var dropdown = {};

      $.each(tags, function (i, s) {
        dropdown[i] = {title: s.title, func: 'inline.format', args: s.args};
      });

      var button = this.button.addAfter('format', 'inline', this.lang.get('style'));
      this.button.setIcon(button, '<i class="re-icon-inline"></i>');
      this.button.addDropdown(button, dropdown);
    }
  };
}
