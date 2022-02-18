import Item from '../components/Item.js';
import { useState, useEffect } from "react";
import itemsMag from '../utils/Products.js'



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
        },timeout)
    })
};




const ItemList = ()=> {

const [products, setProducts] = useState ([]);

    function getProducts(){
        customFetch(3000, data)
        .then(data=> setProducts(data))
        .catch(error=>alert('Hubo un error. Ver los detalles aqui', error))
    }
    

    useEffect(getProducts,[]);


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
                    />)
            }
        </>
    );
};

export default ItemList;