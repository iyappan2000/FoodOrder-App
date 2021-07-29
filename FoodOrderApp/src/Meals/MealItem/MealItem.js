import React, { useContext } from 'react'
import CartContext from '../../store/CartContext';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
const MealItem = (props) => {

    const price = `$${props.price.toFixed(2)}`;
    const cartCtx = useContext(CartContext);
    const addCartHandler = (amount) => {
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            description:props.description,
            amount:amount,
            price:props.price
        })
    }
    return (
        <section className = {classes.meal}>
            <h3>{props.name}</h3>
            <div className = {classes.description}>{props.description} </div>
            <div className = {classes.price}>{price} </div>
            <div>
                <MealItemForm id = {props.id} onAddToCart = {addCartHandler}/>
            </div>
        </section>
    )
}

export default MealItem
