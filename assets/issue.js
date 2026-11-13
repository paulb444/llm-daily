// Wrap each H2 section in <details> (collapsible) and build a jump-list contents block.
(function () {
  var art = document.getElementById('issue'); if (!art) return;
  var h2s = Array.prototype.slice.call(art.querySelectorAll(':scope > h2'));
  if (!h2s.length) return;
  var toc = document.createElement('details'); toc.className = 'toc'; toc.open = false;
  toc.innerHTML = '<summary>Contents (' + h2s.length + ')</summary>';
  var ul = document.createElement('ul'); toc.appendChild(ul);
  h2s.forEach(function (h) {
    var d = document.createElement('details'); d.className = 'sec'; d.open = true;
    if (h.id) { d.id = 'sec-' + h.id; }
    var s = document.createElement('summary'); s.appendChild(h.cloneNode(true));
    d.appendChild(s);
    var n = h.nextSibling;
    while (n && !(n.nodeType === 1 && n.tagName === 'H2')) { var nx = n.nextSibling; d.appendChild(n); n = nx; }
    h.parentNode.replaceChild(d, h);
    var li = document.createElement('li'); var a = document.createElement('a');
    a.textContent = h.textContent; a.href = '#' + d.id;
    a.onclick = function () { d.open = true; };
    li.appendChild(a); ul.appendChild(li);
  });
  var first = art.querySelector('details.sec');
  var h1 = art.querySelector('h1');
  art.insertBefore(toc, h1 ? h1.nextSibling : first);
  art.querySelectorAll('table').forEach(function (t) {
    var w = document.createElement('div'); w.className = 'tablewrap'; t.parentNode.insertBefore(w, t); w.appendChild(t);
  });
  art.querySelectorAll('a[href^="http"]').forEach(function (a) { a.target = '_blank'; a.rel = 'noopener'; });
})();
