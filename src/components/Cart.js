import { useContext } from 'react';
import { CartContext } from './CartContext.js';
import { TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductPrice, WrapperCart } from './styledComponents.js';
 
const Cart = () => {
    const cartList = useContext(CartContext);
    console.log(cartList);

    return (
        <div>
            <WrapperCart>
            <TitleCart>YOUR CART</TitleCart>
            {
                cartList.cartList.map(item => (
                    <ContentCart key={item.id}>
                    <Product>
                    <ProductDetail>
                        <ImageCart src={item.img} />
                        <Details>
                        <span>
                            <b>{item.title}</b><br/>
                            <button onClick={() => cartList.removeItem(item.id)}>Delete</button>
                        </span>
                        </Details>                        
            
                    </ProductDetail>
                    <PriceDetail>
                        <div>
                        <div>{item.qty} items</div>
                        </div>
                        <ProductPrice>$ {item.price}</ProductPrice>
                    </PriceDetail>
                    </Product>
                    </ContentCart>
                )
                )
            }
            </WrapperCart>
            <button onClick={cartList.clear}>Empty Cart</button>
        </div>  
    )
}

export default Cart;