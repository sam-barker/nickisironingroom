// mobile nav
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});
