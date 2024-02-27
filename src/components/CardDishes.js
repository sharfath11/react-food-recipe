import React from "react";

function CardDishes(props) {
//  console.log('recive',props.menuItem.strMeal);
 let item=props.menuItem
  return (
    
    <li onClick={()=>{props.SowPopup(item)}}>
      <a >
        <img src={item.strMealThumb} className="br-10" alt="" />
      <h5>{item.strMeal}</h5>
     
      </a>
    </li>
  );
}

export default CardDishes;

