(function ($) {
  $.extend({selectionTexts: function () {
    var texts = [];
    if (window.getSelection) {
      var selection = window.getSelection();
      for (var i = 0; i < selection.rangeCount; i += 1) {
	var text = selection.getRangeAt(i).toString();
	if (text) texts.push(text);
      }
    } else {
      if (document.selection) {
	var text = document.selection.createRange().text;
	if (text) texts.push(text);
      }
    }
    return texts;
  }});
})(jQuery);