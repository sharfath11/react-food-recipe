import React, { useContext, useState } from "react";
import { StateContext, DispatchContext } from "../Context/AppContext";
import { AllMenuContext } from "./AllMenuContext";
import Popup from "./Popup";
import { useNavigate} from "react-router-dom";
function CheckOut() {
  const navigate=useNavigate()
  const cartItems = useContext(StateContext);
  const cartNumber = cartItems.cartItem.length;
  const [item, setItem] = useState();
  const allMenu = useContext(AllMenuContext);
  console.log(allMenu);
  const checkoutItem = useContext(StateContext);
  function ClosePopup() {
    setItem();
  }
  function ChekoutPopUpHandler(item) {
    const popUpItem = allMenu
      .filter((items) => {
        return items.strMeal === item.title;
      })
      .map((data) => {
        return setItem(data);
      });
  }
  const allCheckout = checkoutItem.cartItem.map((item, index) => {
    return (
      <li
        className="flex flex-wrap gap-25"
        onClick={() => {
          ChekoutPopUpHandler(item);
        }}
      >
        <a>
          <img src={item.imgSrc} className="br-10" alt="" />
          <h5>{item.title}</h5>
        </a>
      </li>
    );
  });
  return (
    <div>
      {cartNumber !== 0 ? (
        <div className="filterd-dishes-result ">
          {item && (
            <Popup itemDeteils={item} ClosePopup={ClosePopup} id={true} />
          )}
          <h2 className="flex checkoutHeading">YOUR ITEM IS ON THE WAY</h2>
          <ul className="flex flex-wrap gap-25 checkout">{allCheckout}</ul>
        </div>
      ) : (
        <div className="flex flex-wrap noItem">
          <h2 className="flex checkoutHeading ">YOUR CART IS EMPTY</h2>
          <br />
          <button onClick={()=>{navigate('/')}}>
             ORDER NOW
          </button>
        </div>
      )}
    </div>
  );
}

export default CheckOut;
