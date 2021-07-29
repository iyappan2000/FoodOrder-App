import React from 'react'
import Card from '../UI/Card'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'

const Dummy_meals = [
    {
        id:'1',
        name:'Chettinadu Chicken',
        description:'Dish made chicken and spices',
        price:210.00
    },
    {
        id:'2',
        name:'Biriyani',
        description:'Spicy rice dish with vegetables',
        price:260.00
    },  {
        id:'1',
        name:'Chicken 65',
        description:'Popular deep fried chicken preparation',
        price:180.00
    },  {
        id:'4',
        name:'Dosa',
        description:'pancake/Hopper Ground rice urad dal',
        price:70.00
    },
]
const AvailableMeals = () => {

    const mealsList = Dummy_meals.map((meal) => {
        return <MealItem id={meal.id} key = {meal.id} name={meal.name} description = {meal.description} price = {meal.price} />;
        
    })
    return (
        <section className = {classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
            
        </section>
    )
}

export default AvailableMeals
