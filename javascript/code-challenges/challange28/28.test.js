const { yearSortFun, titleSortFun } = require("../challange28/chal28");

let moviesArr = [
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
let yeasSorted = [
  {
    title: "Secrets of the Abyss",
    year: 2004,
    genres: ["Mystery", "Thriller", "Adventure"],
  },
  {
    title: "Whimsical Wonders",
    year: 2006,
    genres: ["Comedy", "Fantasy", "Family"],
  },
  {
    title: "Space Chronicles: Rise of Infinity",
    year: 2007,
    genres: ["Action", "Science Fiction", "Adventure"],
  },
  {
    title: "Time Benders: Chrono Quest",
    year: 2021,
    genres: ["Science Fiction", "Adventure"],
  },
  {
    title: "The Enchanted Forest",
    year: 2022,
    genres: ["Fantasy", "Adventure", "Family"],
  },
  {
    title: "Galactic Explorers",
    year: 2023,
    genres: ["Science Fiction", "Adventure"],
  },
  {
    title: "Robo Friends",
    year: 2023,
    genres: ["Animation", "Comedy", "Family"],
  },
];

let titleSorted = [
  {
    title: "Enchanted Forest",
    year: 2022,
    genres: ["Fantasy", "Adventure", "Family"],
  },
  {
    title: "Galactic Explorers",
    year: 2023,
    genres: ["Science Fiction", "Adventure"],
  },
  {
    title: "Robo Friends",
    year: 2023,
    genres: ["Animation", "Comedy", "Family"],
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
    title: "Time Benders: Chrono Quest",
    year: 2021,
    genres: ["Science Fiction", "Adventure"],
  },
  {
    title: "Whimsical Wonders",
    year: 2006,
    genres: ["Comedy", "Fantasy", "Family"],
  },
];

describe("Sorting Comparisons", () => {
  it("sorted array by most recent year first", () => {
    expect(yearSortFun(moviesArr)).toEqual(yeasSorted);
  });

  it("sorted array by alphabetical by title", () => {
    expect(titleSortFun(moviesArr)).toEqual(titleSorted);
  });
});
