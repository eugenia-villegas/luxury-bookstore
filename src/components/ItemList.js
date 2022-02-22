import Item from '../components/Item.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import itemsMag from '../utils/Products.js';



/* promesa con datos */

let okok = true;
let data = itemsMag;



const customFetch = (timeout, data) => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if (okok){
                resolve(data);
            }else {
                reject('KO')
            }
        },timeout)
    })
};




const ItemList = ()=> {

    const [products, setProducts] = useState ([]);
    const { idCategory } = useParams();
    


    function getProducts(){
        if (idCategory === undefined) {
            customFetch(2000, data)
            .then(data=> setProducts(data))
            .catch(error=>alert('Hubo un error. Ver los detalles aqui', error))
        } else {
            customFetch(2000, data.filter(item => item.category === parseInt(idCategory)))
            .then(data=> setProducts(data))
            .catch(error=>alert('Hubo un error. Ver los detalles aqui', error))
        }
    }
        
    

    useEffect(getProducts,[idCategory]);


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