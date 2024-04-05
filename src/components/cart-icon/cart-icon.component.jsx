import { ReactComponent as ShoppingBag } from "../../Assets/shopping-bag.svg";
import { CartContext } from "../../Contexts/cart.context";
import "./cart-icon.styles.scss";
import { useContext } from "react";

const Carticon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingBag className="shopping-bag" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default Carticon;
