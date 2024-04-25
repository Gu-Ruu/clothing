import { CartContext } from "../../Contexts/cart.context";
import {
  CartIconContainer,
  ShopppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";
import { useContext } from "react";

const Carticon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShopppingIcon className="shopping-bag" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default Carticon;
