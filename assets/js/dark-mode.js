(function () {
  var toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  function getTheme() {
    var t = document.documentElement.getAttribute('data-theme');
    if (t === 'dark' || t === 'light') return t;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
    updateIcon(theme);
  }

  function updateIcon(theme) {
    toggle.textContent = theme === 'dark' ? '🌙' : '☀️';
    toggle.setAttribute('aria-label', theme === 'dark' ? '切换到亮色模式' : '切换到深色模式');
  }

  updateIcon(getTheme());

  toggle.addEventListener('click', function () {
    var current = getTheme();
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      var stored = null;
      try { stored = localStorage.getItem('theme'); } catch (ex) {}
      if (!stored) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
})();
