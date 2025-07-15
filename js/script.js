const frases = [
  "Sé tú el cambio que quieres ver en el mundo. – Mahatma Gandhi",
  "No eres lo que logras, eres lo que superas. – Robin Sharma",
  "Haz lo que puedas, con lo que tengas, estés donde estés. – Theodore Roosevelt",
  "Tú puedes hacerlo. Estás más preparado de lo que crees. – Brian Tracy",
  "Cree en ti. Lo que piensas, creas. – Wayne Dyer",
  "No esperes. El momento nunca será perfecto. – Napoleon Hill",
  "El éxito es la suma de pequeños esfuerzos repetidos cada día. – James Clear",
  "No vivas el mismo año 75 veces y llámalo vida. – Robin Sharma",
  "Hazlo con miedo, pero hazlo. – Anónimo",
  "La acción vence al miedo. – David Schwartz",
  "El hábito es más fuerte que la fuerza de voluntad. – James Clear",
  "En tu interior ya está todo lo que necesitas. – Wayne Dyer",
  "El conocimiento no es poder, el poder está en aplicarlo. – Tony Robbins",
  "Céntrate en lo que puedes controlar y olvida lo demás. – Epicteto",
  "El éxito deja pistas. Síguelas. – Tony Robbins",
  "Tus pensamientos crean tu realidad. – Wayne Dyer",
  "Nada cambia si tú no cambias. – Robin Sharma",
  "Levántate con propósito. – Anónimo",
  "No pares cuando estés cansado. Para cuando hayas terminado. – Brian Tracy",
  "El dolor es temporal, el orgullo es para siempre. – Lance Armstrong",
  "No eres producto de tus circunstancias, sino de tus decisiones. – Stephen Covey",
  "Tu mente es tu campo de batalla. – Marcus Aurelius",
  "Actúa como si ya fueras quien deseas ser. – Neville Goddard",
  "Disfruta el proceso más que el resultado. – James Clear",
  "Sé constante. Es lo que separa a los mediocres de los grandes. – Robin Sharma",
  "Visualiza tu éxito. Luego, trabaja por él. – Wayne Dyer",
  "Hoy es un buen día para empezar de nuevo. – Anónimo",
  "Piensa en grande. Empieza en pequeño. Actúa ahora. – Brian Tracy",
  "Hazlo por ti, por quien fuiste y por quien quieres ser. – Anónimo",
  "Si no te desafía, no te cambia. – Fred DeVito",
  "Levántate con determinación, acuéstate con satisfacción. – Anónimo",
  "No se trata de motivación, se trata de hábito. – James Clear",
  "Hazlo simple, pero hazlo siempre. – Robin Sharma",
  "Tú puedes más de lo que crees. – Tony Robbins",
  "Cada día es una nueva oportunidad para crecer. – Brian Tracy",
  "No te rindas. A veces, el último intento es el que funciona. – Anónimo",
  "Cambia tu historia, cambia tu vida. – Tony Robbins",
  "Piensa, cree, sueña y atrévete. – Walt Disney",
  "La mejor inversión es en ti mismo. – Warren Buffett",
  "El que tiene un porqué, puede con cualquier cómo. – Nietzsche",
  "El momento perfecto es ahora. – Anónimo",
  "Tu actitud lo es todo. – John Maxwell",
  "Transforma el dolor en poder. – Robin Sharma",
  "Sigue caminando. Incluso lento, ya estás avanzando. – Anónimo",
  "Nunca es tarde para ser quien podrías haber sido. – George Eliot",
  "Tus metas valen tu esfuerzo. – Brian Tracy",
  "La clave está en empezar. – Zig Ziglar",
  "Sé imparable. – Tony Robbins",
  "Eres más fuerte de lo que imaginas. – Wayne Dyer",
  "Prepárate, porque vas a cambiar tu mundo.",
  "Sé fuerte, sé valiente, el mundo es tuyo.",
  "La acción es la clave del éxito. – Tony Robbins",
  "Haz hoy lo que otros no quieren, y mañana vivirás como otros no pueden.",
  "No sueñes tu vida, vive tu sueño. – Robin Sharma",
  "Tú puedes con todo, incluso con lo que nunca imaginaste.",
  "La acción es el puente entre los sueños y la realidad. – Tony Robbins",
  "Cambia tus pensamientos y cambiarás tu mundo. – Norman Vincent Peale",
  "Haz lo que temes y el miedo desaparecerá. – Brian Tracy",
  "Actúa con pasión, no con miedo. – Robin Sharma",
  "Tú no estás roto, solo estás en construcción.",
  "Si sabes por qué luchas, el cómo aparecerá. – Viktor Frankl",
  "Visualiza lo que quieres y conviértelo en tu realidad.",
  "Tu destino está escrito por lo que decides hoy."
];

