const newsList = document.getElementById("news-list");

const API_KEY = "8884fac1331b4edd9c435b2506450aab";
const ENDPOINT = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

async function fetchNews() {
  try {
    const response = await fetch(ENDPOINT);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    displayNews(data.articles);
  } catch (error) {
    console.error("Error fetching news:", error);
  }
}

function displayNews(articles) {
  newsList.innerHTML = "";
  articles.forEach((v) => {
    console.log(v);
    const newsItem = document.createElement("section");
    newsItem.innerHTML = `
        <h2>${v.title}</h2>
        <p>${v.description || "No description available."}</p>
        <a href="${v.url}" target="_blank">Read more</a>
    `;
    newsList.appendChild(newsItem);
  });
}

fetchNews();
