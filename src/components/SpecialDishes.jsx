import React, { useContext, useState } from 'react'
import CardDishes from './CardDishes'
import Popup from './Popup'
import { AllMenuContext } from './AllMenuContext';
import AddToCart from './AddToCart';



function SpecialDishes(props) {
  let [cardItem,setCardItem]=useState([{}]);
  let [startAddToCart,setStartAddToCart]=useState(false)
  let [itemDeteils,setItemDetials]=useState()
  const allMenu=useContext(AllMenuContext)
  
  
  function SowPopup(itemDeteil){
 
    setItemDetials(itemDeteil)
    setPopup(true)
  }
  function ClosePopup(){
    setPopup(false)
  }
  function AddToCartHandler(imgSrc,ItemNames){
    console.log('hello');
    setStartAddToCart(true)
    //  setCardItem([
    //   ...cardItem,
    //   {
    //     'imgSrc':imgSrc,
    //     "title":ItemNames
    //   }
    
    //  ])
     setPopup(false)
  }
 
  let maxSpecialDishes=8
  let [popUp,setPopup]=useState(false)
  let SpecialMenus=allMenu.map((menuItem,index)=>{
    if(index<maxSpecialDishes){
      return(
       <CardDishes menuItem={menuItem}
       SowPopup={SowPopup}
       />
     )
    }
   
  })
  
  return (
   <section className="special-dishes">
   
    {popUp && <Popup ClosePopup={ClosePopup} itemDeteils={itemDeteils} AddToCartHandler={AddToCartHandler}/>}
    <div className="container">
     {startAddToCart&&<AddToCart cardItem={cardItem} />}
        <div className="special-dishes-content text-center">
            <h2>Our Special Dishes</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora illum aliquid illo totam id dolores consequatur, accusamus odio quisquam aperiam?</p>            
        </div>
        <div className="special-dishes-list">
          <ul className="flex flex-wrap gap-25">
          {SpecialMenus}
          </ul>
        </div>
    </div>
    
   </section>
  )
}

export default SpecialDishes
