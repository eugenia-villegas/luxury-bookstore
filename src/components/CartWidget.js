import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import Badge from '@mui/material/Badge';

class Carrito extends React.Component {
    render() {
    return (<div>
            <Badge badgeContent={1} color="primary">
            <IoCartOutline color="action" />
            </Badge>
        </div>)
    }
}

export default Carrito;
