const API_KEY = "27782b47";
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const moviesContainer = document.getElementById("movies-container");

async function searchMovies(query) {
  try {
    const response = await fetch(`${API_URL}&s=${query}`);
    const data = await response.json();

    if (data.Response === "True") {
      displayMovies(data.Search);
    } else {
      moviesContainer.innerHTML = `<p>No result found.</p>`;
    }
  } catch (error) {
    console.error("Error fetching movies:", error);

    moviesContainer.innerHTML = `<p>Error fetching movies. Please try again.</p>`;
  }
}

function displayMovies(movies) {
  moviesContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";
    movieCard.innerHTML = `
      <img src="${
        movie.Poster !== "N/A" ? movie.Poster : "assets/no-image.png"
      }" alt="${movie.Title}" />
      <h3>${movie.Title}</h3>
      <button class="favorite-btn">Add to Favorites</button>
    `;

    movieCard.addEventListener("click", (e) => {
      if (e.target.classList.contains("favorite-btn")) {
        // 즐겨찾기
      } else {
        window.location.href = `./details.html?id=${movie.imdbID}`;
      }
      console.log(e.target);
    });

    moviesContainer.appendChild(movieCard);
  });
}

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();

  if (query) {
    searchMovies(query);
  }
});
