import React, { useContext } from 'react'
import CartContext from '../store/CartContext'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

function Cart(props) {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0
    const cartItems = (
        <ul className = {classes['cart-items']}>
            {cartCtx.items.map((item) => {
                return <li>{item.name}</li>
                
            })}
        </ul>
    )
    return (
        <>
            <Modal onClose = {props.onClose}>
            {cartItems}
            <div className = {classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className = {classes.actions}>
                <button className = {classes['button--alt']} onClick = {props.onClose}>Close</button>
                {hasItems && <button className = {classes.button}>Order</button>}
            </div>
            </Modal>
        </>
    )
}

export default Cart;
