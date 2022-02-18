import ItemCount from './ItemCount.js'

const Item = (props) => {
    return (
        <article className="card item-card">
            <img src={props.pictureUrl} class="card-img-top" alt={props.title} />
            <div className="card-body text-center">
                <h5 text-center>{props.title}</h5>
                <p className="card-price text-center">$ {props.price}</p>
                <ItemCount />
            </div>
        </article>
    )
} 

export default Item;