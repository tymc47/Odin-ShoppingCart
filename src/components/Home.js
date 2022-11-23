import Carousel from "react-material-ui-carousel";
import { Card, Grid, CardMedia, Button } from "@mui/material";
import { useEffect, useState } from "react";
import gameService from "../services/games";
import { Link } from "react-router-dom";

function DisplayCard({ game }) {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia
        component="img"
        height="600"
        image={require(`../assets/${game.cover}`)}
        alt={game.name}
        sx={{ objectFit: "contain" }}
      />
    </Card>
  );
}

const Home = () => {
  const [games, SetGames] = useState([]);

  useEffect(() => {
    const result = gameService.getRandomGames(5);
    SetGames(result);
  }, []);

  return (
    <>
      <Grid
        container
        component="main"
        sx={{
          height: "80vh",
          px: "10vw",
          backgroundColor: "#0f0e17",
          borderRadius: 0,
        }}
      >
        <Grid item xs={8}>
          <Carousel
            indicatorContainerProps={{ style: { display: "none" } }}
            navButtonsAlwaysInvisible={true}
            stopAutoPlayOnHover={false}
          >
            {games.map((item, i) => (
              <DisplayCard key={i} game={item} />
            ))}
          </Carousel>
        </Grid>
        <Grid item xs={4}>
          <Button
            sx={{
              width: 250,
              padding: 2,
              fontSize: 30,
              my: 30,
              backgroundColor: "#ff8906",
              color: "#fffffe",
              border: "#ff8906 solid",
              "&:hover": {
                backgroundColor: "0f0e17",
                color: "#fffffe",
              },
            }}
            to={`/shop`}
            component={Link}
          >
            Shop Now
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
