function initNavigation() {
  const nav = document.getElementById('nav');
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.header__nav-link, .header__subnav-link');
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  if (!nav || !header) return;

  const closeMenu = () => {};

  const getHeaderOffset = () => header.getBoundingClientRect().height;

  const scrollToAnchor = (hash) => {
    const target = document.querySelector(hash);
    if (!target) return;
    const offsetTop = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
    window.scrollTo({ top: Math.max(0, offsetTop), behavior: 'smooth' });
  };

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  anchorLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      if (!href.startsWith('#')) return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      closeMenu();
      scrollToAnchor(href);
      history.replaceState(null, '', href);
    });
  });

  const sections = document.querySelectorAll('section[id]');

  function highlightNav() {
    const scrollY = window.scrollY + 150;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('header__nav-link--active');
          link.classList.remove('header__subnav-link--active');
          if (link.getAttribute('href') === `#${id}`) {
            if (link.classList.contains('header__subnav-link')) {
              link.classList.add('header__subnav-link--active');
            } else {
              link.classList.add('header__nav-link--active');
            }
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });
  highlightNav();
}

export default initNavigation;
