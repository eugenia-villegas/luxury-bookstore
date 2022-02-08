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

    const alerta = () => {
        alert(valoraciones + " productos han sido agregados al carrito")
    }

    return (
        <>
        <div>
            <p>
                <p>Hay {stock} unidades en stock</p>
                <button onClick={increment} className="counter-button">+1</button>{valoraciones}
                <button onClick={decrement} className="counter-button">-1</button>

                <br />
                <button onClick={alerta} className="cart-add">Agregar al Carrito</button>
            </p>
        </div>
        </>
    );
}

export default ItemCount;