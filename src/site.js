const S = {
  name: "Huellas", hero: "split", darkHero: false, heroEmoji: "🐶", heroImg: "/img/hero.jpg", heroAlt: "Perro en la sala de consulta junto a dos integrantes del equipo",
  title: "Cuidamos a tu familia de cuatro patas.",
  sub: "Veterinarios cercanos, consultas sin apuro y urgencias todos los días. Agenda tu hora en un minuto.",
  cta1: "Agendar hora", cta1msg: "Hola Huellas, quiero agendar una hora para mi mascota", cta2: "Ver servicios",
  svcTitle: "Todo para su salud y bienestar", svcSub: "Perros, gatos y mascotas pequeñas en un solo lugar.",
  services: [
    { e: "🩺", t: "Consulta general", d: "Chequeo completo, peso, dieta y plan de cuidados a tu medida." },
    { e: "💉", t: "Vacunas y control", d: "Calendario de vacunas, desparasitación y carné al día." },
    { e: "🛁", t: "Peluquería canina", d: "Baño, corte y limpieza de oídos, con trato paciente y cariñoso." },
    { e: "🚑", t: "Urgencias", d: "Atención rápida todos los días, incluso fines de semana y festivos." },
  ],
  galTitle: "Nuestros pacientes felices", galSub: "Un vistazo a la clínica y a quienes nos visitan.",
  gallery: [
    { e: "🐶", src: "/img/perro-control.jpg", t: "Control tranquilo de un golden retriever" },
    { e: "🐱", src: "/img/gato.jpg", pos: "78% center", t: "Gatito esperando su turno, cómodo en su transportador" },
    { e: "🐰", src: "/img/conejo.jpg", pos: "center 40%", t: "También atendemos conejos y mascotas pequeñas" },
    { e: "🩺", src: "/img/consulta.jpg", t: "Revisión en la sala de consulta" },
    { e: "🐾", src: "/img/paseo.jpg", pos: "45% center", t: "Un paseo con arnés después de la consulta" },
    { e: "🛁", src: "/img/bano.jpg", pos: "40% center", t: "Baño con agua tibia en la peluquería" },
  ],
  reviews: [
    { n: "Javiera P., dueña de Luna", t: "Atendieron a mi perrita de urgencia un domingo y nos explicaron todo con mucha paciencia. Se nota que aman lo que hacen." },
    { n: "Rodrigo T., dueño de Simón", t: "Mi gato odia ir al veterinario y aquí salió tranquilo. El trato es excelente y el ambiente muy limpio." },
    { n: "Daniela C., dueña de Bruno", t: "Sacamos el carné de vacunas completo y nos recordaron cada fecha por WhatsApp. Súper ordenados." },
  ],
  faq: [
    { q: "¿Atienden urgencias?", a: "Sí, todos los días. Escríbenos o llama antes de salir para dejar el equipo preparado." },
    { q: "¿Cada cuánto debe vacunarse mi mascota?", a: "Depende de la edad y especie. En la primera consulta armamos su calendario personalizado." },
    { q: "¿Cómo agendo una hora?", a: "Por WhatsApp en un minuto. Te confirmamos día y hora, y te enviamos un recordatorio." },
    { q: "¿Atienden gatos y mascotas exóticas?", a: "Atendemos perros, gatos, conejos y mascotas pequeñas. Para exóticos, consúltanos primero." },
    { q: "¿Tienen servicio de peluquería sin consulta?", a: "Sí, puedes reservar baño y corte sin necesidad de consulta médica." },
  ],
  contactTitle: "Agenda la visita", formTitle: "Cuéntanos de tu mascota", formBtn: "Enviar por WhatsApp",
  dir: "Av. Irarrázaval 2450, Ñuñoa, Santiago", hor: "Lunes a sábado, 9:00 a 20:00. Urgencias todos los días", tel: "9 1234 5678", wa: "56912345678", mapq: "Av. Irarrázaval 2450, Santiago, Chile",
};
export const wa = (t) => `https://wa.me/${S.wa}?text=${encodeURIComponent(t)}`;
export default S;
