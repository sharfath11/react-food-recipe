import axios from "axios";
import React, { useEffect, useState,createContext } from "react";
import Loader from "./Loader";
export const AllMenuContext = createContext();
export const AllMenu=(props)=> {
  let [menu, setMenu] = useState([]);
  let [Loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL = " https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    axios.get(API_URL).then(({ data }) => {
      setMenu(data.meals);
      setLoading(false);
      // console.log(data.meals);
    });
  }, []);
  return (
    <AllMenuContext.Provider value={menu}>
      {!Loading ? props.children : <Loader />}
    </AllMenuContext.Provider>
  );
}
