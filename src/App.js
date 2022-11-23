import { Routes, Route, useMatch } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import GamePage from "./components/GamePage";
import gameService from "./services/games";

const App = () => {
  const [cart, setCart] = useState([]);
  const [games, setGames] = useState([]);
  const match = useMatch("/games/:id");
  const game = match
    ? games.find((game) => game.id === parseInt(match.params.id))
    : null;

  useEffect(() => {
    setGames(gameService.getAll().sort(() => 0.5 - Math.random()));
  }, []);

  const setShoppingCart = (cart) => setCart(cart);

  console.log(games);

  const addToCart = (game, quantity) => {
    const itemId = Date.now();
    setCart(
      cart.concat({
        itemId,
        game,
        quantity,
      })
    );
  };

  return (
    <div>
      <NavBar cartCount={cart.length} />

      <Routes>
        <Route
          path="/games/:id"
          element={<GamePage addToCart={addToCart} game={game} />}
        />
        <Route
          path="/shop"
          element={<Shop addToCart={addToCart} games={games} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setShoppingCart} />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
