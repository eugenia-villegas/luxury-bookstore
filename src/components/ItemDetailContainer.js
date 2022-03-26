import ItemDetail from './ItemDetail.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestoreFetchOne } from '../utils/firestoreFetch.js';

/* promesa con datos */

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);
    const { idDetails } = useParams();
    
    useEffect(() => {
        firestoreFetchOne(idDetails)
            .then(result => setProducts(result))
            .catch(err => console.log(err))
    }, [idDetails]);

    return(
        <>
            {
                products.map(item=>
                    <ItemDetail
                    key={item.id}
                    id={item.id}
                    pictureUrl={item.pictureUrl}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    stock={item.stock}
                    />)
            }
        </>
    );
};

export default ItemDetailContainer;