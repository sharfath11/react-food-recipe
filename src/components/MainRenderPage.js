import React from "react";
import { AllMenu } from "./AllMenuContext";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import AddToCart from "./AddToCart";
import Footer from "./Footer";

function MainRenderPage() {
  return (
    <div>
      {/* <AllMenu> */}
        <AddToCart/>
        <SpecialDishes />
        <FilteredDishes />
        <Footer/>
      {/* </AllMenu> */}
    </div>
  );
}

export default MainRenderPage;
