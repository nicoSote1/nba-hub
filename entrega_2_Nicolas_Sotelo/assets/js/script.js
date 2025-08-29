// Tema claro/oscuro
const themeToggle = document.getElementById('themeToggle');

const getTheme = () => localStorage.getItem('theme') || 'light';
const setTheme = (t) => {
  document.documentElement.setAttribute('data-bs-theme', t);
  localStorage.setItem('theme', t);
  themeToggle?.setAttribute('aria-pressed', String(t === 'dark'));
  themeToggle && (themeToggle.textContent = t === 'dark' ? 'Modo claro' : 'Modo oscuro');
};
setTheme(getTheme());

themeToggle?.addEventListener('click', () => {
  const next = getTheme() === 'dark' ? 'light' : 'dark';
  setTheme(next);
});

// Validación de formulario
const form = document.getElementById('contactForm');
const alertNode = document.getElementById('formAlert');

form?.addEventListener('submit', (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
    form.classList.add('was-validated');
    alertNode.classList.remove('visually-hidden');
    alertNode.classList.add('text-danger');
    alertNode.textContent = 'Revisá los campos marcados.';
  } else {
    e.preventDefault(); 
    form.reset();
    form.classList.remove('was-validated');
    alertNode.classList.remove('visually-hidden', 'text-danger');
    alertNode.classList.add('text-success');
    alertNode.textContent = '¡Mensaje enviado! Gracias por escribirnos.';
  }
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', () => {
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (el) {
      setTimeout(() => el.setAttribute('tabindex','-1'), 0);
      setTimeout(() => el.focus({preventScroll:true}), 300);
    }
  });
});
