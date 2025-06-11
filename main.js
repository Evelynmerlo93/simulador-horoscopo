// Simulador de horóscopo personalizado

const signos = ["aries", "tauro", "géminis", "cáncer", "leo", "virgo", "libra", "escorpio", "sagitario", "capricornio", "acuario", "piscis"];

function obtenerSigno() {
  let signo = prompt("¿Cuál es tu signo del zodiaco?").toLowerCase().trim();

  while (!signos.includes(signo)) {
    signo = prompt("Signo no reconocido. Por favor ingresá uno válido:").toLowerCase().trim();
  }

  return signo;
}

function generarPrediccion(signo) {
  const predicciones = [
    "Hoy es un buen día para tomar decisiones importantes.",
    "Tu energía atraerá nuevas oportunidades.",
    "Cuidá tu salud emocional y rodeate de personas que te hagan bien.",
    "Es un gran momento para reflexionar antes de actuar.",
    "Hoy es ideal para iniciar nuevos proyectos.",
    "Dejá fluir tus emociones sin miedo.",
    " Utiliza más tu encanto personal para resolver conflictos o negociar acuerdos en lugar de recurrir a actitudes críticas o hirientes",
    
    
  ];

  const indice = Math.floor(Math.random() * predicciones.length);
  return `Predicción para ${signo.charAt(0).toUpperCase() + signo.slice(1)}:\n${predicciones[indice]}`;
}

function mostrarHoroscopo() {
  const signoUsuario = obtenerSigno();
  const mensaje = generarPrediccion(signoUsuario);
  alert(mensaje);
  console.log(mensaje);
}

// Ejecutamos la función principal
mostrarHoroscopo();
