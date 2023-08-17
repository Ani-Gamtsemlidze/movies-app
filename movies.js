const renderCountry = function (movie, className = "") {
  const html = `
      <section class="movie ${className}">
      <div class= "image_box">
        <img class="movie__img" src="${movie.image}" />
        </div >
        <div class="movie__data">
        <div class="title">

        <h2 class="movie__name">${movie.title}</h2>
        </div>

        <div class= "movie_important_data"

            <span class="movie__year">${movie.year}</span>
            <span class="movie__genre">${movie.genre}</span>
        </div>
        <div class="star">
        <img class="imdb_img" src= "icons8-imdb-48.png"/>
        
        <span class="movie__rating">${movie.rating}</span>
        </div>
        </div>
        </div>
    </section> `;
  movies.insertAdjacentHTML("beforeend", html);
};

const url = `https://imdb-top-100-movies.p.rapidapi.com/`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4de3f6e26cmshae8e5bc1bf087d9p161b30jsn302541f9055a",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

const movies = document.getElementById("movies_list");
try {
  const response = await fetch(url, options);
  const result = await response.json();
  //   moviesListDiv.innerHTML = result;
  for (let i = 0; i < 20; i++) {
    const movie = result[i];
    renderCountry(movie);
  }
  console.log(result);
} catch (error) {
  console.error(error);
}

// const moviesListDiv = document.getElementById("moviesList");

// const ulrlink = "https://imdb-top-100-movies.p.rapidapi.com/top17";
// const movies_data = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "4de3f6e26cmshae8e5bc1bf087d9p161b30jsn302541f9055a",
//     "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
//   },
// };

// try {
//   const response = await fetch(ulrlink, movies_data);
//   const result = await response.json();
//   console.log(result.image);
//   //   result.forEach((data) => {
//   //     console.log(data.trailer);
//   //   });
// } catch (error) {
//   console.error(error);
// }
