import { createContext, useState } from 'react';


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    
    const addToCart = (quantity, props) => {
        if (isInCart(props.id)) {
            for (const products of cartList) {
                 if (products.id === props.id) {
                      products.quantity += quantity;
                 }
            }

            setCartList([...cartList]);
       } else {setCartList([
            ...cartList, //spread operator, para que al agregar el nuevo objeto
                        //igualmente mantenga los objetos que ya se encuentren en el carrito
            {
            title: props.title,
            id: props.id,
            img: props.pictureUrl,
            price: props.price,
            quantity: quantity,
        }])}
        console.log(setCartList)
    };

    const isInCart = (idProduct) => {
        return cartList.find((props) => props.id === idProduct) ? true : false;
    }

    //Vacia el carrito
    const clear = () => {
        setCartList([]);
    }
    
    return (
        <CartContext.Provider value = {{cartList, addToCart, isInCart, clear}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;