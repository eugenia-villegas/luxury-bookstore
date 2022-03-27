import ItemDetail from './ItemDetail.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestoreFetchOne,firestoreFetch } from '../utils/firestoreFetch.js';

/* promesa con datos */

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);
    const { idDetails } = useParams();
    console.log(idDetails);
    
    useEffect(() => {
        firestoreFetchOne(idDetails)
            .then(result => setProducts(result))
            .catch(err => console.log(err))
    }, [idDetails]);
    
    return(
        <>
            {
                 <ItemDetail item={products}                    />
            }
        </>
    );
};

export default ItemDetailContainer;