import React, { useContext } from 'react'
import classes from './HeaderCartButton.module.css';
import { AiOutlineShoppingCart} from "react-icons/ai";
import CartContext from '../store/CartContext';

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);

    const numberOfItems = cartCtx.items.reduce((curNum,item) => {
        return curNum + item.amount
    },0)
    return (
        <button className = {classes.button} onClick = {props.onClick}>
            
            <span className = {classes.icon}><AiOutlineShoppingCart/></span>
            <span>your Cart</span>
            <span className = {classes.badge}>{numberOfItems}</span>
        </button>
    )
}

export default HeaderCartButton
