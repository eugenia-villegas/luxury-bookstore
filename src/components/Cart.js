import { useContext } from 'react';
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import db from "../utils/firebaseConfig";
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext.js';
import { TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductPrice, WrapperCart, Remove, Clean, EmptyCart, TotalPrice, TotalDiv, CreateOrder, ItemTitle } from './styledComponents.js';
 
const Cart = () => {
    const cartList = useContext(CartContext);
    
    const createOrder = () => {
        let order = {
            buyer: {
                email: "dualipa@levitating.com",
                name: "Dua Lipa",
                phone: "111111111"
            },
            items: cartList.cartList.map((it) => {return {id: it.id, price: it.price, title: it.title, qty: it.qty}}),
            total: cartList.totalItem(), 
            date: serverTimestamp(),       
        }

        const createOrderInFirestore = async () => {
            // agrega el document con un Auto-Id
            const newOrderInFirestore = doc(collection(db, 'orders'));
            // usa el Auto-Id generado para agregar los datos al document
            await setDoc(newOrderInFirestore, order);
            return newOrderInFirestore;
       };

       createOrderInFirestore()
       // el contenido del .THEN va entre {} porque se ejecuta más de 1 línea
            .then((result) => {
                 alert(`Your order code is: ${result.id}`);
                 cartList.map(async (item) => {
                      const itemRef = doc(db, 'products', item.id);
                      await updateDoc(itemRef, {
                           stock: increment(-item.qty)
                      });
                 });
                 cartList.clear();
            })
            .catch((error) => console.log(error));

        return null
        
    }

    return (
        <div className='container'>
            <div className='row'>
                <TitleCart>YOUR CART</TitleCart>
            </div>
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <WrapperCart>
                    {
                        cartList.cartList.map(item => (
                            <ContentCart key={item.id}>
                            <Product>
                            <ProductDetail>
                                <ImageCart src={item.img} />
                                <Details>
                                <span>
                                    <ItemTitle>{item.title}<br/></ItemTitle>
                                    <Remove onClick={() => cartList.removeItem(item.id)}>Remove Item</Remove>
                                </span>
                                </Details>                        
                    
                            </ProductDetail>
                            <PriceDetail>
                                <div>1 item
                                <ProductPrice>$ {item.price}</ProductPrice>
                                </div>
                                <div>{item.qty} item
                                <ProductPrice>$ {item.price * item.qty}</ProductPrice>
                                </div>
                            </PriceDetail>
                            </Product>
                            <hr/>
                            </ContentCart>
                            
                        )
                        )
                    }
                    </WrapperCart>
                </div>
                <div className='col-4'>
                        <TotalDiv>
                        {
                            (cartList.cartList.length > 0)
                            ? <TotalPrice>Total $ {cartList.totalItem()}</TotalPrice>
                            : <p></p>
                            
                        }
                        {
                            (cartList.cartList.length > 0)
                            ? <div><Clean onClick={cartList.clear}>Clean Cart</Clean><Link to="/checkout" aria-current="page" href="/"><CreateOrder onClick={createOrder}>Send Order</CreateOrder></Link></div>
                            : <EmptyCart>Your cart is empty. Click <Link to="/">here</Link> to continue shopping.</EmptyCart>
                        }
                            
                        </TotalDiv>
                </div>
                    
                    
                
               
            </div>
        </div>  
    )
}

export default Cart;