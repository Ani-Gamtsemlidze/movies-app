export const movies = document.getElementById("movies_list");

export const moviesCard = function (movie) {
  const id = movie.id;
  const html = `
        <section class="movie">
          <div class="image_box">
          <a class="more"  href= "detailedMovies.html?movieId=${id}">View More</a>
            <img class="movie__img" src="${movie.image}" />
          </div>
          <div class="movie__data">
            <div class="title">
              <h2 class="movie__name">${movie.title}</h2>
            </div>
            <div class="movie_important_data">
              <span class="movie__year">${movie.year}</span>
              <span class="movie__genre">${movie.genre}</span>
            </div>
            <div class="star">
              <img class="imdb_img" src="./fetchAndRender/images/icons8-imdb-48.png"/>
              <span class="movie__rating">${movie.rating}</span>
            </div>
          </div>
        </section>
      `;
  movies.insertAdjacentHTML("beforeend", html);
};
// export const viewMore = document.getElementsByClassName("more");
export default moviesCard;
