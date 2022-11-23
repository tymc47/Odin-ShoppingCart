import {
  Box,
  Grid,
  Typography,
  CardMedia,
  Button,
  ButtonGroup,
} from "@mui/material";
import { priceFormatter } from "../utils";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { ButtonForCart } from "./GameCard";
import { Link } from "react-router-dom";

const useCounter = () => {
  const [value, setValue] = useState(1);
  const increase = () => setValue(value + 1);
  const decrease = () => setValue(value - 1 >= 1 ? value - 1 : 1);

  return {
    value,
    increase,
    decrease,
  };
};

const ButtonForQty = styled(Button)(({ theme }) => ({
  width: "3rem",
  color: "#0f0e17",
  backgroundColor: "#fffffe",
  "&:disabled": {
    color: "#0f0e17",
    backgroundColor: "#fffffe",
  },
  "&:hover": {
    color: "#fffffe",
    backgroundColor: "#ff8906",
  },
}));

const GamePage = ({ game, addToCart }) => {
  const counter = useCounter();
  if (!game) return <div>404 Page Not Found</div>;
  const backgroundImg = require(`../assets/${game.cover}`);

  const handleAddToCart = () => {
    addToCart(game, counter.value);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#0f0e17",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        sx={{
          backgroundColor: "#fffffe",
          height: "70vh",
          width: "50vw",
          borderRadius: 2,
        }}
        alignItems="center"
      >
        <Grid item xs={7} sx={{ padding: 2, height: "100%" }}>
          <CardMedia
            component="img"
            image={backgroundImg}
            alt={game.name}
            sx={{ height: "100%", objectFit: "contain" }}
          />
        </Grid>

        <Grid
          xs={5}
          item
          sx={{
            height: "100%",
          }}
        >
          <Grid
            container
            sx={{ height: "100%", p: 2 }}
            direction="column"
            justifyContent="space-between"
          >
            <Grid item>
              <Typography variant="h6" sx={{ my: 4, color: "#e53170" }}>
                {game.name}
              </Typography>
              <Typography variant="body1">{game.description}</Typography>
              <Typography variant="subtitle1" sx={{ mt: 3, flex: "auto" }}>
                {priceFormatter(game.price)}
              </Typography>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ButtonGroup
                  color="inherit"
                  sx={{ mb: "0.5rem", width: "9rem" }}
                  variant="contained"
                >
                  <ButtonForQty onClick={counter.decrease}>-</ButtonForQty>
                  <ButtonForQty disabled>{counter.value}</ButtonForQty>
                  <ButtonForQty onClick={counter.increase}>+</ButtonForQty>
                </ButtonGroup>
                <ButtonForCart sx={{ mb: 3 }} onClick={handleAddToCart}>
                  Add to Cart
                </ButtonForCart>
                <Button sx={{ color: "#a7a9be" }} to="/shop" component={Link}>
                  back
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GamePage;
