import {
  CartIconContainer,
  ShopppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectCartIsOpen,
} from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";
const Carticon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectCartIsOpen);
  
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShopppingIcon className="shopping-bag" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default Carticon;
