import React from 'react'
import NavbarComp from './components/NavbarComp'
import { Outlet } from 'react-router-dom'

const Template = () => {
    return (
        <div>
            <NavbarComp />
            {/* menentukan tempat untuk konten dinamis */}
            <Outlet />
        </div>
    )
}

export default Template
