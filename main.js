const body = document.querySelector("body");
const dark_btn = document.getElementById("dark_btn");
const light_btn = document.getElementById("light_btn");
const system_theme = document.getElementById("system_theme");

function themeToggle() {
  system_theme.classList.add("hidden");
  if (body.classList.contains("theme")) {
    // trebuie adaugat local-storage state managment
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      console.log("Tema preferata este Dark");
      body.classList = "light_theme";
      dark_btn.classList.toggle("hidden");
    } else {
      console.log("Tema preferata este Light");
      body.classList = "dark_theme";
      light_btn.classList.toggle("hidden");
    }
  } else if (body.classList.contains("light_theme")) {
    body.classList = "dark_theme";
    dark_btn.classList.toggle("hidden");
    light_btn.classList.toggle("hidden");
  } else {
    body.classList = "light_theme";
    dark_btn.classList.toggle("hidden");
    light_btn.classList.toggle("hidden");
  }
}
