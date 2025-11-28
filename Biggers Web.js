




//* push fondo *//

const body = document.querySelector("body");
const Boton_fondo = document.getElementById("Boton_fondo");


Boton_fondo.onclick = function () {
  Boton_fondo.classList.toggle("active_fondo");
  body.classList.toggle("active_fondo");

};



//*boton activar menu_oculto*//

let togglebtn = document.querySelector(".togglebtn_swuish");
let container = document.querySelector(".container-menu_oculto");

togglebtn.onclick = function () {
  container.classList.toggle("active_text");
};


const menuBtn = document.querySelector(".cont_Boton_menu");
const nav = document.querySelector(".navigation");

// Toggle del menú
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("open");
});

// Cierra el menú al hacer clic en un enlace
document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    nav.classList.remove("open");
  });
});



/** Boton contacto activar conte formulario */
let BotonContacto = document.querySelector(".boton_contacto");
let ContenedorFormulario = document.querySelector(".conten_form")
let cerrarform = document.querySelector(".Cerrar_formulario");

BotonContacto.onclick = function () {
  ContenedorFormulario.classList.toggle("visibleform")

  cerrarform.onclick = function () {
    ContenedorFormulario.classList.remove("visibleform")
  }
}





//* barra de navegacion lateral*//

const list = document.querySelectorAll(".list");
function activar_links() {
  list.forEach((item) =>
    item.classList.remove("active"))

  this.classList.add("active")
}
list.forEach((item) =>
  item.addEventListener("click", activar_links))



/**++++++++++++++++++slider CARDS++++++++++++++++++++ */



document.getElementById('next').onclick = function () {
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide_cards').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function () {
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide_cards').prepend(lists[lists.length - 1]);
}






/** INCREMENTADORES PROYECTOS */
let numero_pro = 0;
const valorMaximo_pro = 123;
const Number_incrementadores_proyectos = document.getElementById('Number_incrementadores_proyectos');

function incrementarYMostrar_proy() {
  numero_pro++;
  if (numero_pro <= valorMaximo_pro) {
    Number_incrementadores_proyectos.textContent = numero_pro;
  }
  if (numero_pro > valorMaximo_pro) {
    numero_pro = 0;
    setTimeout(incrementarYMostrar_proy, 2500); // Pausa de 2 segundos antes de reiniciar
  } else {
    setTimeout(incrementarYMostrar_proy, 15); // Incrementa cada segundo (1000 ms)
  }
}

incrementarYMostrar_proy();


/** INCREMENTADORES RESEÑAS */
let numero_reseñas = 0;
const valorMaximo_reseñas = 62;
const Number_incrementadores_reseñas = document.getElementById('Number_incrementadores_reseñas');

function incrementarYMostrar_reseñas() {
  numero_reseñas++;
  if (numero_reseñas <= valorMaximo_reseñas) {
    Number_incrementadores_reseñas.textContent = numero_reseñas;
  }
  if (numero_reseñas > valorMaximo_reseñas) {
    numero_reseñas = 0;
    setTimeout(incrementarYMostrar_reseñas, 2000); // Pausa de 2 segundos antes de reiniciar
  } else {
    setTimeout(incrementarYMostrar_reseñas, 15); // Incrementa cada segundo (1000 ms)
  }
}

incrementarYMostrar_reseñas();
/** INCREMENTADORES SEGUIDORES */
let numero_seguidores = 700;
const valorMaximo_seguidores = 845;
const Number_incrementadores_seguidores = document.getElementById('Number_incrementadores_seguidores');

function incrementarYMostrar_seguidores() {
  numero_seguidores++;
  if (numero_seguidores <= valorMaximo_seguidores) {
    Number_incrementadores_seguidores.textContent = numero_seguidores;
  }
  if (numero_seguidores > valorMaximo_seguidores) {
    numero_seguidores = 700;
    setTimeout(incrementarYMostrar_seguidores, 3000); // Pausa de 2 segundos antes de reiniciar
  } else {
    setTimeout(incrementarYMostrar_seguidores, 2); // Incrementa cada segundo (1000 ms)
  }
}

