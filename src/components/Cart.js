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
                    <ContentCart>
                    <Product>
                    <ProductDetail>
                        <ImageCart src={item.img} />
                        <Details>
                        <span>
                            <b>Product:</b> {item.title}
                        </span>
                        </Details>                        
            
                    </ProductDetail>
                    <PriceDetail>
                        <div>
                        <div>{item.quantity} items</div>
                        </div>
                        <ProductPrice>$ {item.price}</ProductPrice>
                    </PriceDetail>
                    </Product>
                    </ContentCart>
                )
                )
            }
            </WrapperCart>
        </div>  
    )
}

export default Cart;