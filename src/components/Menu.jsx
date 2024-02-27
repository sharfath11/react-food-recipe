import React from "react";
import Hero from "./Hero";
import { Route, Routes, } from "react-router-dom";
import CheckOut from "./CheckOut";
import MainRenderPage from "./MainRenderPage";
import { AppContext } from "../Context/AppContext";

function Menu() {
  return (
    <div>
      <AppContext>
        
      <Hero />
      <Routes>
        <Route index Component={MainRenderPage} path='/'>
        </Route>
        <Route Component={CheckOut} path="checkout"/>
      </Routes>
    
      </AppContext>
      
    </div>
  );
}

export default Menu;
