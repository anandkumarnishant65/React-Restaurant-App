import classes from './AvailableMeals.module.css'

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
        description:'plain, corn, cheese burst',
        price:250
    }
]

const AvailableMeals= ()=>{
    const mealList = Dummy_MEALS.map(meal=><li>{meal.name}</li>);
    return(
        <section className={classes.meals}>
            <ul>{mealList}</ul>
        </section>
    )
}

export default AvailableMeals;