'use strict';

/* global document */
var attachAnchors = function () {
  var lineId, lines, totalLines, anchorHash;
  var source = document.getElementsByClassName('prettyprint source linenums');
  var i = 0;
  var lineNumber = 0;

  if (source && source[0]) {
    anchorHash = document.location.hash.substring(1);
    lines = source[0].getElementsByTagName('tr');
    totalLines = lines.length;

    for (; i < totalLines; i++) {
      lineNumber++;
      lineId = 'line' + lineNumber;
      lines[i].id = lineId;
      lines[i].classList.add('linenums');
      lines[i].dataset.href = "#" + lineId
      if (lineId === anchorHash) {
        lines[i].className += ' selected';
        location.href = "#" + lineId;
      }
    }
  }

  $(".linenums").click(function() {
    window.location.href = $(this).data("href");
  });
}

$(document).ready(function() {
    $('code.hljs').each(function(i, block) {
        hljs.lineNumbersBlock(block);
    });

    setTimeout(attachAnchors, 200)
});