const motivationalMessages = [
  "¡Sos increíble!",
  "Nunca te rindas, vos podés lograrlo.",
  "Cada día es una nueva oportunidad.",
  "Confío en vos, no pares.",
  "Hacé lo imposible, ¡sé grandiosa!",
  "Te amo mucho mi amor",
  "Sos el amor de mi vida",
  "maely y agus juntos hasta q ella me saque cagando",
  "quiero verte triunfar",
];

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.add('hidden');
  });
  document.getElementById(pageId).classList.remove('hidden');
}

document.getElementById('page1').addEventListener('click', (event) => {
  const message = document.createElement('div');
  message.className = 'message';
  message.textContent = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
  message.style.left = `${event.pageX}px`;
  message.style.top = `${event.pageY}px`;
  document.body.appendChild(message);
  setTimeout(() => message.remove(), 3000);
});

function randomPosition() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  return {x, y};
}

function moveButton() {
  const button = document.getElementById('no-button');
  const position = randomPosition();
  button.style.position = 'absolute';
  button.style.left = `${position.x}px`;
  button.style.top = `${position.y}px`;
}

function showGif() {
  // Aquí puedes agregar el código para mostrar el GIF
  alert('¡Sí! Yo sabia que ibas a aceptar hermosa, TE AMO. 🚀');
}

// Función para que los corazones aparezcan y desaparezcan automáticamente
function createRandomHearts() {
  setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.textContent = '❤️';
      const position = randomPosition();
      heart.style.left = `${position.x}px`;
      heart.style.top = `${position.y}px`;
      document.getElementById('page2').appendChild(heart);
      setTimeout(() => heart.remove(), 3000);
  }, 1000);
}

// Iniciar la creación de corazones aleatorios
createRandomHearts();

// Animación para imágenes que aparecen y desaparecen
function animateImages() {
  const images = document.querySelectorAll('.images-container img');
  images.forEach((img, index) => {
      setInterval(() => {
          img.style.display = 'none';
          setTimeout(() => {
              const position = randomPosition();
              img.style.left = `${position.x}px`;
              img.style.top = `${position.y}px`;
              img.style.display = 'block';
          }, 1000 * (index + 1));
      }, 5000);
  });
}

// Iniciar animación de imágenes
animateImages();
