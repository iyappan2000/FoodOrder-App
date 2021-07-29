import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css'

function Header(props) {
    return (
      <>
        <header className={classes.header}>
          <h1>React Meals</h1>
          <HeaderCartButton onClick= {props.onShowCart}/>
          {console.log('show')}
        </header>
        <div className= {classes['main-image']}>
            <img src ='https://c4.wallpaperflare.com/wallpaper/303/793/304/buffet-meal-food-brunch-wallpaper-preview.jpg' alt = 'Food_image'/>
        </div>
      </>
    );
}

export default Header
