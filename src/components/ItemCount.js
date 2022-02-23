import { useState } from 'react';
import { Link } from "react-router-dom";

const ItemCount = ({stock}) =>  {
    const [itemCantidad, setItemCantidad] = useState(1); //Hook
    const [checkout, setCheckout] = useState(false);

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
                    <button onClick={decrement} className="counter-button btn btn-outline-dark">-1</button>{itemCantidad}
                    <button onClick={increment} className="counter-button btn btn-outline-dark">+1</button>
                    <button className="cart-add btn btn-outline-dark" onClick={() => setCheckout(!checkout)}>Add to Cart</button>
                </div>
                <div className="col">
                    {checkout && <Link to="/cart" href="/"><button className="btn btn-outline-dark">Checkout</button></Link>}
                </div>
                
            </div>
        </div>
        </>
    );
}

export default ItemCount;