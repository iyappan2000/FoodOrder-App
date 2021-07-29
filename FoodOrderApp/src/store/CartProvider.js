import React, { useReducer } from 'react'
import CartContext from './CartContext'

const defaultState = {
    items:[],
    totalAmount:0,
}

const reducer = (state,action) => {
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
        return{
            items:updatedItems,
            totalAmount:updatedAmount
        }
    }
    return defaultState
}

function CartProvider(props) {

    const [state, dispatch] = useReducer(reducer, defaultState)

    const addItemHandler = (item) => {
        dispatch({type:'ADD',item:item})
    };
    const removeItemHandler = (id) => {
        dispatch({type:'REMOVE',id:id})

    };
    const cartContext = {
        items:state.items,
        totalAmount:state.totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler,
    }

    return (
        <CartContext.Provider value = {cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
