import { useState } from 'react';
import { ButtonCounter, CartAdd } from './styledComponents';

const ItemCount = ({stock, initial, onAdd}) =>  {
    const [itemCantidad, setItemCantidad] = useState(initial); //Hook

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
                    <CartAdd onClick={() => onAdd(itemCantidad)} className="btn btn-outline-dark">Add to Cart</CartAdd>
                </div>
            </div>      
        </div>
        </>
    );
}

export default ItemCount;


/*A tener en cuenta*/
/*className={this.state.hideElement ? "invisible" : "visible"*/