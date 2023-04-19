document.addEventListener("DOMContentLoaded", function () {



    const filmInput = document.getElementById("movies");
    const filmLabel = document.querySelector('[for="movies"]');
  
    filmInput.addEventListener("blur", () => {
      if (filmInput.value.trim() === "") {
        filmLabel.style.color = "red";
        filmLabel.textContent = "Naziv filma (polje je prazno):";
      } else if (!filmInput.validity.valid) {
        filmLabel.style.color = "red";
        filmLabel.textContent = "Naziv (neispravan format):";
      } else {
        filmLabel.style.color = "";
        filmLabel.textContent = "Naziv filma:";
      }
    });
  
    const bioskopInput = document.getElementById("cinema");
    const bioskopLabel = document.querySelector('[for="cinema"]');
  
    bioskopInput.addEventListener("blur", () => {
      if (bioskopInput.value.trim() === "") {
        bioskopLabel.style.color = "red";
        bioskopLabel.textContent = "Bioskop (polje je prazno):";
      } else {
        bioskopLabel.style.color = "";
        bioskopLabel.textContent = "Bioskop:";
      }
    });
  

    const roomInput = document.getElementById("room");
    const roomLabel = document.querySelector('[for="room-format"]');

    roomInput.addEventListener("blur", () => {
      if (roomInput.value == "") {
        roomLabel.style.color = "red";
        roomLabel.textContent = "Sala (polje je prazno):";
      } else {
        roomLabel.style.color = "";
        roomLabel.textContent = "Sala:";
      }
    });


    const formatInput = document.getElementById("format");
    const formatLabel = document.querySelector('[for="room-format"]');

    formatInput.addEventListener("blur", () => {
      if (formatInput.value == "") {
        formatLabel.style.color = "red";
        formatLabel.textContent = "Format (polje je prazno):";
      } else {
        formatLabel.style.color = "";
        formatLabel.textContent = "Format:";
      }
    });


    const dateInput = document.getElementById("date");
    const dateLabel = document.querySelector('[for="date-time"]');

    dateInput.addEventListener("blur", () => {
      if (dateInput.value.trim() === "") {
        dateLabel.style.color = "red";
        dateLabel.textContent = "Datum (neispravan unos):";
      } else {
        dateLabel.style.color = "";
        dateLabel.textContent = "Datum:";
      }
    });


    const timeInput = document.getElementById("time");
    const timeLabel = document.querySelector('[for="date-time"]');

    timeInput.addEventListener("blur", () => {
      if (timeInput.value.trim() === "") {
        timeLabel.style.color = "red";
        timeLabel.textContent = "Vreme (neispravan unos):";
      } else {
        timeLabel.style.color = "";
        timeLabel.textContent = "Vreme:";
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
      } else if (pointsInput.value.length == 0 && priceInput.value.length == 0) {
        pointsLabel.style.color = "red";
        pointsLabel.textContent = "Sakupljeni bodovi (polje je prazno)";
      }
    });



  
    const addProductForm = document.getElementById("add-projection-form");
  
    addProductForm.addEventListener("submit", function (event) {
      event.preventDefault();
    });
  
    const addButton = document.getElementById("add");
    const infoLabel = document.querySelector('label[for="add"]');
  
    addButton.addEventListener("click", function () {
      if (
        filmInput.value.trim() === "" ||
        bioskopInput.value.trim() === "" ||
        roomInput.value == "" ||
        formatInput.value == "" ||
        priceInput.value.length == 0 ||
        pointsInput.value.length == 0 ||
        dateInput.value.trim() === "" ||
        timeInput.value.trim() === ""
      ) {
        alert("1");
        infoLabel.style.color = "red";
        infoLabel.textContent = "Molimo vas popunite sva polja.";
      } else if (
        priceInput.value <= 0 ||
        pointsInput.value < 0 
      ) {
        alert("2");
        infoLabel.style.color = "red";
        infoLabel.textContent = "Molimo vas ispravite format podataka.";
      } else {
        alert("3");
        infoLabel.style.color = "green";
        infoLabel.textContent = "Uspešno ste dodali proizvod.";
      }
    });
  });