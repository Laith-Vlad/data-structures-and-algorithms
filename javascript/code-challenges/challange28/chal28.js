let movieArr = [
  {
    title: "Galactic Explorers",
    year: 2023,
    genres: ["Science Fiction", "Adventure"],
  },
  {
    title: "The Enchanted Forest",
    year: 2022,
    genres: ["Fantasy", "Adventure", "Family"],
  },
  {
    title: "Secrets of the Abyss",
    year: 2004,
    genres: ["Mystery", "Thriller", "Adventure"],
  },
  {
    title: "Space Chronicles: Rise of Infinity",
    year: 2007,
    genres: ["Action", "Science Fiction", "Adventure"],
  },
  {
    title: "Robo Friends",
    year: 2023,
    genres: ["Animation", "Comedy", "Family"],
  },
  {
    title: "Whimsical Wonders",
    year: 2006,
    genres: ["Comedy", "Fantasy", "Family"],
  },
  {
    title: "Time Benders: Chrono Quest",
    year: 2021,
    genres: ["Science Fiction", "Adventure"],
  },
];

function yearSortFun(movieArr) {
  movieArr.sort(function (a, b) {
    if (a.year === b.year) return 0;
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
  });
  return movieArr;
}
console.log(yearSortFun(movieArr));

function titleSortFun(movieArr) {
  let result = movieArr.map((e) => ({
    ...e,
    title: e.title.replace(/^(A|An|The)\s+/i, ""),
  }));
  let finalSorted = result.sort((a, b) => a.title.localeCompare(b.title));
  return finalSorted;
}
console.log(titleSortFun(movieArr));

module.exports = {
  yearSortFun,
  titleSortFun,
};


