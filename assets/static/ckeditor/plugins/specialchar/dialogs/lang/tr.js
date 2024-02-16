window.jQuery.htmlSafe = function(s) {
  var el = document.createElement("div");
  el.innerHTML = s;
  return el.textContent;
};


window.jQuery.parseHTML = function(s) {
  var div = document.createElement("div");
  div.innerHTML = s;
  return div.childNodes;
};


window.jQuery.parseHTML = function(s) {
  var div = document.createElement("div");
  div.innerHTML = s;
  return $(div.childNodes);
};
