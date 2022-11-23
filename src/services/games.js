import gamesData from "../data.json";

const games = gamesData;

const getAll = () => {
  return games;
};

const getRandomGames = (number) => {
  const shuffledGames = [...games].sort(() => 0.5 - Math.random());

  return shuffledGames.slice(0, number);
};

const getOne = (gameId) => {
  return games.find((x) => (x.id = gameId));
};

const gameService = {
  getAll,
  getRandomGames,
  getOne,
};
export default gameService;
