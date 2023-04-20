document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("imagesCheckbox");
  const input = document.getElementById("gallery");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      input.classList.add("active");
    } else {
      input.classList.remove("active");
    }
  });
});
