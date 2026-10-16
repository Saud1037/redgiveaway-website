(function () {
  var p = location.pathname.replace(/\/$/, '').replace(/\.html$/, '') || '/';
  document.querySelectorAll('.top nav a').forEach(function (a) {
    if (a.getAttribute('href') === p) a.setAttribute('aria-current', 'page');
  });
  document.querySelectorAll('[data-year]').forEach(function (e) { e.textContent = new Date().getFullYear(); });
  var cd = document.getElementById('cd');
  if (cd) {
    var left = 3581;
    setInterval(function () {
      left = left > 0 ? left - 1 : 3600;
      var h = Math.floor(left / 3600), m = Math.floor(left % 3600 / 60), s = left % 60;
      cd.textContent = [h, m, s].map(function (n) { return String(n).padStart(2, '0'); }).join(':');
    }, 1000);
  }
  document.querySelectorAll('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var t = b.getAttribute('data-copy'), old = b.getAttribute('title');
      if (navigator.clipboard) navigator.clipboard.writeText(t).then(function () {
        b.setAttribute('title', 'Copied'); setTimeout(function () { b.setAttribute('title', old); }, 1200);
      });
    });
  });
})();
