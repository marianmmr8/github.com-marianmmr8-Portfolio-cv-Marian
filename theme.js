(() => {
  const storageKey = 'portfolio-theme';
  const isTheme = value => value === 'light' || value === 'dark';
  let theme = 'light';

  try {
    const savedTheme = localStorage.getItem(storageKey);
    theme = isTheme(savedTheme)
      ? savedTheme
      : matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch (error) {
    console.error('No se pudo leer la preferencia de tema guardada.', error);
  }

  function applyTheme(value) {
    theme = value;
    document.documentElement.dataset.theme = theme;

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.content = theme === 'dark' ? '#171821' : '#f8f6f1';
    }

    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      const nextTheme = theme === 'dark' ? 'light' : 'dark';
      button.textContent = theme === 'dark' ? 'Tema: oscuro' : 'Tema: claro';
      button.setAttribute('aria-label', `Cambiar a modo ${nextTheme === 'dark' ? 'oscuro' : 'claro'}`);
      button.setAttribute('aria-pressed', String(theme === 'dark'));
    });
  }

  applyTheme(theme);

  document.addEventListener('click', event => {
    const button = event.target.closest('[data-theme-toggle]');
    if (!button) return;

    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);

    try {
      localStorage.setItem(storageKey, nextTheme);
    } catch (error) {
      console.error('No se pudo guardar la preferencia de tema.', error);
    }
  });

  document.addEventListener('DOMContentLoaded', () => applyTheme(theme));
})();
