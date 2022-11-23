import { Grid } from "@mui/material";
import GameCard from "./GameCard";

const Shop = ({ addToCart, games }) => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        sx={{ pt: "2rem" }}
      >
        {games.map((game) => (
          <Grid item xs="auto" key={game.id}>
            <GameCard game={game} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Shop;
