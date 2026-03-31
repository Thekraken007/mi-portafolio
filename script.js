
  /* ── Cursor personalizado ── */
  const cursor = document.getElementById('cursor');

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });

  document.querySelectorAll('a, button, .servicio-card, .proyecto-card, .proceso-step, .contact-link').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('big'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
  });

// Reloj Ecuador en footer 

  function updateClock() {
    const now = new Date();
    
    const options = {
      timeZone: "America/Guayaquil",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false  
    };

    const ecuadorTime = now.toLocaleTimeString("es-ES", options);
    
    document.getElementById('clock').textContent = ecuadorTime + " Ecuador";
  }

  // Iniciar reloj
  updateClock();
  setInterval(updateClock, 1000);


  /* ── Reveal on scroll ── */
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  /* Activar hero de inmediato */
  setTimeout(() => {
    document.querySelectorAll('#inicio .reveal').forEach(el => el.classList.add('visible'));
  }, 100);

  /* ── Formulario de contacto ── */
  function enviarWhatsApp() {
  const nombre = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const tipo = document.querySelector('select').value;
  const mensaje = document.querySelector('textarea').value;

  const texto = `Hola, soy ${nombre}%0AEmail: ${email}%0ATipo: ${tipo}%0AMensaje: ${mensaje}`;

  window.open(`https://wa.me/593986912321?text=${texto}`, '_blank');
}

// imagenes de sistemaventas

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

document.querySelector(".preview-content").addEventListener("click", () => {
  modal.style.display = "flex";
  modalImg.src = imgs[index].src;
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

const imgs = document.querySelectorAll(".preview-img");
let index = 0;

const showImage = (i) => {
  imgs.forEach(img => img.classList.remove("active"));
  imgs[i].classList.add("active");
};

document.querySelector(".arrow.right").onclick = () => {
  index = (index + 1) % imgs.length;
  showImage(index);
};

document.querySelector(".arrow.left").onclick = () => {
  index = (index - 1 + imgs.length) % imgs.length;
  showImage(index);
};
