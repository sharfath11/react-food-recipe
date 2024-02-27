import React, { useContext, useEffect, useState } from "react";
import Pagination from "./Pagination";
import CardDishes from "./CardDishes";
import { AllMenuContext } from "./AllMenuContext";
import axios from "axios";
import Popup from "./Popup";
import AddToCart from "./AddToCart";
function FilteredDishes(props) {
  console.log('allmenu',props);
  let [noDisplay,setNoDisplay]=useState(false)
  let [menuCategory, setMenuCategory] = useState([]);

  useEffect(() => {
    CategeroyData();
    singleDishes();
  }, []);
  const CategeroyData = () => {
    const API_URL_CATEGORY =
      "https://www.themealdb.com/api/json/v1/1/categories.php";
    axios.get(API_URL_CATEGORY).then((CategoryData) => {
      setMenuCategory(CategoryData.data.categories);
    });
  };
  const singleDishes = () => {
    setSingleDish(allMenu.slice(8, 16));
  };
  let [itemDeteils, setItemDetials] = useState();
  let [popUp, setPopup] = useState(false);
  function ClosePopup() {
    setPopup(false);
  }
  function SowPopup(itemDeteil) {
    setPopup(true);
    setItemDetials(itemDeteil);
  }
  const allMenu = useContext(AllMenuContext);
  let [activeDishes, setActiveDishes] = useState();
  let [filterddishes, setFilterdDishes] = useState([]);
  let [crntPage, setCrntPage] = useState(1);
  let [itemPerPage, setItemPerPage] = useState(4);
  let maxItem = 8;
  // console.log('all menus are',allMenu);
  //pagenation
  let lastIndex = crntPage * itemPerPage;
  //   1*4=4
  //   2*4=8
  //   3*4=12
  let firstIndex = lastIndex - itemPerPage;
  //   4-4=0
  //   8-4=4
  //   12-8=8
  let [singleDish, setSingleDish] = useState([]);
  let showTheseDishesNow = filterddishes.slice(firstIndex, lastIndex);
  let singleDishs = singleDish.map((menuItem, index) => {
    if (index <= maxItem) {
      if(!noDisplay){
        return <CardDishes menuItem={menuItem} SowPopup={SowPopup} />;
      }
    }
  });

  const allCatgories = menuCategory.map((items) => {
    return (
      <li
        onClick={() => {
          showFilterdDishesHandler(items.strCategory);
        }}
        className={items.strCategory === activeDishes ? "active" : ""}
      >
        {items.strCategory}
      </li>
    );
  });
  const [Allmenu,setAllMenu]=useState(allMenu)
  function showFilterdDishesHandler(category) {
    setCrntPage(1)
    setNoDisplay(true)
    setActiveDishes(category);
    setSingleDish(allMenu);
    let filteredDishesAre = Allmenu
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((menuItems) => {
       
       
          return( <CardDishes menuItem={menuItems}  SowPopup={SowPopup} />)
        
        
      });
    setFilterdDishes(filteredDishesAre);
  }
  let [cardItem,setCardItem]=useState([{}]);
  let [startAddToCart,setStartAddToCart]=useState(false)
  function AddToCartHandler(imgSrc,ItemNames){
    setStartAddToCart(true)
    setPopup(false)
    //  setCardItem([
    //   ...cardItem,
    //   {
    //     'imgSrc':imgSrc,
    //     "title":ItemNames
    //   }
    
    //  ])
  }
  return (
    <div className="filtered-dishes">
      {popUp && <Popup itemDeteils={itemDeteils} ClosePopup={ClosePopup}  AddToCartHandler={AddToCartHandler} />}  
       {startAddToCart&&<AddToCart cardItem={cardItem} />}
      {console.log("lemght", singleDishs.length)}
      <div className="container">
        <div className="text-center">
          <h2>Choose your Dishes</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            soluta. Inventore architecto officiis ea provident necessitatibus,
            quis rerum voluptates eos.
          </p>
        </div>
        <div className="filterd-dishes">
          <ul>{allCatgories}</ul>
        </div>
        <div className="text-center"></div>
        <div className="filterd-dishes-result">
          <ul className="flex flex-wrap gap-25">
            {singleDishs}
            {singleDishs.length!==49 ||filterddishes.length !==0 ?(
             console.log('fil', filterddishes.length),
             console.log('single', singleDishs),
              showTheseDishesNow
            ) : (
              <div className="alert">
                <h3> sorry no item found </h3>
                <h4> please choose anthor dishes</h4>
              </div>
            )}
          </ul>
        </div>
        <Pagination
          filterddishes={filterddishes}
          setCrntPage={setCrntPage}
          itemPerPage={itemPerPage}
        />
      </div>
    </div>
  );
}

export default FilteredDishes;
