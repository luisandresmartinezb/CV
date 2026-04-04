document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  window.addEventListener('beforeprint', () => body.classList.add('is-printing'));
  window.addEventListener('afterprint', () => body.classList.remove('is-printing'));
  console.log('CV listo y optimizado para impresión A4');
});
