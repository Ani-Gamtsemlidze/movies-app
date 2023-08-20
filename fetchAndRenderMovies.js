import filterMovies from "./search.js";
import moviesCard from "./moviesCard.js";
// import detailedMovies from "./detailed.js";
import { movies } from "./moviesCard.js";

export const url = `https://imdb-top-100-movies.p.rapidapi.com/`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4de3f6e26cmshae8e5bc1bf087d9p161b30jsn302541f9055a",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

(async function fetchAndRenderMovies() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const searchForm = document.querySelector(".search_container");
    const searchField = document.getElementById("search_input");

    // Render the initial movies
    const resultMovie = result.splice(0, 20);
    resultMovie.forEach((movie) => {
      moviesCard(movie);
    });

    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();
      movies.innerHTML = "";
      const filteredMovies = filterMovies(resultMovie, searchField.value);
      filteredMovies.forEach((movie) => {
        moviesCard(movie);
      });
    });

    searchField.addEventListener("input", (event) => {
      event.preventDefault();
      event.stopPropagation();
      movies.innerHTML = "";
      const filteredMovies = filterMovies(resultMovie, searchField.value);
      if (filteredMovies.length === 0) {
        movies.innerHTML =
          '<p style="color: #fff;font-size: 30px; margin: 8px 0 34px" > No matching content </p>';
      } else {
        filteredMovies.forEach((movie) => {
          moviesCard(movie);
        });
      }
    });

    const sortForm = document.querySelector("#sorting");

    sortForm.addEventListener("change", () => {
      const sortBy = sortForm.value;
      if (sortBy === "release ascending") {
        // Sort movies by ascending year
        const sortedMovies = resultMovie.sort((a, b) => a.year - b.year);
        movies.innerHTML = "";
        sortedMovies.forEach((movie) => {
          moviesCard(movie);
        });
      } else if (sortBy === "release descending") {
        // Sort movies by descending year
        const sortedMovies = resultMovie.sort((a, b) => b.year - a.year);
        movies.innerHTML = "";
        sortedMovies.forEach((movie) => {
          moviesCard(movie);
        });
      } else if (sortBy === "rating ascending") {
        // Sort movies by descending year
        const sortedMovies = resultMovie.sort((a, b) => a.rating - b.rating);
        movies.innerHTML = "";
        sortedMovies.forEach((movie) => {
          moviesCard(movie);
        });
      } else if (sortBy === "rating descending") {
        // Sort movies by descending year
        const sortedMovies = resultMovie.sort((a, b) => b.rating - a.rating);
        movies.innerHTML = "";
        sortedMovies.forEach((movie) => {
          moviesCard(movie);
        });
      }
    });

    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();
