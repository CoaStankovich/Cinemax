document.addEventListener("DOMContentLoaded", function () {

    const nameInput = document.getElementById("name");
    const nameLabel = document.querySelector('[for="name"]');
  
    nameInput.addEventListener("blur", () => {
      if (nameInput.value.trim() === "") {
        nameLabel.style.color = "red";
        nameLabel.textContent = "Naziv proizvoda (polje je prazno):";
      } else if (!nameInput.validity.valid) {
        nameLabel.style.color = "red";
        nameLabel.textContent = "Naziv (neispravan format):";
      } else {
        nameLabel.style.color = "";
        nameLabel.textContent = "Naziv:";
      }
    });
  
    const filmInput = document.getElementById("movies");
    const filmLabel = document.querySelector('[for="movies"]');
  
    filmInput.addEventListener("blur", () => {
      if (filmInput.value.trim() === "") {
        filmLabel.style.color = "red";
        filmLabel.textContent = "Ime filma (polje je prazno):";
      } else {
        filmLabel.style.color = "";
        filmLabel.textContent = "Naziv filma:";
      }
    });
  

    const typeInput = document.getElementById("type");
    const typeLabel = document.querySelector('[for="type"]');

    typeInput.addEventListener("blur", () => {
      if (typeInput.value == "") {
        typeLabel.style.color = "red";
        typeLabel.textContent = "Tip proizvoda (polje je prazno):";
      } else {
        typeLabel.style.color = "";
        typeLabel.textContent = "Tip proizvoda:";
      }
    });


    const descriptionInput = document.getElementById("description");
    const descriptionLabel = document.querySelector('[for="description"]');

    descriptionInput.addEventListener("blur", () => {
      if (descriptionInput.value.length > this.maxLength) {
        descriptionLabel.style.color = "red";
        descriptionLabel.textContent = "Opis proizvoda (predugačak opis):";
      } else {
        descriptionLabel.style.color = "";
        descriptionLabel.textContent = "Opis proizvoda:";
      }
    });


  
    const photoInput = document.getElementById("gallery");
    const photoLabel = document.querySelector('[for="gallery"]');
  
    photoInput.addEventListener("blur", () => {
      if (photoInput.value.length == 0) {
        photoLabel.style.color = "red";
        photoLabel.textContent = "Slika proizvoda (slika nije odabrana):";
      }  else {
        photoLabel.style.color = "";
        photoLabel.textContent = "Slika proizvoda:";
      }
    });
  
    const priceInput = document.getElementById("price");
    const priceLabel = document.querySelector('[for="price"]');
  
    priceInput.addEventListener("blur", () => {
      if (priceInput.value <= 0) {
        priceLabel.style.color = "red";
        priceLabel.textContent = "Cena proizvoda (neispravna cena):";
      } else if (priceInput.value.length == 0) {
        priceLabel.style.color = "red";
        priceLabel.textContent = "Cena proizvoda (polje je prazno)";
      } else {
        priceLabel.style.color = "";
        priceLabel.textContent = "Cena proizvoda:";
      }
    });


    const pointsInput = document.getElementById("points");
    const pointsLabel = document.querySelector('[for="price"]');
  
    priceInput.addEventListener("blur", () => {
      if (pointsInput.value < 0) {
        pointsLabel.style.color = "red";
        pointsLabel.textContent = "Sakupljeni bodovi (neispravna količina):";
      } else if (pointsInput.value.length == 0) {
        pointsLabel.style.color = "red";
        pointsLabel.textContent = "Sakupljeni bodovi (polje je prazno)";
      }
    });


    const countInput = document.getElementById("count");
    const countLabel = document.querySelector('[for="count"]');
  
    countInput.addEventListener("blur", () => {
      if (countInput.value <= 0) {
        countLabel.style.color = "red";
        countLabel.textContent = "Količina (neispravna količina):";
      } else if (countInput.value.length == 0) {
        countLabel.style.color = "red";
        countLabel.textContent = "Količina (polje je prazno):";
      } else {
        countLabel.style.color = "";
        countLabel.textContent = "Količina:";
      }
    });




    const checkbox = document.getElementById("imagesCheckbox");
    const input = document.getElementById("gallery");
  
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        input.classList.add("active");
      } else {
        input.classList.remove("active");
      }
    });


    const changeProductForm = document.getElementById("sign-in-form");
  
    changeProductForm.addEventListener("submit", function (event) {
      event.preventDefault();
    });
  
    const addButton = document.getElementById("add");
    const infoLabel = document.querySelector('label[for="add"]');
  
    addButton.addEventListener("click", function () {
      if (
        nameInput.value.trim() === "" ||
        filmInput.value.trim() === "" ||
        typeInput.value == "" ||
        photoInput.files.length == 0 ||
        priceInput.value.length == 0 ||
        pointsInput.value.length == 0 ||
        countInput.value.length == 0
      ) {
        infoLabel.style.color = "red";
        infoLabel.textContent = "Molimo vas popunite sva polja.";
      } else if (
        priceInput.value <= 0 ||
        pointsInput.value < 0 ||
        countInput.value <= 0 
      ) {
        infoLabel.style.color = "red";
        infoLabel.textContent = "Molimo vas ispravite format podataka.";
      } else {
        infoLabel.style.color = "green";
        infoLabel.textContent = "Uspešno ste dodali proizvod.";
      }
    });



  });