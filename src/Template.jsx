import React from 'react'
import NavbarComp from './components/NavbarComp'
import { Outlet } from 'react-router-dom'
import CartProvider from './contexts/CartContext'

const Template = () => {
    return (
        <div>
            <CartProvider>
                <NavbarComp />
                {/* menentukan tempat untuk konten dinamis */}
                <Outlet />
            </CartProvider>
        </div>
    )
}

export default Template
