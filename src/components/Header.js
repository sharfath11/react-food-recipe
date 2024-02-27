import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../Context/AppContext";

function Header() {
  
  const cartItems=useContext(StateContext)
  const cartNumber=cartItems.cartItem.length
  console.log('header',cartItems.cartItem.length);
  return (
    <header className="flex  flex-between header" style={{position:' -webkit-sticky'}}>
      <Link to={'/'}>
        
        <img
          src="https://i.pinimg.com/474x/05/64/db/0564db618b8e778534e882cfda48dd2f.jpg"
          alt=""
          style={{ height: "40px" }}
        />
      </Link>
      <nav>
        <ul className="flex">
          <li>
            <Link to={"/"}>
              <h5>HOME</h5>
            </Link>
          </li>
          <li>
            <Link to={"/checkout"}>
              <h5 >CHECK OUT {cartItems.cartItem.length !==0 ? (
                <span style={{color:"yellow"}}>{cartNumber}</span>
              ):null} </h5>
              
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
