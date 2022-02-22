import ItemDetail from './ItemDetail.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import itemsMag from '../utils/Products.js';

/* promesa con datos */

let okok = true;
let data = itemsMag;

const customFetch = (timeout, data)=> {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if (okok){
                resolve(data);
            }else {
                reject('KO')
            }
        }, timeout)
    })
};
    

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([]);
    const { idDetails } = useParams();
    
    function getItem(){
        customFetch(2000, data.filter(item => item.id === idDetails))
            .then(data=> setProducts(data))
            .catch(error=>alert('Hubo un error. Ver los detalles aqui', error))
    }
        
    useEffect(getItem,[idDetails]);

    return(
        <>
            {
                products.map(item=>
                    <ItemDetail
                    key={item.id}
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