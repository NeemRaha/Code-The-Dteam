// API URL for SWAPI
const apiUrl = "https://swapi.dev/api";

// DOM Elements
const peopleBtn = document.getElementById("people-btn");
const filmsBtn = document.getElementById("films-btn");
const speciesBtn = document.getElementById("species-btn");
const contentDiv = document.getElementById("content");

// Fetch and Display People
function fetchPeople() {
    fetch(`${apiUrl}/people`)
        .then(response => response.json())
        .then(data => {
            let people = data.results;
            let peopleHtml = "";
            people.forEach(person => {
                peopleHtml += `<div class="card">
                          <h2>${person.name}</h2>
                          <p>Gender: ${person.gender}</p>
                          <p>Birth Year: ${person.birth_year}</p>
                        </div>`;
            });
            contentDiv.innerHTML = peopleHtml;
        })
        .catch(error => console.error(error));
}

// Fetch and Display Films
function fetchFilms() {
    fetch(`${apiUrl}/films`)
        .then(response => response.json())
        .then(data => {
            let films = data.results;
            let filmsHtml = "";
            films.forEach(film => {
                filmsHtml += `<div class="card">
                          <h2>${film.title}</h2>
                          <p>Director: ${film.director}</p>
                          <p>Release Date: ${film.release_date}</p>
                        </div>`;
            });
            contentDiv.innerHTML = filmsHtml;
        })
        .catch(error => console.error(error));
}
// Fetch and Display Species
function fetchSpecies() {
    fetch(`${apiUrl}/species`)
        .then(response => response.json())
        .then(data => {
            let species = data.results;
            let speciesHtml = "";
            species.forEach(specie => {
                speciesHtml += `<div class="card">
                          <h2>${specie.name}</h2>
                          <p>Classification: ${specie.classification}</p>
                          <p>Average Height: ${specie.average_height}</p>
                          <p>Average Lifespan: ${specie.average_lifespan}</p>
                        </div>`;
            });
            contentDiv.innerHTML = speciesHtml;
        })
        .catch(error => console.error(error));
}

// Event Listeners
peopleBtn.addEventListener("click", fetchPeople);
filmsBtn.addEventListener("click", fetchFilms);
speciesBtn.addEventListener("click", fetchSpecies);
