const Item = (props) => {
    return (
        <div className="card h-100 item-card">
            <img src={props.pictureUrl} class="card-img-top" alt={props.title} />
            <hr/>
            <div className="card-body text-center h-100">
                <h5>{props.title}</h5>
                <p className="card-price text-center">$ {props.price}</p>
                <p className="fw-bold">More Details</p>
            </div>
        </div>
    )
} 

export default Item;