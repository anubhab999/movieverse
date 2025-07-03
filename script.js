const movies = [
  { title: "Sacred Games", platform: "Netflix", year: 2018 },
  { title: "Mirzapur", platform: "Amazon Prime", year: 2019 },
  { title: "Scam 1992", platform: "SonyLIV", year: 2020 },
  { title: "Delhi Crime", platform: "Netflix", year: 2019 },
  { title: "The Family Man", platform: "Amazon Prime", year: 2019 },
  { title: "Asur", platform: "JioCinema", year: 2020 },
  { title: "Paatal Lok", platform: "Amazon Prime", year: 2020 },
  { title: "Kota Factory", platform: "Netflix", year: 2019 },
  { title: "TVF Pitchers", platform: "TVF", year: 2015 },
  { title: "Hostel Daze", platform: "Amazon Prime", year: 2019 },
  { title: "Lakhon Mein Ek", platform: "Amazon Prime", year: 2017 },
  { title: "Breathe", platform: "Amazon Prime", year: 2018 },
  { title: "Ray", platform: "Netflix", year: 2021 },
  { title: "Jamtara", platform: "Netflix", year: 2020 },
  { title: "Made in Heaven", platform: "Amazon Prime", year: 2019 },
  { title: "Betaal", platform: "Netflix", year: 2020 },
  { title: "Bard of Blood", platform: "Netflix", year: 2019 },
  { title: "Taj Mahal 1989", platform: "Netflix", year: 2020 },
  { title: "Inside Edge", platform: "Amazon Prime", year: 2017 },
  // 👇 130+ aur bhi add karna ho to bata
];

const container = document.getElementById("movies-container");

movies.forEach(movie => {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.innerHTML = `
    <div class="title">${movie.title}</div>
    <div class="details">${movie.platform} | ${movie.year}</div>
  `;
  container.appendChild(card);
});
