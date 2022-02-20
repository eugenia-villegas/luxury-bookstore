import { Link } from 'react-router-dom';


const Item = (props) => {
    return (
        <div className="card h-100 item-card">
            <img src={props.pictureUrl} class="card-img-top" alt={props.title} />
            <hr/>
            <div className="card-body text-center h-100">
                <h6>{props.title}</h6>
                <p className="card-price text-center">$ {props.price}</p>
                <Link to={`/details/${props.id}`} className="fw-bold link" href="/">More Details</Link>
            </div>
        </div>
    )
} 

export default Item;