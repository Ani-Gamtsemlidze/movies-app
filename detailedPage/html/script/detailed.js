import moviesDetails from "./moviesDetails.js";
document.addEventListener("DOMContentLoaded", () => {
  const detailedMovies = async function () {
    const searchParams = new URLSearchParams(window.location.search);
    const newUrl = searchParams.get("movieId");
    console.log(newUrl);

    const url = `https://imdb-top-100-movies.p.rapidapi.com/${newUrl}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4de3f6e26cmshae8e5bc1bf087d9p161b30jsn302541f9055a",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      moviesDetails(result);
    } catch (error) {
      console.error(error);
    }
  };

  detailedMovies();
});
