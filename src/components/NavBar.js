import { AppBar, Toolbar, Box, Button, Typography, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    color: "#fffffe",
    backgroundColor: "#ff8906",
  },
});

const NavBar = ({ cartCount }) => {
  return (
    <AppBar
      position="static"
      style={{
        background: "#0f0e17",
        color: "#fffffe",
        paddingLeft: "40px",
        paddingRight: "60px",
      }}
    >
      <Toolbar style={{ height: "20vh" }}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex", flexGrow: 1 },
            fontFamily: "Michroma",
            fontWeight: 700,
            fontSize: 30,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Game Shop
        </Typography>
        <Box>
          <Button size="large" color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button size="large" color="inherit" component={Link} to="/shop">
            Shop
          </Button>
          <StyledBadge badgeContent={cartCount} color="primary">
            <Button size="large" color="inherit" component={Link} to="/cart">
              Cart
            </Button>
          </StyledBadge>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
