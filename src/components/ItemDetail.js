import ItemCount from './ItemCount.js';


const ItemDetail = (props) => {
    return (
        <div className="container detail-container">
            <div className="row justify-content-md-center">
                <hr></hr>
                <div className="col-4">
                <img className="detail-img" src={props.pictureUrl} alt={props.title} />
                </div>
                <div className="col-6 detail-card-container">
                    <h3>{props.title}</h3>
                    <h5>$ {props.price}</h5>
                    <hr></hr>
                    <p>{props.description}</p>
                    <p>Hay {props.stock} unidades en stock</p>
                    <div className="row">
                            <ItemCount stock={props.stock} title= {props.title} pic={props.pictureUrl} price={props.price}/>
                    </div>
                </div>                
            </div>
            <hr></hr>
        </div>
    )
} 

export default ItemDetail;