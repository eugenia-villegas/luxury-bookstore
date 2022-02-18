import { useState } from 'react';

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
        <div>
            <p className="text-center">
                <button onClick={increment} className="counter-button">+1</button>{valoraciones}
                <button onClick={decrement} className="counter-button">-1</button>

                <br />
                <button className="cart-add">Agregar al Carrito</button>
            </p>
        </div>
        </>
    );
}

export default ItemCount;