const detailedMovie = document.getElementById("detailedMovie");

const moviesDetails = (movie) => {
  const html = `
    <section class="detailed_container">
    <div class= "detailed_image">
      <img class="image" src="${movie.image}" />
    </div>
    <div class="data_info">
    <div class = "data_title">
    
      <h2>${movie.title}<span> (${movie.year})</span></h2>
      <a class="trailer" href = "${movie.trailer}">watch trailer </a>
      </div>
    <ul class="data_genre">
    <li> ${movie.genre} </li>
    <li> ${movie.rating} </li>
    
    </ul>
    <div class="data_description">
      <p>${movie.description}</p>
    </div>
    <div class="data_direct">
    
    <div class="data_director">
      <p class="director" > ${movie.director} </p>
      <span> director </span>
      </div>
      <div class="data_writers">
      
      <p class="writer"> ${movie.writers} </p>
      <span> writer </span>
    
      </div>
    </div>
    
    </div>
    </div>
    </section>
    <a  class = "_back"href="movies_content.html"> Go Back </a>
    
    `;
  detailedMovie.innerHTML = html;
};

export default moviesDetails;
