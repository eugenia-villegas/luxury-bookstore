import React, { useContext } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import Badge from '@mui/material/Badge';
import { CartContext } from './CartContext';

const Carrito = () => {
    const cartList = useContext(CartContext);

    return (
        <div>
                    <Badge badgeContent={cartList.itemBadge()} color="primary">
                    <IoCartOutline color="action" />
                    </Badge>            
        </div>
    );
    
}

export default Carrito;

