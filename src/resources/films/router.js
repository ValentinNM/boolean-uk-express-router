// Import here...
const express = require("express");

const router = express.Router();

const films = [
  {
    id: 1,
    title: "Bonnie and Clyde",
    director: "Arthur Penn"
  },
  {
    id: 2,
    title: "Reservoir Dogs",
    director: "Quentin Tarantino"
  },
  {
    id: 3,
    title: "Inception",
    director: "Christopher Nolan"
  },
  {
    id: 4,
    title: "Django Unchained",
    director: "Quentin Tarantino"
  }
];

// Write routes here...

router.get("/", (req, res) => { 
  console.log("we are here: the moon");
  res.json(films);
})

router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log("id: ", id);
  
  const foundFilm = films.find((film) => film.id === parseInt(id));
  console.log("f film: ", foundFilm);
  
  res.json(foundFilm);
  
  console.log("if it shows it works")
});

router.get("/director/:directorName", (req, res) => {
  const { directorName } = req.params;
  
  const directorFilms = films.filter((film) => film.director === directorName);
  console.log("director films: ", directorFilms);
  
  res.json(directorFilms);
  
  // console.log("if it shows it works")
});

router.post("/", (req, res) => {
  const filmToCreate = {
    ...req.body
  };

  filmToCreate.id = films.length + 1;

  // const updateFilms = [...films, filmToCreate];

  films.push({filmToCreate});

  // console.log("check the updateFilms:", updateFilms);
  console.log("check the updateFilms:", films);

  res.json({film: filmToCreate});
})

module.exports = router;