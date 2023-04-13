document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button-genre");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.classList.contains("selected-genre")) {
        this.classList.remove("selected-genre");
      } else {
        this.classList.add("selected-genre");
      }
    });
  });
});
