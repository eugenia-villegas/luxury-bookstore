import Item from '../components/Item.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import db from '../utils/firebaseSet.js';
import { collection, getDocs } from 'firebase/firestore'


const ItemList = ()=> {

    const [products, setProducts] = useState ([]);
    const { idCategory } = useParams();
        

    useEffect(() => {
        const firestoreFetch = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            return querySnapshot.docs.map( document => ({
                id: document.id,
                ...document.data()
            }))
        }
        firestoreFetch()
            .then(result => setProducts(result))
            .catch(error => console.log(error))
        
    }, [products]);


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