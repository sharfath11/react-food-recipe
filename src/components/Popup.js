import React, { useContext } from "react";
import { DispatchContext } from "../Context/AppContext";
function Popup(props) {
  const Dispatch=useContext(DispatchContext)
  console.log('props item',props.itemDeteils);
  return (
    <div className="popup">
      <div className="popup-content flex flex-wrap">
        <div cLass="popup-content-data">
          <div cLassName="popup-header">
            <img src={props.itemDeteils.strMealThumb} className="popup-img" />
            <h5 cLassName="popup-header-category" style={{ color: "#ffb902" }}>
              {props.itemDeteils.strCategory}
            </h5>
          </div>
          <h2 className="h2" style={{ marginTop: "" }}>
            {props.itemDeteils.strMeal}
          </h2>
          <p>{props.itemDeteils.strInstructions}</p>
          <ul className="dish-ingredients flex">
            <li>{props.itemDeteils.strIngredient1}</li>
            <li>{props.itemDeteils.strIngredient2}</li>
            <li>{props.itemDeteils.strIngredient3}</li>
            <li>{props.itemDeteils.strIngredient4}</li>
          </ul>
        </div>
        <div>
      {!props.id&&  <button
          
          onClick={()=>{props.AddToCartHandler();Dispatch({
            type:'add_to_cart',
            playLoad:{
              imgSrc:props.itemDeteils.strMealThumb,
              title:props.itemDeteils.strMeal
            }

          })}}
         
       >
          Order now
        </button>}
        </div>
        <h2 className="popup-close" onClick={props.ClosePopup}>
          Close
        </h2>
      </div>
    </div>
  );
}

export default Popup;
