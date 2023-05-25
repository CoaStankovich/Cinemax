CREATE DATABASE cinemax;
USE cinemax;

CREATE TABLE `film` (
  `filmId` int NOT NULL AUTO_INCREMENT,
  `ime` varchar(45) NOT NULL,
  `reziser` varchar(45) NOT NULL,
  `godina` int NOT NULL,
  `trajanje` varchar(10) NOT NULL,
  `opis` varchar(300) NOT NULL,
  `poster` longblob NOT NULL,
  `trejler` longblob NOT NULL,
  `ocena` float NOT NULL,
  PRIMARY KEY (`filmId`),
  UNIQUE KEY `filmId_UNIQUE` (`filmId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `zanr` (
  `zanrId` int NOT NULL AUTO_INCREMENT,
  `ime` varchar(20) NOT NULL,
  PRIMARY KEY (`zanrId`),
  UNIQUE KEY `zanrId_UNIQUE` (`zanrId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `zanr_film` (
  `zanrFilmId` int NOT NULL AUTO_INCREMENT,
  `zanrId` int NOT NULL,
  `filmId` int NOT NULL,
  PRIMARY KEY (`zanrFilmId`),
  UNIQUE KEY `zanrFilmId_UNIQUE` (`zanrFilmId`),
  KEY `zanr_film_zanrId_idx` (`zanrId`),
  KEY `zanr_film_filmId_idx` (`filmId`),
  CONSTRAINT `zanr_film_filmId` FOREIGN KEY (`filmId`) REFERENCES `film` (`filmId`),
  CONSTRAINT `zanr_film_zanrId` FOREIGN KEY (`zanrId`) REFERENCES `zanr` (`zanrId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `slika_film` (
  `slikaFilmId` int NOT NULL AUTO_INCREMENT,
  `slika` longblob NOT NULL,
  `filmId` int NOT NULL,
  PRIMARY KEY (`slikaFilmId`),
  UNIQUE KEY `slikaFilmId_UNIQUE` (`slikaFilmId`),
  KEY `filmId_idx` (`filmId`),
  CONSTRAINT `slika_film_filmId` FOREIGN KEY (`filmId`) REFERENCES `film` (`filmId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `proizvod` (
  `proizvodId` int NOT NULL AUTO_INCREMENT,
  `ime` varchar(45) NOT NULL,
  `filmId` int NOT NULL,
  `tip` varchar(10) NOT NULL,
  `opis` varchar(300) NOT NULL,
  `dinari` int NOT NULL,
  `bodovi` int NOT NULL,
  `kolicina` int NOT NULL,
  PRIMARY KEY (`proizvodId`),
  UNIQUE KEY `proizvodId_UNIQUE` (`proizvodId`),
  KEY `filmId_idx` (`filmId`),
  CONSTRAINT `proizvod_filmId` FOREIGN KEY (`filmId`) REFERENCES `film` (`filmId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `slika_proizvod` (
  `slikaProizvodId` int NOT NULL AUTO_INCREMENT,
  `slika` longblob NOT NULL,
  `proizvodId` int NOT NULL,
  PRIMARY KEY (`slikaProizvodId`),
  UNIQUE KEY `proizvodSlikaId_UNIQUE` (`slikaProizvodId`),
  KEY `proizvod_slika_proizvodId_idx` (`proizvodId`),
  CONSTRAINT `slika_proizvod_proizvodId` FOREIGN KEY (`proizvodId`) REFERENCES `proizvod` (`proizvodId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `korisnik` (
  `korisnikId` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `korisnickoIme` varchar(45) NOT NULL,
  `ime` varchar(45) NOT NULL,
  `prezime` varchar(45) NOT NULL,
  `sifra` varchar(45) NOT NULL,
  `kategorija` varchar(1) NOT NULL,
  `bodovi` int NOT NULL,
  PRIMARY KEY (`korisnikId`),
  UNIQUE KEY `korisnikId_UNIQUE` (`korisnikId`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `korisnickoIme_UNIQUE` (`korisnickoIme`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `komentar` (
  `komentarId` int NOT NULL AUTO_INCREMENT,
  `filmId` int NOT NULL,
  `korisnikId` int NOT NULL,
  `tekst` varchar(300) NOT NULL,
  PRIMARY KEY (`komentarId`),
  UNIQUE KEY `komentarId_UNIQUE` (`komentarId`),
  KEY `komentar_filmId_idx` (`filmId`),
  KEY `komentar_korisnikId_idx` (`korisnikId`),
  CONSTRAINT `komentar_filmId` FOREIGN KEY (`filmId`) REFERENCES `film` (`filmId`),
  CONSTRAINT `komentar_korisnikId` FOREIGN KEY (`korisnikId`) REFERENCES `korisnik` (`korisnikId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `narudzbina` (
  `narudzbinaId` int NOT NULL AUTO_INCREMENT,
  `proizvodId` int NOT NULL,
  `korisnikId` int NOT NULL,
  `zaUplatu` tinyint(1) NOT NULL,
  `mesto` varchar(45) NOT NULL,
  `ulica` varchar(45) NOT NULL,
  PRIMARY KEY (`narudzbinaId`),
  UNIQUE KEY `narudzbinaId_UNIQUE` (`narudzbinaId`),
  KEY `narudzbina_proizvodId_idx` (`proizvodId`),
  KEY `narudzbina_korisnikId_idx` (`korisnikId`),
  CONSTRAINT `narudzbina_korisnikId` FOREIGN KEY (`korisnikId`) REFERENCES `korisnik` (`korisnikId`),
  CONSTRAINT `narudzbina_proizvodId` FOREIGN KEY (`proizvodId`) REFERENCES `proizvod` (`proizvodId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `format` (
  `formatId` int NOT NULL AUTO_INCREMENT,
  `ime` varchar(20) NOT NULL,
  PRIMARY KEY (`formatId`),
  UNIQUE KEY `formatId_UNIQUE` (`formatId`),
  UNIQUE KEY `ime_UNIQUE` (`ime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `bioskop` (
  `bioskopId` int NOT NULL AUTO_INCREMENT,
  `ime` varchar(45) NOT NULL,
  PRIMARY KEY (`bioskopId`),
  UNIQUE KEY `bioskopId_UNIQUE` (`bioskopId`),
  UNIQUE KEY `ime_UNIQUE` (`ime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `sala` (
  `salaId` int NOT NULL AUTO_INCREMENT,
  `broj` int NOT NULL,
  `bioskopId` int NOT NULL,
  `brojSedista` int NOT NULL,
  PRIMARY KEY (`salaId`),
  UNIQUE KEY `salaId_UNIQUE` (`salaId`),
  KEY `bioskopId_idx` (`bioskopId`),
  CONSTRAINT `sala_bioskopId` FOREIGN KEY (`bioskopId`) REFERENCES `bioskop` (`bioskopId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `format_sala` (
  `formatSalaId` int NOT NULL AUTO_INCREMENT,
  `formatId` int NOT NULL,
  `salaId` int NOT NULL,
  PRIMARY KEY (`formatSalaId`),
  UNIQUE KEY `formatSalaId_UNIQUE` (`formatSalaId`),
  KEY `format_sala_formatId_idx` (`formatId`),
  KEY `format_sala_salaId_idx` (`salaId`),
  CONSTRAINT `format_sala_formatId` FOREIGN KEY (`formatId`) REFERENCES `format` (`formatId`),
  CONSTRAINT `format_sala_salaId` FOREIGN KEY (`salaId`) REFERENCES `sala` (`salaId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `projekcija` (
  `projekcijaId` int NOT NULL AUTO_INCREMENT,
  `filmId` int NOT NULL,
  `bioskopId` int NOT NULL,
  `salaId` int NOT NULL,
  `formatId` int NOT NULL,
  `datumVreme` datetime NOT NULL,
  `dinari` int NOT NULL,
  `bodovi` int NOT NULL,
  PRIMARY KEY (`projekcijaId`),
  UNIQUE KEY `projekcijaId_UNIQUE` (`projekcijaId`),
  KEY `projekcija_filmId_idx` (`filmId`),
  KEY `projekcija_bioskopId_idx` (`bioskopId`),
  KEY `projekcija_salaId_idx` (`salaId`),
  KEY `projekcija_formatId_idx` (`formatId`),
  CONSTRAINT `projekcija_bioskopId` FOREIGN KEY (`bioskopId`) REFERENCES `bioskop` (`bioskopId`),
  CONSTRAINT `projekcija_filmId` FOREIGN KEY (`filmId`) REFERENCES `film` (`filmId`),
  CONSTRAINT `projekcija_formatId` FOREIGN KEY (`formatId`) REFERENCES `format` (`formatId`),
  CONSTRAINT `projekcija_salaId` FOREIGN KEY (`salaId`) REFERENCES `sala` (`salaId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `zauzeto_sediste` (
  `zauzetoSedisteId` int NOT NULL AUTO_INCREMENT,
  `projekcijaId` int NOT NULL,
  `sediste` int NOT NULL,
  PRIMARY KEY (`zauzetoSedisteId`),
  UNIQUE KEY `zauzetoSedisteId_UNIQUE` (`zauzetoSedisteId`),
  KEY `zauzeto_sediste_projekcijaId_idx` (`projekcijaId`),
  CONSTRAINT `zauzeto_sediste_projekcijaId` FOREIGN KEY (`projekcijaId`) REFERENCES `projekcija` (`projekcijaId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `rezervacija` (
  `rezervacijaId` int NOT NULL AUTO_INCREMENT,
  `projekcijaId` int NOT NULL,
  `korisnikId` int NOT NULL,
  `sediste` int NOT NULL,
  PRIMARY KEY (`rezervacijaId`),
  UNIQUE KEY `rezervacijaId_UNIQUE` (`rezervacijaId`),
  KEY `rezervacija_projekcijaId_idx` (`projekcijaId`),
  KEY `rezervacija_korisnikId_idx` (`korisnikId`),
  CONSTRAINT `rezervacija_korisnikId` FOREIGN KEY (`korisnikId`) REFERENCES `korisnik` (`korisnikId`),
  CONSTRAINT `rezervacija_projekcijaId` FOREIGN KEY (`projekcijaId`) REFERENCES `projekcija` (`projekcijaId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO korisnik (email, korisnickoIme, ime, prezime, sifra, kategorija, bodovi) VALUES ("admin@admin.com", "admin", "Aleksandar", "Stanković", "123", "a", 0);