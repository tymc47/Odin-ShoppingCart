import {
  Card,
  Typography,
  CardMedia,
  Box,
  Button,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { priceFormatter } from "../utils";
import { Link } from "react-router-dom";

export const ButtonForCart = styled(Button)(({ theme }) => ({
  width: "9rem",
  backgroundColor: "#ff8906",
  color: "#fffffe",
  border: "#ff8906 solid",
  "&:hover": {
    backgroundColor: "#0f0e17",
    color: "#fffffe",
  },
}));

const GameCard = ({ game, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(game, 1);
  };

  return (
    <Card
      sx={{
        width: 400,
        display: "flex",
        backgroundColor: "#0f0e17",
        color: "#fffffe",
      }}
    >
      <CardActionArea to={`/games/${game.id}`} component={Link}>
        <CardMedia
          component="img"
          image={require(`../assets/${game.cover}`)}
          alt={game.name}
          sx={{ width: "225px", objectFit: "contain" }}
        />
      </CardActionArea>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 175,
          py: 1,
        }}
      >
        <CardActionArea
          sx={{
            flex: "1",
            width: 175,
            margin: 0,
            padding: 0,
          }}
          to={`/games/${game.id}`}
          component={Link}
        >
          <CardContent>
            <Typography component="div" variant="subtitle1" sx={{ mb: "5px" }}>
              {game.name}
            </Typography>
            <Typography component="div" variant="text-secondary">
              {priceFormatter(game.price)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <ButtonForCart onClick={handleAddToCart}>Add to Cart</ButtonForCart>
      </Box>
    </Card>
  );
};

export default GameCard;
