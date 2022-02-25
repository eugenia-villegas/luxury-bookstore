import { useContext } from 'react';
import { CartContext } from './CartContext.js';
import { TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductPrice } from './styledComponents.js';
 
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
                            <b>Product:</b> JESSIE THUNDER SHOES
                        </span>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                        <ProductAmount>2 items</ProductAmount>
                        </ProductAmountContainer>
                        <ProductPrice>$ 30 each</ProductPrice>
                    </PriceDetail>
                    </Product>
            </ContentCart>
            </WrapperCart>
        </div>  
    )
}

export default Cart;