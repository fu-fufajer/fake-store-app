import React from 'react'
import { Navbar, NavbarBrand } from "flowbite-react";
import { FcPaid } from "react-icons/fc";
import ImageLogo from "../assets/icon.png"
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";

const NavbarComp = () => {
    return (
        <div>
            <Navbar fluid rounded className='px-10 py-5'>
                <NavbarBrand href="/">
                    <img src={ImageLogo} alt="" className='mr-3 h-6 sm:h-9' />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Fake Store App</span>
                </NavbarBrand>
                <div className="flex md:order-2">
                    <FcPaid className='text-3xl' />
                    <Link to="/users">
                        <FaRegUserCircle className='text-3xl ms-5 text-white'/>
                    </Link>
                </div>
            </Navbar>
        </div>
    )
}

export default NavbarComp
