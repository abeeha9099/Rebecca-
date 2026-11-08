(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (selector, root) { return (root || document).querySelector(selector); };
  var $$ = function (selector, root) { return Array.prototype.slice.call((root || document).querySelectorAll(selector)); };

  /* Footer year */
  var year = $('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());

  /* Header shadow once the page has scrolled */
  var header = $('[data-header]');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-stuck', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Mobile menu */
  var toggle = $('[data-menu-toggle]');
  var menu = $('[data-menu]');
  if (toggle && menu) {
    var setMenu = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menu.hidden = !open;
    };
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    $$('a', menu).forEach(function (link) {
      link.addEventListener('click', function () { setMenu(false); });
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  /* Mobile call sheet */
  var callToggle = $('[data-call-toggle]');
  var callSheet = $('[data-call-sheet]');
  if (callToggle && callSheet) {
    var setSheet = function (open) {
      callToggle.setAttribute('aria-expanded', String(open));
      callSheet.hidden = !open;
    };
    callToggle.addEventListener('click', function () {
      setSheet(callToggle.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !callSheet.hidden) {
        setSheet(false);
        callToggle.focus();
      }
    });
  }

  /* Accordion fallback for browsers without <details name> exclusivity */
  var paths = $$('details.path');
  paths.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      paths.forEach(function (other) { if (other !== item) other.open = false; });
    });
  });

  /* Video facade: Vimeo loads only when requested */
  $$('[data-video]').forEach(function (box) {
    var play = $('.video__play', box);
    if (!play) return;
    play.addEventListener('click', function () {
      var frame = document.createElement('iframe');
      frame.src = box.getAttribute('data-video');
      frame.title = 'How the collaborative divorce process works';
      frame.allow = 'autoplay; fullscreen; picture-in-picture';
      frame.allowFullscreen = true;
      box.appendChild(frame);
      play.remove();
      frame.focus();
    });
  });

  /* Testimonials: user-driven only, never auto-rotating */
  $$('[data-carousel]').forEach(function (root) {
    var quotes = $$('.quote', root);
    var current = $('[data-current]', root);
    var total = $('[data-total]', root);
    var index = 0;
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    if (total) total.textContent = pad(quotes.length);

    var show = function (next) {
      quotes[index].hidden = true;
      quotes[index].classList.remove('is-active');
      index = (next + quotes.length) % quotes.length;
      quotes[index].hidden = false;
      quotes[index].classList.add('is-active');
      if (current) current.textContent = pad(index + 1);
    };
    $('[data-prev]', root).addEventListener('click', function () { show(index - 1); });
    $('[data-next]', root).addEventListener('click', function () { show(index + 1); });
  });

  /* Ticker: duplicate items for a seamless loop, with a pause control */
  var ticker = $('[data-ticker]');
  if (ticker) {
    var track = $('[data-ticker-track]', ticker);
    var tickerToggle = $('[data-ticker-toggle]', ticker);
    if (!reduceMotion && track) {
      var items = Array.prototype.slice.call(track.children);
      // Two full sets per half, so the track is always wider than the viewport.
      for (var round = 0; round < 3; round++) {
        items.forEach(function (item) {
          var copy = item.cloneNode(true);
          copy.setAttribute('aria-hidden', 'true');
          track.appendChild(copy);
        });
      }
    }
    if (tickerToggle) {
      tickerToggle.addEventListener('click', function () {
        var paused = ticker.classList.toggle('is-paused');
        tickerToggle.setAttribute('aria-pressed', String(paused));
        tickerToggle.setAttribute('aria-label', paused ? 'Play scrolling text' : 'Pause scrolling text');
      });
    }
  }

  if (reduceMotion || !('IntersectionObserver' in window)) return;

  /* Reveal on scroll. Restrained: transform and opacity only, one pass. */
  document.documentElement.classList.add('js-motion');
  var groups = [
    '.hero__copy > *', '.hero__portrait', '.hero__fact', '.office-card',
    '.medal', '.statement__stats > div',
    '.help .section-head', '.service', '.help__rows',
    '.paths__intro', '.path', '.video',
    '.about .section-head', '.about__photo', '.fact-card',
    '.post', '.workshop', '.contact .display', '.contact > p', '.contact__cta'
  ];
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      revealObserver.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  groups.forEach(function (selector) {
    $$(selector).forEach(function (el, i) {
      el.setAttribute('data-reveal', '');
      el.style.setProperty('--i', String(Math.min(i, 5)));
      revealObserver.observe(el);
    });
  });

  /* Statement: words brighten as the passage scrolls through the viewport */
  var statement = $('[data-words]');
  if (statement) {
    var raw = statement.textContent.trim();
    statement.setAttribute('aria-label', raw);
    statement.textContent = '';
    var words = raw.split(/\s+/).map(function (word, i, all) {
      var span = document.createElement('span');
      span.className = 'word is-dim';
      span.setAttribute('aria-hidden', 'true');
      span.textContent = word;
      statement.appendChild(span);
      if (i < all.length - 1) statement.appendChild(document.createTextNode(' '));
      return span;
    });

    var ticking = false;
    var update = function () {
      ticking = false;
      var rect = statement.getBoundingClientRect();
      var vh = window.innerHeight;
      var progress = (vh * 0.9 - rect.top) / (rect.height + vh * 0.45);
      var lit = Math.round(Math.max(0, Math.min(1, progress)) * words.length);
      words.forEach(function (word, i) { word.classList.toggle('is-dim', i >= lit); });
    };
    var request = function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    update();
  }
})();
