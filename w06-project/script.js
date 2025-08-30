// Example Course Data
const courses = [
  { title: "HTML & CSS Basics", desc: "Learn the building blocks of the web.", img: "images/html-css.png" },
  { title: "JavaScript Essentials", desc: "Interactive programming for the web.", img: "images/javascript.webp" },
  { title: "React Fundamentals", desc: "Build modern SPAs with React.", img: "images/react.png" }
];

// Render courses dynamically
function loadCourses() {
  const container = document.getElementById("course-list");
  if (!container) return;

  courses.forEach(course => {
    const card = `
      <div class="course-card">
        <img src="${course.img}" loading="lazy" alt="${course.title}">
        <h3>${course.title}</h3>
        <p>${course.desc}</p>
      </div>
    `;
    container.innerHTML += card;
  });
}

// Form Handling
function handleForm(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const course = document.getElementById("course").value;

  if (name && email && course) {
    localStorage.setItem("username", name);
    document.getElementById("form-msg").textContent = ` Thank you ${name}, you registered for ${course}!`;
  } else {
    document.getElementById("form-msg").textContent = " Please fill all required fields.";
  }
}

// Welcome Back message
function showWelcome() {
  const user = localStorage.getItem("username");
  if (user) {
    const welcomeEl = document.getElementById("welcome");
    if (welcomeEl) welcomeEl.textContent = ` Welcome back, ${user}!`;
  }
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  loadCourses();
  showWelcome();
  const form = document.getElementById("contact-form");
  if (form) form.addEventListener("submit", handleForm);
});
