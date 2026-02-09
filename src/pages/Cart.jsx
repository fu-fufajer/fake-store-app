import React, { useContext } from 'react'
import CardListHorizontal from '../components/CardListHorizontal';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <div>
            <CardListHorizontal data={cart} />
        </div>
    )
}

export default Cart