incrementarYMostrar_seguidores();


/**  CONTEOL DE ANIMACION ACTIVE EN MOBIL */

const finalLayers = document.querySelector('.final__layers');

finalLayers.addEventListener('click', () => {
  finalLayers.classList.toggle('active');
});

/**  ANIMACIONES QUE SE ACTIVAN CON SCROOL */


/** SLIDER DE VIDEOS GALERÍA **/
(function() {
  const videos = document.querySelectorAll('.slider_video');
  const dots = document.querySelectorAll('.slider_dot');
  const prevBtn = document.querySelector('.slider_btn.prev');
  const nextBtn = document.querySelector('.slider_btn.next');
  let current = 0;

  function showVideo(idx) {
    videos.forEach((v, i) => {
      v.classList.toggle('active', i === idx);
      if (i !== idx) {
        v.pause();
        v.currentTime = 0;
      }
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    current = idx;
    // Reproducir el video activo
    if (videos[idx]) {
      videos[idx].play();
    }
  }

  prevBtn && prevBtn.addEventListener('click', () => {
    let idx = (current - 1 + videos.length) % videos.length;
    showVideo(idx);
  });
  nextBtn && nextBtn.addEventListener('click', () => {
    let idx = (current + 1) % videos.length;
    showVideo(idx);
  });
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => showVideo(idx));
  });

  // Swipe en móvil
  let startX = null;
  const wrapper = document.querySelector('.slider_videos_wrapper');
  if(wrapper) {
    wrapper.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    });
    wrapper.addEventListener('touchend', e => {
      if(startX === null) return;
      let dx = e.changedTouches[0].clientX - startX;
      if(Math.abs(dx) > 40) {
        if(dx > 0) prevBtn.click();
        else nextBtn.click();
      }
      startX = null;
    });
  }

  // Inicializar
  showVideo(0);
})();

// === SLIDER DE IMÁGENES GALERÍA CON GLASSMORPHISM ===
(function() {
  const imagenes = document.querySelectorAll('.slider_imagen');
  const btnPrev = document.querySelector('.slider_img_btn.prev');
  const btnNext = document.querySelector('.slider_img_btn.next');
  const dots = document.querySelectorAll('.slider_img_dot');
  let current = 0;
  let autoplayInterval = null;
  const AUTOPLAY_DELAY = 4000;

  function showImagen(idx) {
    imagenes.forEach((img, i) => {
      img.classList.toggle('active', i === idx);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === idx);
    });
    current = idx;
  }

  function nextImagen() {
    let idx = (current + 1) % imagenes.length;
    showImagen(idx);
  }

  function prevImagen() {
    let idx = (current - 1 + imagenes.length) % imagenes.length;
    showImagen(idx);
  }

  function startAutoplay() {
    if (autoplayInterval) clearInterval(autoplayInterval);
    autoplayInterval = setInterval(nextImagen, AUTOPLAY_DELAY);
  }

  btnPrev.addEventListener('click', function() {
    prevImagen();
    startAutoplay();
  });
  btnNext.addEventListener('click', function() {
    nextImagen();
    startAutoplay();
  });
  dots.forEach((dot, i) => {
    dot.addEventListener('click', function() {
      showImagen(i);
      startAutoplay();
    });
  });

  // Iniciar autoplay al cargar
  showImagen(0);
  startAutoplay();
})();

// === SLIDER VERTICAL AUTOMÁTICO UI/UX EN ACERCA ===
(function() {
  const slides = document.querySelectorAll('.acerca_uiux_slide');
  let current = 0;
  const DELAY = 3500;
  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
    current = idx;
  }
  function nextSlide() {
    let idx = (current + 1) % slides.length;
    showSlide(idx);
  }
  setInterval(nextSlide, DELAY);
  showSlide(0);
})();

// Cerrar menú lateral móvil al hacer clic en el overlay
const menuOverlay = document.querySelector('.menu_overlay');
if(menuOverlay && navigation) {
  menuOverlay.addEventListener('click', () => {
    navigation.classList.remove('open');
    if(icon) icon.classList.remove('open');
  });
}

