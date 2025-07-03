const movies = [
  {
    title: "Sacred Games",
    platform: "Netflix",
    year: 2018,
    image: "https://placehold.co/200x300?text=Sacred+Games"
  },
  {
    title: "Mirzapur",
    platform: "Amazon Prime",
    year: 2019,
    image: "https://placehold.co/200x300?text=Mirzapur"
  },
  {
    title: "Scam 1992",
    platform: "SonyLIV",
    year: 2020,
    image: "https://placehold.co/200x300?text=Scam+1992"
  },
  // Add 150+ movies like this here or tell me to do it
];

const container = document.getElementById('movies-container');

movies.forEach(movie => {
  const card = document.createElement('div');
  card.className = 'movie-card';
  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}" />
    <div class="info">
      <div class="title">${movie.title}</div>
      <div class="details">${movie.platform} | ${movie.year}</div>
    </div>
  `;
  container.appendChild(card);
});
