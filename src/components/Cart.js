import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  ButtonGroup,
  TableContainer,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { priceFormatter } from "../utils";
import { styled } from "@mui/material/styles";
import { ButtonForCart } from "./GameCard";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0f0e17",
    color: "#fffffe",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const Cart = ({ cart, setCart }) => {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.game.price * item.quantity,
    0
  );
  const handleDecrease = (item) => {
    if (item.quantity - 1 <= 0) return handleRemove(item);
    const newItem = {
      ...item,
      quantity: item.quantity - 1 > 0 ? item.quantity - 1 : 0,
    };
    const newCart = cart.map((x) => (x.itemId === item.itemId ? newItem : x));
    setCart(newCart);
  };

  const handleIncrease = (item) => {
    const newItem = {
      ...item,
      quantity: item.quantity + 1,
    };
    const newCart = cart.map((x) => (x.itemId === item.itemId ? newItem : x));
    setCart(newCart);
  };

  const handleRemove = (item) => {
    const confirm = window.confirm(
      `Remove ${item.quantity} copies of ${item.game.name} from the cart?`
    );

    if (!confirm) return;

    const newCart = cart.filter((x) => x.itemId !== item.itemId);
    setCart(newCart);
  };

  return (
    <TableContainer sx={{ px: "10vw", mt: 2 }}>
      <Table sx={{ width: "80vw" }}>
        <colgroup>
          <col style={{ width: "55%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "15%" }} />
        </colgroup>
        <TableHead>
          <TableRow>
            <StyledTableCell>Item</StyledTableCell>
            <StyledTableCell>Price</StyledTableCell>
            <StyledTableCell>Qty</StyledTableCell>
            <StyledTableCell>Subtotal</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item) => (
            <TableRow key={item.itemId}>
              <TableCell>{item.game.name}</TableCell>
              <TableCell>{priceFormatter(item.game.price)}</TableCell>
              <TableCell>
                <ButtonGroup
                  color="inherit"
                  sx={{ mb: "0.5rem" }}
                  variant="contained"
                >
                  <Button onClick={() => handleDecrease(item)}>-</Button>
                  <Button>{item.quantity}</Button>
                  <Button onClick={() => handleIncrease(item)}>+</Button>
                </ButtonGroup>
                <Button
                  sx={{ color: "#ff8906" }}
                  onClick={() => {
                    handleRemove(item);
                  }}
                >
                  x
                </Button>
              </TableCell>
              <TableCell>
                {priceFormatter(item.game.price * item.quantity)}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell>{priceFormatter(totalPrice)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} />
            <TableCell>
              <ButtonForCart
                href="https://youtu.be/dQw4w9WgXcQ"
                target="_blank"
              >
                Checkout
              </ButtonForCart>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} />
            <TableCell>
              <Button
                sx={{
                  width: "9rem",
                  border: "#e53170 solid",
                  color: "#e53170",
                  "&:hover": {
                    backgroundColor: "#0f0e17",
                    color: "#e53170",
                  },
                }}
                to="/shop"
                component={Link}
              >
                Back To Shop
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Cart;
