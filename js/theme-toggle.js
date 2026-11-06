/**
 * Casa Bele Theme Toggle (Light / Dark)
 * Persists user preference in localStorage & synchronizes across all pages
 */
(function() {
  const THEME_KEY = 'portfolio-theme';

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      updateToggleUI('light');
    } else {
      document.documentElement.removeAttribute('data-theme');
      updateToggleUI('dark');
    }
  }

  function updateToggleUI(theme) {
    const textEl = document.getElementById('themeToggleText');
    const darkIcon = document.getElementById('themeIconDark');
    const lightIcon = document.getElementById('themeIconLight');
    if (!textEl) return;

    if (theme === 'light') {
      textEl.textContent = 'Light';
      if (darkIcon) darkIcon.style.display = 'none';
      if (lightIcon) lightIcon.style.display = 'inline-block';
    } else {
      textEl.textContent = 'Dark';
      if (darkIcon) darkIcon.style.display = 'inline-block';
      if (lightIcon) lightIcon.style.display = 'none';
    }
  }

  // Ensure toggle button exists on any page that includes this script
  function ensureToggleButton() {
    let toggleBtn = document.getElementById('themeToggleBtn');
    if (!toggleBtn) {
      toggleBtn = document.createElement('button');
      toggleBtn.className = 'theme-toggle-btn';
      toggleBtn.id = 'themeToggleBtn';
      toggleBtn.setAttribute('aria-label', 'Toggle light/dark theme');
      toggleBtn.setAttribute('title', 'Toggle Light/Dark Theme');
      toggleBtn.innerHTML = `
        <span class="theme-toggle-indicator">
          <i class="ph ph-moon" id="themeIconDark"></i>
          <i class="ph ph-sun" id="themeIconLight" style="display:none;"></i>
        </span>
        <span class="theme-toggle-text" id="themeToggleText">Dark</span>
      `;
      document.body.appendChild(toggleBtn);
    }

    toggleBtn.onclick = function() {
      const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      const next = current === 'light' ? 'dark' : 'light';
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    };
  }

  // Immediate execution before render to prevent theme flicker
  const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  document.addEventListener('DOMContentLoaded', () => {
    ensureToggleButton();
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    updateToggleUI(currentTheme);
  });
})();
