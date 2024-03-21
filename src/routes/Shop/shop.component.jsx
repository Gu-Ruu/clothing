import { useContext } from "react";
import { ProductsContext } from "../../Contexts/Products.items";
import "./shop.styles.scss"
import ProductCard from "../../components/product-card/Products-card.component";
const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Shop;
