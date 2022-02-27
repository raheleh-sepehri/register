const password = document.querySelector("#password");
const toggle = document.querySelector(".hideshow");
toggle.addEventListener("click", () => {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    toggle.classList.add("active");
  } else {
    password.setAttribute("type", "password");
    toggle.classList.remove("active");
  }
});
