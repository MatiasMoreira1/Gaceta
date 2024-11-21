const targetDate = new Date('January 1, 2025 00:00:00').getTime();


    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      if (timeLeft < 0) {
        document.getElementById('countdown').innerHTML = "<h2>¡Feliz Año Nuevo 2025! 🎉</h2>";
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      document.getElementById('days').innerText = days;
      document.getElementById('hours').innerText = hours;
      document.getElementById('minutes').innerText = minutes;
      document.getElementById('seconds').innerText = seconds;
    }

    // Actualiza el temporizador cada segundo
    setInterval(updateCountdown, 1000);

    function padNumber(number) {
        return number < 10 ? '0' + number : number; // Si el número es menor a 10, añade un 0
      }
      
      function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;
      
        if (timeLeft < 0) {
          document.getElementById('countdown').innerHTML = "<h2>¡Feliz Año Nuevo 2025! 🎉</h2>";
          return;
        }
      
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      
        document.getElementById('days').innerText = padNumber(days);
        document.getElementById('hours').innerText = padNumber(hours);
        document.getElementById('minutes').innerText = padNumber(minutes);
        document.getElementById('seconds').innerText = padNumber(seconds);
      }
// Lista de artistas
const artists = [
    {
      name: "Ramma",
      streams: "+400k Oyentes mensuales",
      image: "./assets/media/artistas/ramma2.jpg" // Cambia por la URL de la imagen
    },
    {
        name: "Tadu",
        streams: "+400k Oyentes mensuales",
        image: "./assets/media/artistas/tadu.jpg" // Cambia por la URL de la imagen
    },
    {
        name: "Ara",
        streams: "+250k Oyentes mensuales",
        image: "./assets/media/artistas/ara.jpg" // Cambia por la URL de la imagen
    },
    {
      name: "Valuto",
      streams: "+50k Oyentes mensuales",
      image: "./assets/media/artistas/valuto.jpg" // Cambia por la URL de la imagen
    },
    {
      name: "Wave",
      streams: "+45k Oyentes Mensuales",
      image: "./assets/media/artistas/wave.jpg" // Cambia por la URL de la imagen
    },
    {
      name: "Fosse",
      streams: "+25k Oyentes mensuales",
      image: "./assets/media/artistas/fosse.jpg" // Cambia por la URL de la imagen
    },
    // {
    //     name: "Artist 6",
    //     streams: "600M+ Streams",
    //     image: "https://via.placeholder.com/150" // Cambia por la URL de la imagen
    //   },
      
  ];
  
  // Contenedor del carrusel
  const carousel = document.getElementById("carousel");
  
  // Generar las tarjetas dinámicamente
  artists.forEach(artist => {
    const card = document.createElement("div");
    card.className = "card rounded-lg flex flex-col items-start h-5/6 w-56";
    card.innerHTML = `
      <img class="h-full object-cover mb-4" src="${artist.image}" alt="${artist.name}">
      <h2 class="text-lg font-semibold">${artist.name}</h2>
      <p class="text-gray-500">${artist.streams}</p>
    `;
    carousel.appendChild(card);
  });
  
  // Lógica del carrusel
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  
  let index = 0;
  
  // Deshabilitar o habilitar los botones según la posición
  function updateButtonState() {
    prev.disabled = index === 0;
    next.disabled = index >= artists.length - 3; // Cambiar a 3 para que sea el último grupo de 3
  }
  
  // Mover el carrusel hacia la izquierda
  prev.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });
  
  // Mover el carrusel hacia la derecha
  next.addEventListener("click", () => {
    if (index < artists.length - 3) { // Cambiar a 3 para que sea el último grupo de 3
      index++;
      updateCarousel();
    }
  });
  
  // Actualizar posición del carrusel
  function updateCarousel() {
    const offset = -index * 270; // Ajustar el número para mover las tarjetas correctamente
    carousel.style.transform = `translateX(${offset}px)`;
    updateButtonState(); // Actualiza el estado de los botones
  }
  
  // Inicializar los botones
  updateButtonState();