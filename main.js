const body = document.querySelector("body");
const dark_btn = document.getElementById("dark_btn");
const light_btn = document.getElementById("light_btn");

function themeToggle() {
  if (body.classList.contains("theme")) {
    body.classList.toggle("theme");
    light_btn.classList.add("hidden");
    dark_btn.classList.remove("hidden");
    // pt fiecare din cele 2 cazuri ar trebui salvat in localStorage
    // thema preferata de utilizator
  } else {
    body.classList.toggle("theme");
    light_btn.classList.remove("hidden");
    dark_btn.classList.add("hidden");
    // pt fiecare din cele 2 cazuri ar trebui salvat in localStorage
    // thema preferata de utilizator
  }
}
