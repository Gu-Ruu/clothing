import { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";
import "./products.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.component";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  // console.log(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className={name}></span>
        <span className={price}></span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </div>
  );
};
export default ProductCard;
