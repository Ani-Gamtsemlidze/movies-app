const detailedMovies = async function (id) {
  const url = `https://imdb-top-100-movies.p.rapidapi.com/${id}`; // Use the correct endpoint URL
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
          <p>${result.title}</p>
          <p>${result.description}</p>`;
    document.getElementById("detailedMovie").innerHTML = html;
    console.log(result.title);
  } catch (error) {
    console.error(error);
  }
};

export default detailedMovies;
