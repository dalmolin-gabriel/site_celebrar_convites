(function () {
  // Mensagem pré-preenchida no WhatsApp
  var msg = encodeURIComponent('Olá! Vim pelo site e gostaria de fazer um convite digital 💌');
  document.querySelectorAll('.js-whats').forEach(function (a) {
    a.href = 'https://wa.me/5548984078852?text=' + msg;
  });

  // Menu mobile
  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu');
  btn.addEventListener('click', function () {
    var aberto = menu.classList.toggle('aberto');
    btn.setAttribute('aria-expanded', aberto);
    btn.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('aberto');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Ano no rodapé
  document.getElementById('ano').textContent = new Date().getFullYear();

  // Lightbox da galeria
  var lb = document.querySelector('.lightbox');
  var lbImg = lb.querySelector('img');
  function fechar() { lb.hidden = true; lbImg.src = ''; }
  document.querySelectorAll('.galeria img').forEach(function (img) {
    img.addEventListener('click', function () {
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lb.hidden = false;
    });
  });
  lb.addEventListener('click', function (e) { if (e.target !== lbImg) fechar(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lb.hidden) fechar(); });

  // Animação ao rolar
  var alvos = document.querySelectorAll('.secao h2, .card, .galeria figure, .passos li, .sobre__logo');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('visivel'); obs.unobserve(en.target); }
      });
    }, { threshold: 0.15 });
    alvos.forEach(function (el) { el.classList.add('revelar'); obs.observe(el); });
  }
})();
