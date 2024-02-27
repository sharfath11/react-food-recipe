import React, { useState } from 'react'

function Pagination(props) {
  let [activeDishes,setActiveDishes]=useState()
  console.log(props.filterddishes.length);
  let numberOfPage=[]
  for(let i=1;i<=Math.ceil(props.filterddishes.length/props.itemPerPage);i++){
      numberOfPage.push(i)
  }
  function showNextDishesHandler(evnt){
    let crntPage=evnt.target.id
    props.setCrntPage(crntPage)
    setActiveDishes(crntPage)
  }

  let page=numberOfPage.map((pageNumber)=>{
    return <li id={pageNumber} onClick={showNextDishesHandler} className={activeDishes==pageNumber? "active" :''}>{pageNumber}</li>
  })
  return (
    <section>
      <ul className="pagination flex">
       {page}
      </ul>
    </section>
  )
}

export default Pagination
