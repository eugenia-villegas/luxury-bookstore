import { createContext, useState } from 'react';


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    
    const addToCart = (quantity, item) => {
         if (isInCart(item.item.id)) {
             for (const products of cartList) {
                 if (products.id === item.item.id) {
                    products.qty += quantity;
                 }
             }
             setCartList([...cartList])
         } else {
                setCartList([
                ...cartList, //spread operator, para que al agregar el nuevo objeto
                            //igualmente mantenga los objetos que ya se encuentren en el carrito
                {
                title: item.item.title,
                id: item.item.id,
                img: item.item.pictureUrl,
                price: item.item.price,
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

    //Sumar precios x mismo item.item. No funciona
    /*const fullPrice = () => {
        let total = 0;
        for (const products of cartList) {
            total = total + (products.price * products.qty)
            console.log(total)
        }
        return total;
    }*/
    

    //Sumar precios totales
    const totalItem = () => {
        let totalPrice = cartList.map(item => item.price * item.qty);
        return totalPrice.reduce(((previousPrice, currentPrice) => previousPrice + currentPrice), 0)
    }

    //Calculo de item.items para el badge
    const itemBadge = () => {
        let badgeQty = cartList.map(item => item.qty);
        return badgeQty.reduce(((previousValue, currentValue) => previousValue + currentValue), 0)
    }
    
    return (
        <CartContext.Provider value = {{cartList, addToCart, isInCart, clear, removeItem, itemBadge, totalItem}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;