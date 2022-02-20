import ItemCount from './ItemCount.js';


const ItemDetail = (props) => {
    return (
        <div className="card h-100 item-card">
            <img src={props.pictureUrl} class="card-img-top" alt={props.title} />
            <hr/>
            <div className="card-body text-center h-100">
                <h6>{props.title}</h6>
                <p className="card-price text-left">$ {props.price}</p>
                <p className="fw-bold">{props.description}</p>
            </div>
            <div className="card-body text-right h-100">
                <h6>$ {props.price}</h6>
            </div>
            <ItemCount />
        </div>
    )
} 

export default ItemDetail;