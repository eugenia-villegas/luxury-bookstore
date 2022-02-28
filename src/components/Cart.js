import { useContext } from 'react';
import { CartContext } from './CartContext.js';
import { TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductPrice, WrapperCart } from './styledComponents.js';
 
const Cart = () => {
    const test = useContext(CartContext);
    console.log("CartWidget", test);

    return (
        <div>
            <WrapperCart>
            <TitleCart>YOUR CART</TitleCart>
            <ContentCart>
                    <Product>
                    <ProductDetail>
                        <ImageCart src="https://res.cloudinary.com/hdsqazxtw/image/upload/v1559681445/logo_coderhouse_1_rec5vl.png" />
                        <Details>
                        <span>
                            <b>Product:</b> {test.title}
                        </span>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <div>
                        <div>2 items</div>
                        </div>
                        <ProductPrice>$ {test.price}</ProductPrice>
                    </PriceDetail>
                    </Product>
            </ContentCart>
            </WrapperCart>
        </div>  
    )
}

export default Cart;