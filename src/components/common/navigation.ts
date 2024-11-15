// Types
interface MenuElements {
  toggle: HTMLElement | null;
  menu: HTMLElement | null;
  icon: HTMLElement | null;
  isOpen: boolean;
}

// Mobile Menu Logic
const menuElements: MenuElements = {
  toggle: document.getElementById('menu-toggle'),
  menu: document.getElementById('mobile-menu'),
  icon: document.getElementById('menu-icon'),
  isOpen: false,
};

function toggleMenu() {
  menuElements.isOpen = !menuElements.isOpen;

  if (menuElements.icon) {
    menuElements.icon.setAttribute(
      'd',
      menuElements.isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
    );
  }

  if (menuElements.menu) {
    menuElements.menu.style.display = menuElements.isOpen ? 'block' : 'none';
  }
}

// Theme Logic
function initTheme() {
  const theme =
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light');

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Event Listeners
function initializeEventListeners() {
  // Mobile menu
  menuElements.toggle?.addEventListener('click', toggleMenu);

  const mobileMenuLinks = menuElements.menu?.querySelectorAll('a');
  mobileMenuLinks?.forEach((link) => {
    link.addEventListener('click', () => {
      menuElements.isOpen = false;
      if (menuElements.menu) menuElements.menu.style.display = 'none';
      if (menuElements.icon)
        menuElements.icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    });
  });

  // Theme toggles
  document
    .getElementById('theme-toggle')
    ?.addEventListener('click', toggleTheme);
  document
    .getElementById('theme-toggle-mobile')
    ?.addEventListener('click', toggleTheme);

  // System theme changes
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        document.documentElement.classList.toggle('dark', e.matches);
      }
    });
}

// Initialize
initTheme();
initializeEventListeners();