const imagenes = [
  'assets/imagenes/fallout1.jpeg',
  'assets/imagenes/fallout2.jpg',
  'assets/imagenes/fallout3.jpg',
  'assets/imagenes/fallout4.png',
  'assets/imagenes/fallout5.png',
  'assets/imagenes/fallout6.png',
  'assets/imagenes/fallout7.png',
  'assets/imagenes/fallout8.png',
  'assets/imagenes/fallout9.png',
  'assets/imagenes/fallout10.png',
  'assets/imagenes/fallout11.png',
  'assets/imagenes/fallout12.png',
  'assets/imagenes/fallout13.png',
  'assets/imagenes/fallout14.png',
  'assets/imagenes/fallout15.png',
  'assets/imagenes/fallout16.png',
  'assets/imagenes/fallout17.png',
  'assets/imagenes/fallout18.png',
  'assets/imagenes/fallout19.png',
  'assets/imagenes/fallout20.png',
  'assets/imagenes/fallout21.png',
  'assets/imagenes/fallout22.png',
  'assets/imagenes/fallout23.png',
  'assets/imagenes/fallout24.png',
  'assets/imagenes/fallout25.png',
];

let indexActual = -1;

function mostrarFrase() {
  const fraseEl = document.getElementById("frase");
  let nuevaIndex;

  do {
    nuevaIndex = Math.floor(Math.random() * frases.length);
  } while (nuevaIndex === indexActual); // Evitar repetir la misma frase

  indexActual = nuevaIndex;

  fraseEl.classList.remove("fade-in");
  void fraseEl.offsetWidth; // Reinicia animación
  fraseEl.textContent = frases[nuevaIndex];
  fraseEl.classList.add("fade-in");
  const imgEl = document.getElementById('imagenFallout');
  const randomImg = imagenes[Math.floor(Math.random()*imagenes.length)];
  imgEl.src = randomImg;
}

function mostrarFraseAleatoria() {
  // Elegir una frase aleatoria
  const indiceFrase = Math.floor(Math.random() * frases.length);
  const frase = frases[indiceFrase];

  // Mostrar frase con animación
  const fraseElemento = document.getElementById("fraseMotivadora");
  fraseElemento.classList.remove("fade-in");
  void fraseElemento.offsetWidth; // Reinicia animación
  fraseElemento.textContent = frase;
  fraseElemento.classList.add("fade-in");

  // Elegir imagen aleatoria entre 1 y 20
  const indiceImagen = Math.floor(Math.random() * 20) + 1;
  const imagenElemento = document.getElementById("imagenFallout");
  imagenElemento.src = `assets/imagenes/fallout${indiceImagen}.png`;
}


function actualizarReloj() {
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString('es-ES');
  const fecha = ahora.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  document.getElementById("hora").textContent = hora;
  document.getElementById("fecha").textContent = fecha;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();


document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audioRetro");

  document.body.addEventListener("click", () => {
    if (audio.paused) {
      audio.volume = 0.3;
      audio.play().catch(err => console.log("Error al reproducir audio:", err));
    }

    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }, { once: true });

  mostrarFrase(); 
  setInterval(mostrarFrase, 20000);
});


function obtenerIconoClima(codigo) {
  if ([0, 1].includes(codigo)) return "☀️";       
  if ([2, 3].includes(codigo)) return "⛅";       
  if ([45, 48].includes(codigo)) return "🌫️";    
  if ([51, 53, 55].includes(codigo)) return "🌦️"; 
  if ([61, 63, 65].includes(codigo)) return "🌧️"; 
  if ([66, 67].includes(codigo)) return "🌨️";     
  if ([71, 73, 75].includes(codigo)) return "❄️"; 
  if ([95, 96, 99].includes(codigo)) return "⛈️";
  return "🌡️";
}

function obtenerEstadoClima(codigo) {
  if ([0, 1].includes(codigo)) return "Despejado";
  if ([2, 3].includes(codigo)) return "Parcialmente nublado";
  if ([45, 48].includes(codigo)) return "Niebla";
  if ([51, 53, 55].includes(codigo)) return "Llovizna";
  if ([61, 63, 65].includes(codigo)) return "Lluvia";
  if ([66, 67].includes(codigo)) return "Lluvia y nieve";
  if ([71, 73, 75].includes(codigo)) return "Nieve";
  if ([95, 96, 99].includes(codigo)) return "Tormenta";
  return "Desconocido";
}


async function obtenerClima(ciudad = "Bornos") {
  try {
    const url = `https://api.weatherapi.com/v1/current.json?key=bef00b046e124fbc88e91641251207&lang=es&q=${ciudad}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    const temperatura = datos.current.temp_c;
    const descripcion = datos.current.condition.text;
    const icono = "https:" + datos.current.condition.icon;

    const iconoEl = document.getElementById("iconoClima");
    const descEl = document.getElementById("descripcionClima");

    if (!iconoEl || !descEl) {
      console.error("Elementos de clima no encontrados en el DOM.");
      return;
    }

    iconoEl.src = icono;
    descEl.textContent = `${temperatura}°C - ${descripcion}`;
  } catch (error) {
    console.error("Error al obtener el clima:", error);
    const descEl = document.getElementById("descripcionClima");
    if (descEl) descEl.textContent = "No se pudo obtener el clima.";
  }
}




// Llamamos a la función al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  obtenerClima();
});

