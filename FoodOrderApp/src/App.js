import React,{ useState} from 'react'
import Cart from './Cart/Cart'
import  Header  from './Header/Header'
import Meals from './Meals/Meals'
import CartProvider from './store/CartProvider';
function App() {

  const [CartIsShown, setCartIsShown] = useState(false);

  const cartShownHandler = () => {
    setCartIsShown(true);
    console.log(CartIsShown);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {CartIsShown && <Cart onClose = {hideCartHandler}/>}
      <Header onShowCart = {cartShownHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  )
}

export default App

