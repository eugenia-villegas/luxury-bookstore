import { createContext, useState } from 'react';


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState({});

    
    const addToCart = (quantity, props) => {
        setCartList([{
            title: props.title,
            img: quantity.pictureUrl,
            price: props.price,
            quantity: quantity,
        }])
        console.log(setCartList)
    };
    
    return (
        <CartContext.Provider value = {{cartList, addToCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;