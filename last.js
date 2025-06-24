document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("stars-container");
  const notesContainer = document.getElementById("music-notes-container");
  const cameraOverlay = document.querySelector(".camera-overlay");
  const starsCount = 100;

  // Vytvoření hvězd
  for (let i = 0; i < starsCount; i++) {
    createStar();
  }

  // Nová hvězda každých 300ms
  setInterval(createStar, 300);

  // Hudební noty
  setInterval(createMusicNote, 800);

  // Částice lávy v kruhu kamery
  setInterval(createLavaParticle, 200);

  function createStar() {
    const star = document.createElement("div");
    star.className = "star";

    const size = Math.random() * 3 + 1;
    const posX = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * 5;
    const opacity = Math.random() * 0.7 + 0.3;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${posX}px`;
    star.style.top = `-10px`;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;
    star.style.opacity = opacity;

    container.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, duration * 1000);
  }

  function createMusicNote() {
    const note = document.createElement("div");
    note.className = "music-note";

    const notes = ["♪", "♫", "♩", "♬", "♭", "♮"];
    note.textContent = notes[Math.floor(Math.random() * notes.length)];

    const colors = [
      "#ff8a00",
      "#e52e71",
      "#00d2ff",
      "#3a7bd5",
      "#a0d8f7",
      "#f7a0e0",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const posX = Math.random() * window.innerWidth;
    const duration = Math.random() * 15 + 10; // Pomalejší pohyb
    const delay = Math.random() * 3;
    const fontSize = Math.random() * 20 + 16;
    const rotate = Math.random() * 360;

    note.style.left = `${posX}px`;
    note.style.top = `${window.innerHeight + 20}px`;
    note.style.animationDuration = `${duration}s`;
    note.style.animationDelay = `${delay}s`;
    note.style.fontSize = `${fontSize}px`;
    note.style.color = color;
    note.style.transform = `rotate(${rotate}deg)`;

    notesContainer.appendChild(note);

    setTimeout(() => {
      note.remove();
    }, duration * 1000);
  }

  function createLavaParticle() {
    const particle = document.createElement("div");
    particle.className = "lava-particle";

    const size = Math.random() * 8 + 4;
    const duration = Math.random() * 3 + 1;
    const delay = Math.random();
    const startX = Math.random() * 100 - 50;
    const startY = Math.random() * 100 - 50;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${150 + startX}px`;
    particle.style.top = `${150 + startY}px`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    cameraOverlay.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, duration * 1000);
  }

  window.addEventListener("resize", function () {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star) => {
      const currentLeft = parseFloat(star.style.left);
      if (currentLeft > window.innerWidth) {
        star.style.left = `${window.innerWidth - 10}px`;
      }
    });
  });
});
