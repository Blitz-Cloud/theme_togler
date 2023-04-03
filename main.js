const body = document.querySelector("body");
const dark_btn = document.getElementById("dark_btn");
const light_btn = document.getElementById("light_btn");
const system_theme = document.getElementById("system_theme");
const themeBtn = document.querySelector("button").children;

let i = 0;
function themeToggle() {
  themeBtn[i].classList.toggle("hidden");
  switch (i) {
    case 0:
      body.classList = "light_theme";
      break;
    case 1:
      body.classList = "dark_theme";
      break;
    case 2:
      body.classList = "theme";
      break;
  }
  if (i == 2) {
    i = 0;
  } else {
    i++;
  }

  themeBtn[i].classList.toggle("hidden");
}
