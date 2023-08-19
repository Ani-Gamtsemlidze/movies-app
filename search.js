const filterMovies = (movies, title) =>
  movies.filter((movie) =>
    movie.title.toLowerCase().includes(title.toLowerCase())
  );

export default filterMovies;
