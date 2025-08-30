document.addEventListener("DOMContentLoaded", () => {
  const temples = [
    {
    name: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005",
    size: "old",
    square: 11500,
    image:"images/aba.jpg",
  },
  {
    name: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888",
    size: "old",
    square: 74792,
    image:"images/manti-utah.jpg",
  },
  {
    name: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015",
    size: "new",
   square: 96630,
    image:"images/payson-utah.jpg",
  },
  {
    name: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020",
    size: "new",
    square: 6861,
    image:"images/yigo-guam.jpg",
  },
  {
    name: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974",
    size: "old",
    square: 156558,
    image:"images/washington-dc.jpg",
  },
  {
    name: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986",
    size: "old",
    square: 9600,
    image:"images/lima-peru.jpg",
  },
  {
    name: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983",
    size: "old",
    square: 116642,
    image:"images/mexico-city.jpg",
  },
  {
    name: "Lagos Temple",
    location: "Lagos Nigeria, Ikoyi",
    dedicated: "2018",
    size: "new",
    square:  19800,
    image:"images/lagos.jpg",

  },
  {
    name: "Benin City Temple",
    location: "Benin City",
    dedicated: "2020",
    size: "large",
    square: 30700,

    image:"images/benin.jpg"
  },
  ];

  const container = document.getElementById("temples");
  const buttons = document.querySelectorAll("nav button");

  function renderTemples(filter) {
    container.innerHTML = "";

    let filtered = temples;

    if (filter === "old") {
      filtered = temples.filter(t => t.dedicated < 2010);
    } else if (filter === "new") {
      filtered = temples.filter(t => t.dedicated >= 2010);
    } else if (filter === "large") {
      filtered = temples.filter(t => t.size === "large");
    }

    if (filtered.length === 0) {
      container.innerHTML = "<p>No temples found.</p>";
      return;
    }

    filtered.forEach(t => {
      const card = document.createElement("div");
      card.classList.add("temple-card");
      card.innerHTML = `
        <img src="${t.image}" alt="${t.name}">
        <h2>${t.name}</h2>
        <p><strong>Location:</strong> ${t.location}</p>
        <p><strong>Dedicated:</strong> ${t.dedicated}</p>
        <p><strong>Size:</strong> ${t.size}</p>
        <p><strong>square:</strong> ${t.square}</p>
      `;
      container.appendChild(card);
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      renderTemples(btn.dataset.filter);
    });
  });

  // Load all temples by default
  renderTemples("all");
});
