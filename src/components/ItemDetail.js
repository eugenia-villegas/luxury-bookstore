import ItemCount from './ItemCount.js';
import { Link } from "react-router-dom";
import { CartContext } from './CartContext.js';
import { useState, useContext } from 'react';
import { IdItem } from './styledComponents.js';


const ItemDetail = (props) => {
    const [ cantidad, setCantidad ] = useState(1);
    const [checkout, setCheckout] = useState(false);
    const cartList = useContext(CartContext);

    const onAdd = (quantity) => {;
        setCantidad(quantity);
        setCheckout(true)
        cartList.addToCart(quantity, props);
    }


    return (
        <div className="container detail-container">
            <div className="row justify-content-md-center">
                <hr></hr>
                <div className="col-4">
                <img className="detail-img" src={props.pictureUrl} alt={props.title} />
                </div>
                <div className="col-6 detail-card-container">
                    <h3>{props.title}</h3>
                    <IdItem><caption>{props.id}</caption></IdItem>
                    <h5>$ {props.price}</h5>
                    <hr></hr>
                    <p>{props.description}</p>
                    <p>Hay {props.stock} unidades en stock</p>
                    <div className="row">
                    {checkout ?
                        <Link to="/Cart" href="/"><button className="checkout-button btn btn-outline-dark" cantidad={cantidad}>Checkout</button></Link>
                    :
                    <ItemCount stock={props.stock} initial={cantidad} onAdd={onAdd}></ItemCount>}
                    </div>
                </div>                
            </div>
            <hr></hr>
        </div>
    )
} 

export default ItemDetail;