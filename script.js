document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('cv-theme');

  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    if (toggle) toggle.textContent = '☀️ Modo claro';
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      const isDark = body.classList.toggle('dark-mode');
      localStorage.setItem('cv-theme', isDark ? 'dark' : 'light');
      toggle.textContent = isDark ? '☀️ Modo claro' : '🌙 Modo oscuro';
    });
  }

  window.addEventListener('beforeprint', () => body.classList.add('is-printing'));
  window.addEventListener('afterprint', () => body.classList.remove('is-printing'));
  console.log('CV listo con modo oscuro y diseño estilo Europass.');
});
