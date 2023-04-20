document.addEventListener("DOMContentLoaded", function () {

    const nameInput = document.getElementById("name");
    const nameLabel = document.querySelector('[for="name"]');
  
    nameInput.addEventListener("blur", () => {
      if (nameInput.value.trim() === "") {
        nameLabel.style.color = "red";
        nameLabel.textContent = "Naziv filma (polje je prazno):";
      } else if (!nameInput.validity.valid) {
        nameLabel.style.color = "red";
        nameLabel.textContent = "Naziv (neispravan format):";
      } else {
        nameLabel.style.color = "";
        nameLabel.textContent = "Naziv filma:";
      }
    });


    const directorInput = document.getElementById("director");
    const directorLabel = document.querySelector('[for="director"]');
  
    directorInput.addEventListener("blur", () => {
      if (directorInput.value.trim() === "") {
        directorLabel.style.color = "red";
        directorLabel.textContent = "Režiser (polje je prazno):";
      } else if (!directorInput.validity.valid) {
        directorLabel.style.color = "red";
        directorLabel.textContent = "Režiser (neispravan format):";
      } else {
        directorLabel.style.color = "";
        directorLabel.textContent = "Režiser:";
      }
    });


    const yearInput = document.getElementById("year");
    const yearLabel = document.querySelector('[for="year"]');
  
    yearInput.addEventListener("blur", () => {
      if (yearInput.value.trim() === "") {
        yearLabel.style.color = "red";
        yearLabel.textContent = "Godina (polje je prazno):";
      } else if (yearInput.value <= 1887 || yearInput.value >= 2024) {
        yearLabel.style.color = "red";
        yearLabel.textContent = "Godina (neispravan format):";
      } else {
        yearLabel.style.color = "";
        yearLabel.textContent = "Godina:";
      }
    });



    const durationInput = document.getElementById("duration");
    const durationLabel = document.querySelector('[for="duration"]');

    durationInput.addEventListener("blur", () => {
      if (durationInput.value == "") {
        durationLabel.style.color = "red";
        durationLabel.textContent = "Trajanje (polje je prazno):";
      } else {
        durationLabel.style.color = "";
        durationLabel.textContent = "Trajanje:";
      }
    });



    const descriptionInput = document.getElementById("description");
    const descriptionLabel = document.querySelector('[for="description"]');

    descriptionInput.addEventListener("blur", () => {
      if (descriptionInput.value.length > this.maxLength) {
        descriptionLabel.style.color = "red";
        descriptionLabel.textContent = "Opis filma (predugačak opis):";
      } else {
        descriptionLabel.style.color = "";
        descriptionLabel.textContent = "Opis filma:";
      }
    });




    const posterInput = document.getElementById("poster");
    const posterLabel = document.querySelector('[for="poster"]');
  
    posterInput.addEventListener("blur", () => {
      if (posterInput.value.length == 0) {
        posterLabel.style.color = "red";
        posterLabel.textContent = "Poster (slika nije odabrana):";
      }  else {
        posterLabel.style.color = "";
        posterLabel.textContent = "Poster:";
      }
    });



    const photoInput = document.getElementById("gallery");
    const photoLabel = document.querySelector('[for="gallery"]');
  
    photoInput.addEventListener("blur", () => {
      if (photoInput.value.length == 0) {
        photoLabel.style.color = "red";
        photoLabel.textContent = "Slike iz filma (slika nije odabrana):";
      }  else {
        photoLabel.style.color = "";
        photoLabel.textContent = "Slike iz filma:";
      }
    });


    const trailerInput = document.getElementById("trailer");
    const trailerLabel = document.querySelector('[for="trailer"]');
  
    trailerInput.addEventListener("blur", () => {
      if (trailerInput.value.length == 0) {
        trailerLabel.style.color = "red";
        trailerLabel.textContent = "Trejler (trejler nije odabran):";
      }  else {
        trailerLabel.style.color = "";
        trailerLabel.textContent = "Trejler:";
      }
    });

  
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



    const addMovieForm = document.getElementById("add-movie-form");
  
    addMovieForm.addEventListener("submit", function (event) {
      event.preventDefault();
    });
  
    const addButton = document.getElementById("add");
    const infoLabel = document.querySelector('label[for="add"]');
  
    addButton.addEventListener("click", function () {
      if (
        nameInput.value.trim() === "" ||
        directorInput.value.trim() === "" ||
        yearInput.value.trim() === "" ||
        durationInput.value == "" ||
        photoInput.files.length == 0 ||
        posterInput.value.length == 0 ||
        trailerInput.value.length == 0 
      ) {
        infoLabel.style.color = "red";
        infoLabel.textContent = "Molimo vas popunite sva polja.";
      } else if (
        yearInput.value <= 1887 || yearInput.value >= 2024
      ) {
        infoLabel.style.color = "red";
        infoLabel.textContent = "Molimo vas ispravite format podataka.";
      } else {
        infoLabel.style.color = "green";
        infoLabel.textContent = "Uspešno ste dodali proizvod.";
      }
    });

});