document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button-select");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.classList.contains("selected-select")) {
        this.classList.remove("selected-select");
      } else {
        this.classList.add("selected-select");
      }
    });
  });
});
