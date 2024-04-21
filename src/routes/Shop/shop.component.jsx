import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../Contexts/categories.cotext";
import ProductCard from "../../components/product-card/Products-card.component";
import './shop.styles.scss'
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="product-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};
export default Shop;
