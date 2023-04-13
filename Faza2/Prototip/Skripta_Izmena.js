document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("imagesCheckbox");
  const input = document.getElementById("gallery");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      input.removeAttribute("disabled");
    } else {
      input.setAttribute("disabled", "");
    }
  });
});
