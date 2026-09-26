(function () {
  'use strict';
  var root = document.documentElement;
  var themeButton = document.querySelector('.theme-toggle');
  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  var manualTheme = false;
  try { manualTheme = /^(light|dark)$/.test(localStorage.getItem('theme')); } catch (error) {}

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (themeButton) {
      themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
      themeButton.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme');
    }
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#1d1e1c' : '#faf9f6';
  }
  applyTheme(root.getAttribute('data-theme') || (systemTheme.matches ? 'dark' : 'light'));
  if (themeButton) {
    themeButton.hidden = false;
    themeButton.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      manualTheme = true;
      applyTheme(next);
      try { localStorage.setItem('theme', next); } catch (error) {}
    });
  }
  systemTheme.addEventListener('change', function (event) {
    if (!manualTheme) applyTheme(event.matches ? 'dark' : 'light');
  });
  window.addEventListener('storage', function (event) {
    if (event.key !== 'theme') return;
    manualTheme = /^(light|dark)$/.test(event.newValue);
    applyTheme(manualTheme ? event.newValue : (systemTheme.matches ? 'dark' : 'light'));
  });

  var menu = document.querySelector('.more-menu');
  if (menu) {
    document.addEventListener('click', function (event) {
      if (!menu.contains(event.target)) menu.open = false;
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menu.open) {
        menu.open = false;
        menu.querySelector('summary').focus();
      }
    });
    menu.addEventListener('focusout', function (event) {
      if (event.relatedTarget && !menu.contains(event.relatedTarget)) menu.open = false;
    });
  }

  var filters = document.querySelector('.writing-filters');
  if (filters) {
    filters.hidden = false;
    var rows = Array.from(document.querySelectorAll('.writing-row'));
    var buttons = Array.from(filters.querySelectorAll('button'));
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var category = button.dataset.filter;
        buttons.forEach(function (item) {
          var active = item === button;
          item.classList.toggle('active', active);
          item.setAttribute('aria-pressed', String(active));
        });
        var visible = 0;
        rows.forEach(function (row) {
          row.hidden = category !== 'all' && row.dataset.category !== category;
          if (!row.hidden) visible++;
        });
        document.getElementById('writing-count').textContent = visible + (visible === 1 ? ' article' : ' articles');
      });
    });
  }

  // Imported articles have a static TOC. New Markdown articles get one here.
  var prose = document.querySelector('.article-prose');
  var toc = document.querySelector('.article-toc');
  if (prose && toc) {
    var headings = Array.from(prose.querySelectorAll('h2, h3'));
    var list = toc.querySelector('ol');
    if (!list.children.length && headings.length > 1) {
      headings.forEach(function (heading, index) {
        if (!heading.id) heading.id = 'section-' + (index + 1);
        var item = document.createElement('li');
        var link = document.createElement('a');
        item.className = 'toc-level-' + heading.tagName.slice(1);
        link.href = '#' + heading.id;
        link.textContent = heading.textContent;
        item.appendChild(link);
        list.appendChild(item);
      });
      toc.hidden = false;
    }
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          toc.querySelectorAll('a').forEach(function (link) {
            if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
          });
        });
      }, { rootMargin: '-100px 0px -60% 0px' });
      headings.forEach(function (heading) { observer.observe(heading); });
    }
  }
})();
