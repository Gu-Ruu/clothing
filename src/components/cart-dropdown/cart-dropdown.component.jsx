import Button from "../button/Button.component";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Contexts/cart.context";
import {
  EmptyMessage,
  CartDropDownContainer,
  CartItems,
} from "./cart-dropdown.styles.jsx";
import CartItem from "../cart-items/cart-items.component";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHnadler = () => navigate("/checkout");
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartitem) => (
            <CartItem key={cartitem.id} cartItem={cartitem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHnadler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};
export default CartDropdown;
