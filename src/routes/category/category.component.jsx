import { Fragment, useContext, useEffect, useState } from "react";
import "./category.styles.scss";
import { useParams } from "react-router";
import { CategoriesContext } from "../../Contexts/categories.cotext";
import ProductCard from "../../components/product-card/Products-card.component";
useContext;
const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  console.log(products);
  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
