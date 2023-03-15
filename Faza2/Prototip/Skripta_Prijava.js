document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const emailLabel = document.querySelector('[for="email"]');

  emailInput.addEventListener("blur", () => {
    if (emailInput.value.trim() === "") {
      emailLabel.style.color = "red";
      emailLabel.textContent = "E-mail adresa (polje je prazno):";
    } else {
      emailLabel.style.color = "";
      emailLabel.textContent = "E-mail adresa:";
    }
  });

  const passwordInput = document.getElementById("password");
  const passwordLabel = document.querySelector('[for="password"]');

  passwordInput.addEventListener("blur", () => {
    if (passwordInput.value.trim() === "") {
      passwordLabel.style.color = "red";
      passwordLabel.textContent = "Šifra (polje je prazno):";
    } else {
      passwordLabel.style.color = "";
      passwordLabel.textContent = "Šifra:";
    }
  });

  const logInForm = document.getElementById("log-in-form");

  logInForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  const submitButton = document.getElementById("log-in");
  const infoLabel = document.querySelector('label[for="log-in"]');

  submitButton.addEventListener("click", function () {
    if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
      infoLabel.style.color = "red";
      infoLabel.textContent = "Molimo vas popunite sva polja.";
    } else {
      window.location = "Admin_Početna.html";
    }
  });
});
