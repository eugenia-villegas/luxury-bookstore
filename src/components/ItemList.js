import Item from '../components/Item.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../utils/firestoreFetch.js';

const ItemList = () => {

    const [products, setProducts] = useState ([]);
    const { idCategory } = useParams();

    useEffect(() => {
        firestoreFetch(idCategory)
        .then(result => setProducts(result))
        .catch(err => console.log(err))        
    }, [idCategory]);

    

    return(
        <>
            {
                products.map(item=>
                    <Item 
                    key={item.id}
                    pictureUrl={item.pictureUrl}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    stock={item.stock}
                    id={item.id}
                    />)
            }
        </>
    );
};

export default ItemList;