import { useState } from 'react';
import { Link } from "react-router-dom";

const ItemCount = (props) =>  {
    const [valoraciones, setValoraciones] = useState(1); //Hook

    let stock = 8;

    const increment = () => {
        if (valoraciones < stock) {
          setValoraciones(valoraciones+1);  
        }
    }

    const decrement = () => {
        if (valoraciones > 1) {
           setValoraciones(valoraciones-1); 
        }
    }

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <button onClick={decrement} className="counter-button">-1</button>{valoraciones}
                    <button onClick={increment} className="counter-button">+1</button>
                    <br />
                    <button className="cart-add">Add to Cart</button>
                </div>
                <div className="col">
                    <Link to="/cart" href="/"><button>Checkout</button></Link>
                </div>
                
            </div>
        </div>
        </>
    );
}

export default ItemCount;