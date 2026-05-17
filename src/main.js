import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// 1. LÓGICA DOS CARROSSEIS (SCROLL HORIZONTAL)
window.scrollLine = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  const scrollAmount = el.clientWidth; 
  
  if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 20) {
    el.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
};

// 2. LÓGICA DO BOTÃO VOLTAR AO TOPO (ATIVAÇÃO IMEDIATA)
document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.getElementById('backToTop');

  if (backToTopButton) {
    const checkScroll = () => {
      const scrollPos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

      // Se rolar mais de 10px para baixo, mostra a seta
      if (scrollPos > 10) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    };

    // Escuta o scroll tanto na janela quanto no documento
    window.addEventListener('scroll', checkScroll);
    document.addEventListener('scroll', checkScroll);

    // Evento de clique para subir suavemente
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});