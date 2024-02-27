import React,{createContext,useReducer, useState} from 'react'
const DispatchContext=createContext();
const StateContext=createContext()
function AppContext(props) {
    
    
 let reducer=(State,action)=>{
      
   
    console.log('new Item RE',action.playLoad.title)
    console.log("new state",State.cartItem);
    switch(action.type){
        case 'add_to_cart':
        return{
            ...State,
            cartItem:[...State.cartItem,action.playLoad]
        }
        case 'remove-cart':
            return {
             ...State,
                cartItem:State.cartItem.filter((data)=>data.title !==action.playLoad.title)
                // cartItem: [State.cartItem.filter(item => action.playLoad !== item).map((item)=> {
                
                //     console.log("yfttygfgh",item)
                // })]
            }


        //    return console.log('sate',removeItem)
        default: return State
    }
 }
 
 let intialState={
    cartItem:[]
 }
 
 let [State,Dispatch]=useReducer(reducer,intialState)
 console.log('sate',State)
  return (
    <DispatchContext.Provider value={Dispatch}>
        <StateContext.Provider value={State}>
            {props.children}
        </StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export {AppContext,DispatchContext,StateContext}