import React from "react"
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

const Dummy_MEALS=[
    {
        id:'m1',
        name:'Samosa',
        description:'stuffing of mashed potato with spices',
        price:10
    },
    {
        id:'m2',
        name:'Momos',
        description:'stuffing of veggies with flavoured spices',
        price:40
    },
    {
        id:'m3',
        name:'Burger',
        description:'veg, cheese',
        price:30
    },
    {
        id:'m4',
        name:'Pizza',
        description:'cheese burst, toppings of paneer, cpsicum, onion and jalapeno',
        price:250
    }
]

const AvailableMeals= ()=>{
    const mealList = Dummy_MEALS.map(meal=>{
        return <MealItem 
            key={meal.id} 
            id={meal.id}
            name={meal.name} 
            description={meal.description} 
            amount={meal.price}
        />});
    return(
        <section className={classes.meals}>
            <Card>
                <ul>{mealList}</ul>
            </Card>
            
        </section>
    )
}

export default AvailableMeals;