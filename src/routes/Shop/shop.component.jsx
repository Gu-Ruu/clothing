import { Routes, Route } from "react-router";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utility/Firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categories/category.action";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import "./shop.styles.scss";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const cetegoriesArray = await getCategoriesAndDocuments();
      console.log(cetegoriesArray);
      dispatch(setCategories(cetegoriesArray));
    };
    getCategoriesMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
