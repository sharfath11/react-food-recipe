import React, { useContext, useState } from "react";
import { StateContext, DispatchContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

function AddToCart({ cardItem }) {
  const cartPackage = useContext(StateContext);
  const navigate=useNavigate()
  let Dispatch = useContext(DispatchContext);

  let allCardItem = cartPackage.cartItem.map((item, index) => {
    return (
      <>
        <img src={item.imgSrc} alt="" />
        <span
          className="cart-cancel"
          onClick={() => {
            Dispatch({
              type: "remove-cart",
              
              playLoad: {
                imgSrc: item.imgSrc,
                title: item.title,
              },
            });
          }}
        >
          &#215;
        </span>
        <h6>{item.title}</h6>
      </>
    );
  });

  return (
    <div className="add-to-cart-wrapper">
      <div className="add-to-cart-item">
        <span>Your Cart</span>
        {allCardItem}
      </div>
    </div>
  );
}

export default AddToCart;

// import React, { useContext, useState } from "react";
// import { StateContext, DispatchContext } from "../Context/AppContext";

// function AddToCart({ cardItem }) {
//   const cartPackage = useContext(StateContext);

//   let Dispatch = useContext(DispatchContext);
//   let [removedItem,setRemovedItem]=useState(cartPackage.cartItem)
//   console.log("cartpakcge", removedItem);
//   function removeCartHandler (item) {
//     let removecart = removedItem.filter((items) => {
//       return item !== items
//     })
//     // .map((removed)=>{
//     //   return  removed
//     // })
//     console.log('removeed carts',removecart)
//     setRemovedItem(removecart)
//   }

//   let allCardItem = removedItem.map((item, index) => {
// if(item){
//   return (
//     <>
//       <img src={item.imgSrc} alt="" />
//       <span
//         className="cart-cancel"
//         onClick={() => {
//           removeCartHandler(item);
//           Dispatch({
//             type: "remove-cart",
//             playLoad:{
//               imgSrc:removedItem.imgSrc,
//               title:removedItem.title
//             }
//           });
//         }}
//       >
//         &#215;
//       </span>
//       <h6>{item.title}</h6>
//     </>
//   );
// }
//   });

//   return (
//     <div className="add-to-cart-wrapper">
//       <div className="add-to-cart-item">
//         <span>Your Cart</span>
//         {allCardItem}
//       </div>
//     </div>
//   );
// }

// export default AddToCart;
