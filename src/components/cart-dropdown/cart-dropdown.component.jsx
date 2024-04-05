import Button from "../button/Button.component";
import { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-items/cart-items.component";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartitem) => (
          <CartItem key={cartitem} cartItem={cartitem} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};
export default CartDropdown;
