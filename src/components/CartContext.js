import { createContext, useState } from 'react';


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    
    const addToCart = (quantity, item) => {
        
         if (isInCart(item.id)) {
             for (const products of cartList) {
                 if (products.id === item.id) {
                    products.qty += quantity;
                 }
             }
             setCartList([...cartList])
         } else {
                setCartList([
                ...cartList, //spread operator, para que al agregar el nuevo objeto
                            //igualmente mantenga los objetos que ya se encuentren en el carrito
                {
                title: item.title,
                id: item.id,
                img: item.pictureUrl,
                price: item.price,
                qty: quantity,
            }])
        }
        
    };


    //Vacia el carrito
    const clear = () => {
        setCartList([]);
    }

    //Validar si esta en el carrito
    const isInCart = (idProduct) => {
        return cartList.find((item) => item.id === idProduct)
    }

    //Eliminar un producto del carrito
    const removeItem = (idProduct) => {
        setCartList(cartList.filter(item => (item.id !== idProduct)));
    }
    
    return (
        <CartContext.Provider value = {{cartList, addToCart, isInCart, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;