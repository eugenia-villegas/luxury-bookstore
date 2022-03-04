import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import Badge from '@mui/material/Badge';

const Carrito = () => {

    return (
        <div>
                    <Badge badgeContent={0} color="primary">
                    <IoCartOutline color="action" />
                    </Badge>            
        </div>
    );
    
}

export default Carrito;

