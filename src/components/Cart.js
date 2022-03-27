import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext.js';
import { TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductPrice, WrapperCart, Remove, Clean, EmptyCart, TotalPrice, TotalDiv } from './styledComponents.js';
 
const Cart = () => {
    const cartList = useContext(CartContext);
    
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
                            <h5>{item.title}<br/></h5>
                            <Remove onClick={() => cartList.removeItem(item.id)}>Remove Item</Remove>
                        </span>
                        </Details>                        
            
                    </ProductDetail>
                    <PriceDetail>
                        <div>1 item
                        <ProductPrice>$ {item.price}</ProductPrice>
                        </div>
                        <div>{item.qty} item
                        <ProductPrice>$ --</ProductPrice>
                        </div>
                    </PriceDetail>
                    </Product>
                    <hr/>
                    </ContentCart>
                    
                )
                )
            }
            
            <TotalDiv>
            {
                (cartList.cartList.length > 0)
                ? <TotalPrice>Total price $ {cartList.totalItem()}</TotalPrice>
                : <p></p>
                
            }
            {
                (cartList.cartList.length > 0)
                ? <Clean onClick={cartList.clear}>Empty Cart</Clean>
                : <EmptyCart>Your cart is empty. Click <Link to="/">here</Link> to continue shopping.</EmptyCart>
            }
            </TotalDiv>
            </WrapperCart>
            
        </div>  
    )
}

export default Cart;