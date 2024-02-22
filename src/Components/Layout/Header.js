import  { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>    {/* any name can be used in place of onClick because here onClick is not builtin.*/}
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Delicious Food"></img>
        </div>
    </Fragment>
}

export default Header;