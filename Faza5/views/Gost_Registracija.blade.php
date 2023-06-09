<!--Aleksandar Stanković 2019/0478-->
<!DOCTYPE html>
<html>
  <head>
    <title>Registracija</title>
    <link rel="icon" href="Slike/Logo.png" type="image/png" />
    <script src="Skripta_Registracija.js"></script>
    <link rel="stylesheet" href="Stilovi.css" />
    <link
      href="https://unpkg.com/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <script src="https://unpkg.com/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
    <script src="https://unpkg.com/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
    <meta charset="UTF-8" />
  </head>

  <body>
    <!--Header-->

    <header class="container-fluid p-0" style="text-align: center">
      <img src="Slike/Tapemax.png" alt="Tapemax.png" class="header-img" />
    </header>

    <!--Navigacioni bar-->

    <nav class="navbar navbar-expand-md navbar-dark bg-dark p-0">
      <div class="container-fluid">
        <button
          class="navbar-toggler mx-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="Gost_Filmovi.html">FILMOVI</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Gost_Projekcije.html">PROJEKCIJE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Gost_Prodavnica.html">PRODAVNICA</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Gost_Prijava.html">PRIJAVA</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="Gost_Registracija.html">
                REGISTRUJ SE
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!--Sadržaj-->

    <div class="container mt-5 content">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-5">
          <form class="d-grid" id="sign-in-form">
            <div class="mb-3">
              <label for="email" class="form-label">E-mail adresa:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>
            <div class="mb-3">
              <label for="username" class="form-label">Korisničko ime:</label>
              <input type="text" class="form-control" id="username" name="username" required />
            </div>
            <div class="row mb-3">
              <div class="col">
                <label for="name" class="form-label">Ime:</label>
                <input type="text" class="form-control" id="name" name="name" required />
              </div>
              <div class="col">
                <label for="surname" class="form-label">Prezime:</label>
                <input type="text" class="form-control" id="surname" name="surname" required />
              </div>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Šifra:</label>
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                required
                pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`[\]{}|:;"&lt;&gt;?,./])(?=.*[a-zA-Z]).{8,}$'
              />
            </div>
            <div>
              <label for="repeat-password" class="form-label">
                Ponovljena šifra:
              </label>
              <input
                type="password"
                class="form-control"
                id="repeat-password"
                required
              />
            </div>
            <div class="form-text my-2">
              Šifra mora imati najmanje 8 karaktera, bar jedno veliko slovo,
              jedno malo slovo, jedan broj i jedan specijalni karakter.
            </div>
            <button
              type="submit"
              class="btn btn-dark btn-block mt-auto button-style"
              id="sign-in"
            >
              REGISTRUJ SE
            </button>
            <label for="sign-in"></label>
          </form>
        </div>
      </div>
    </div>

    <!--Footer-->

    <footer class="p-0 m-0">
      <div
        class="container-fluid row justify-content-center align-items-center p-0 m-0"
      >
        <div class="col-sm-10 text-center p-0 m-0">
          <p class="py-1 m-0">
            Elektrotehnički fakultet u Beogradu<br />
            Principi Softverskog Inženjerstva (13S113PSI)<br />
            Aleksandar Stanković 2019/0478<br />
            Vukan Žarković 2019/0107
          </p>
        </div>
      </div>
    </footer>
  </body>
</html>