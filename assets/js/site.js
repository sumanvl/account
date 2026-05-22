(() => {
  const body = document.body;
  const root = document.documentElement;
  const toggle = document.querySelector('[data-menu-toggle]');
  const drawer = document.querySelector('[data-mobile-menu]');
  const topbar = document.querySelector('.topbar');
  const mainHeader = document.querySelector('.main-header');
  if (!toggle || !drawer) return;

  const setMobileDrawerOffset = () => {
    const topbarHeight = topbar ? topbar.offsetHeight : 0;
    const mainHeaderHeight = mainHeader ? mainHeader.offsetHeight : 0;
    root.style.setProperty('--mobile-drawer-top', `${topbarHeight + mainHeaderHeight}px`);
  };

  const closeMenu = () => {
    body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  };

  const openMenu = () => {
    setMobileDrawerOffset();
    body.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
  };

  setMobileDrawerOffset();

  toggle.addEventListener('click', () => {
    body.classList.contains('menu-open') ? closeMenu() : openMenu();
  });

  drawer.querySelectorAll('[data-submenu-button]').forEach(button => {
    button.addEventListener('click', () => {
      const group = button.closest('.mobile-group');
      if (group) group.classList.toggle('is-open');
    });
  });

  drawer.addEventListener('click', event => {
    if (event.target instanceof HTMLAnchorElement || event.target.closest('a')) closeMenu();
  });

  window.addEventListener('resize', () => {
    setMobileDrawerOffset();
    if (window.innerWidth > 1080) closeMenu();
  });

  window.addEventListener('orientationchange', setMobileDrawerOffset);

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });

  // FAQ accordion: keep only one item open inside each FAQ group.
  document.querySelectorAll('.faq-container, .faq-grid, .svc-faq-list').forEach(group => {
    const items = Array.from(group.querySelectorAll('details'));
    items.forEach(item => {
      item.addEventListener('toggle', () => {
        if (!item.open) return;
        items.forEach(other => {
          if (other !== item) other.removeAttribute('open');
        });
      });
    });
  });

})();
