import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { ButtonCounter, CartAdd } from './styledComponents';
import { CartContext } from './CartContext.js';

const ItemCount = ({stock, pic, title, price}) =>  {
    const [itemCantidad, setItemCantidad] = useState(1); //Hook
    const [checkout, setCheckout] = useState(false);
    
    const test = useContext({CartContext});

    const onAdd = (itemCantidad) => {
        test.addToCart(itemCantidad, pic, title, price);
    }

    const increment = () => {
        if (itemCantidad < stock) {
          setItemCantidad(itemCantidad+1);  
        }
    }

    const decrement = () => {
        if (itemCantidad > 1) {
            setItemCantidad(itemCantidad-1); 
        }
    }

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col ">
                    <ButtonCounter onClick={decrement} className="btn btn-outline-dark">-1</ButtonCounter>{itemCantidad}
                    <ButtonCounter onClick={increment} className="btn btn-outline-dark">+1</ButtonCounter>
                    <CartAdd onClick={() => {setCheckout(!checkout); onAdd(itemCantidad)}} className="btn btn-outline-dark">Add to Cart</CartAdd>
                </div>
            </div>    
            <div className="row">
                {checkout && <Link to="/Cart" href="/"><button className="checkout-button btn btn-outline-dark">Checkout</button></Link>}
            </div>    
        </div>
        </>
    );
}

export default ItemCount;


/*A tener en cuenta*/
/*className={this.state.hideElement ? "invisible" : "visible"*/