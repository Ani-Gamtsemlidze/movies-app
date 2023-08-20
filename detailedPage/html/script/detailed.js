document.addEventListener("DOMContentLoaded", () => {
  const detailedMovie = document.getElementById("detailedMovie");

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
      const html = `
      <section class="detailed_container">
      <div class= "detailed_image">
        <img class="image" src="${result.image}" />
      </div>
      <div class="data_info">
      <div class = "data_title">

        <h2>${result.title}<span> (${result.year})</span></h2>
        <a class="trailer" href = "${result.trailer}">watch trailer </a>
        </div>
      <ul class="data_genre">
      <li> ${result.genre} </li>
      <li> ${result.rating} </li>

      </ul>
      <div class="data_description">
        <p>${result.description}</p>
      </div>
      <div class="data_direct">

      <div class="data_director">
        <p class="director" > ${result.director} </p>
        <span> director </span>
        </div>
        <div class="data_writers">
        
        <p class="writer"> ${result.writers} </p>
        <span> writer </span>

        </div>
      </div>

      </div>
      </div>
      </section>
      <a  class = "_back"href="movies_content.html"> Go Back </a>
      
      `;

      detailedMovie.innerHTML = html;
      console.log(result.description);
    } catch (error) {
      console.error(error);
    }
  };

  detailedMovies(); // Call the function when the DOM is loaded
});
{
  /* <iframe width="420" height="315"
src="${result.trailer}">
</iframe> */
}
