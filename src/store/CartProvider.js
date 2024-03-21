import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {

    const [items,updateItems]=useState([])

    const addItemToCartHandler=item=>{
        const existingItem = items.findIndex((cartItem) => cartItem.name === item.name);
    
        if (existingItem!==-1) {
            const updatedItems = [...items];
            console.log("Number(item.quantity)",typeof(Number(item.quantity)))
            updatedItems[existingItem].quantity=Number(updatedItems[existingItem].quantity) + Number(item.quantity);
            
            console.log("updatedItems",updatedItems)
          updateItems(updatedItems);
        } else {
          updateItems([...items, item]);
        }
    }

    const removeItemFromCartHandler = (id) => {}

    const cartContext = {
        items:items,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;