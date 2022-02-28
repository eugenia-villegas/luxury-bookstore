import { createContext, useState } from 'react';


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    
    const addToCart = (pic, title, price, itemCantidad) => {
        setCartList();
    };
    
    return (
        <CartContext.Provider value = {{cartList, addToCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;