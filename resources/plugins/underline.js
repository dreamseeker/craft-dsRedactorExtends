// Underline
// Adapted from offical Redactor site
// https://imperavi.com/redactor/examples/button-underline/

if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.underline = function () {
  return {
    langs: {
      en: {
        "U": "U",
      },
      ja: {
        "U": "下線",
      }
    },
    init: function () {
      var button = this.button.addAfter('italic', 'underline', this.lang.get('U'));
      this.button.addCallback(button, this.underline.format);

      // Set icon
      this.button.setIcon(button, '<i class="re-icon-underline"></i>');
    },
    format: function () {
      this.inline.format('u');
    }
  };
};
