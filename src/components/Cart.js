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
            <ContentCart>
                    <Product>
                    <ProductDetail>
                        <ImageCart src={cartList.img} />
                        <Details>
                        <span>
                            <b>Product:</b> {cartList.title}
                        </span>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <div>
                        <div>{cartList.quantity} items</div>
                        </div>
                        <ProductPrice>$ {cartList.price}</ProductPrice>
                    </PriceDetail>
                    </Product>
            </ContentCart>
            </WrapperCart>
        </div>  
    )
}

export default Cart;