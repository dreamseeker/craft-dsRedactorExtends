// Font Size
// Adapted from offical Redactor site
// https://imperavi.com/redactor/plugins/font-size/

if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.fontsize = function () {
  return {
    langs: {
      en: {
        "Size": "Size",
      },
      ja: {
        "Size": "文字サイズ",
      }
    },
    init: function () {
      var fontSize = [10, 11, 12, 14, 16, 18, 20, 24, 28, 30];
      var that = this;
      var dropdown = {};
      
      // if define custom fontSize, override them.
      if (this.opts.fontSize) {
        fontSize = this.opts.fontSize;
      }

      $.each(fontSize, function (i, s) {
        dropdown['s' + i] = {
          title: s + 'px', func: function () {
            that.fontsize.set(s);
          }
        };
      });

      dropdown.remove = {title: 'Remove Font Size', func: that.fontsize.reset};

      var button = this.button.addBefore('format', 'fontsize', this.lang.get('Size'));
      this.button.setIcon(button, '<i class="re-icon-fontsize"></i>');
      this.button.addDropdown(button, dropdown);
    },
    set: function (size) {
      this.inline.format('span', 'style', 'font-size: ' + size + 'px;');
    },
    reset: function () {
      this.inline.removeStyleRule('font-size');
    }
  };
};
