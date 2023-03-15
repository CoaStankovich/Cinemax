document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const emailLabel = document.querySelector('[for="email"]');

  emailInput.addEventListener("blur", () => {
    if (emailInput.value.trim() === "") {
      emailLabel.style.color = "red";
      emailLabel.textContent = "E-mail adresa (polje je prazno):";
    } else if (!emailInput.validity.valid) {
      emailLabel.style.color = "red";
      emailLabel.textContent = "E-mail adresa (neispravan format):";
    } else {
      emailLabel.style.color = "";
      emailLabel.textContent = "E-mail adresa:";
    }
  });

  const usernameInput = document.getElementById("username");
  const usernameLabel = document.querySelector('[for="username"]');

  usernameInput.addEventListener("blur", () => {
    if (usernameInput.value.trim() === "") {
      usernameLabel.style.color = "red";
      usernameLabel.textContent = "Korisničko ime (polje je prazno):";
    } else {
      usernameLabel.style.color = "";
      usernameLabel.textContent = "Korisničko ime:";
    }
  });

  const nameInput = document.getElementById("name");
  const nameLabel = document.querySelector('[for="name"]');

  nameInput.addEventListener("blur", () => {
    const nameRegex = /^[A-ZŠČĆŽĐ][a-zčšćžđ]*$/;
    if (nameInput.value.trim() === "") {
      nameLabel.style.color = "red";
      nameLabel.textContent = "Ime (polje je prazno):";
    } else if (!nameRegex.test(nameInput.value)) {
      nameLabel.style.color = "red";
      nameLabel.textContent = "Ime (neispravan format):";
    } else {
      nameLabel.style.color = "";
      nameLabel.textContent = "Ime:";
    }
  });

  const surnameInput = document.getElementById("surname");
  const surnameLabel = document.querySelector('[for="surname"]');

  surnameInput.addEventListener("blur", () => {
    const surnameRegex = /^[A-ZŠČĆŽĐ][a-zčšćžđ]*$/;
    if (surnameInput.value.trim() === "") {
      surnameLabel.style.color = "red";
      surnameLabel.textContent = "Prezime (polje je prazno):";
    } else if (!surnameRegex.test(surnameInput.value)) {
      surnameLabel.style.color = "red";
      surnameLabel.textContent = "Prezime (neispravan format):";
    } else {
      surnameLabel.style.color = "";
      surnameLabel.textContent = "Prezime:";
    }
  });

  const passwordInput = document.getElementById("password");
  const passwordLabel = document.querySelector('[for="password"]');

  passwordInput.addEventListener("blur", () => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`[\]{}|:;"'<>,.?/])(?=.*[a-zA-Z]).{8,}$/;
    if (passwordInput.value.trim() === "") {
      passwordLabel.style.color = "red";
      passwordLabel.textContent = "Šifra (polje je prazno):";
    } else if (!passwordRegex.test(passwordInput.value)) {
      passwordLabel.style.color = "red";
      passwordLabel.textContent = "Šifra (neispravan format):";
    } else {
      passwordLabel.style.color = "";
      passwordLabel.textContent = "Šifra:";
    }
  });

  const repeatPasswordInput = document.getElementById("repeat-password");
  const repeatPasswordLabel = document.querySelector('[for="repeat-password"]');

  repeatPasswordInput.addEventListener("blur", function () {
    if (repeatPasswordInput.value !== passwordInput.value) {
      repeatPasswordLabel.style.color = "red";
      repeatPasswordLabel.textContent =
        "Ponovljena šifra (šifre se ne podudaraju):";
    } else {
      repeatPasswordLabel.style.color = "";
      repeatPasswordLabel.textContent = "Ponovljena šifra:";
    }
  });

  const signInForm = document.getElementById("sign-in-form");

  signInForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  const submitButton = document.getElementById("sign-in");
  const infoLabel = document.querySelector('label[for="sign-in"]');

  submitButton.addEventListener("click", function () {
    const nameRegex = /^[A-ZŠČĆŽĐ][a-zčšćžđ]*$/;
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`[\]{}|:;"'<>,.?/])(?=.*[a-zA-Z]).{8,}$/;

    if (
      emailInput.value.trim() === "" ||
      usernameInput.value.trim() === "" ||
      nameInput.value.trim() === "" ||
      surnameInput.value.trim() === "" ||
      passwordInput.value.trim() === "" ||
      repeatPasswordInput.value.trim() === ""
    ) {
      infoLabel.style.color = "red";
      infoLabel.textContent = "Molimo vas popunite sva polja.";
    } else if (
      !emailInput.validity.valid ||
      !nameRegex.test(nameInput.value) ||
      !nameRegex.test(surnameInput.value) ||
      !passwordRegex.test(passwordInput.value) ||
      repeatPasswordInput.value !== passwordInput.value
    ) {
      infoLabel.style.color = "red";
      infoLabel.textContent = "Molimo vas ispravite format podataka.";
    } else {
      infoLabel.style.color = "green";
      infoLabel.textContent = "Uspešno ste registrovani.";
    }
  });
});
