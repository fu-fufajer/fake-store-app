import { useContext } from 'react'
import { Button, Navbar, NavbarBrand } from "flowbite-react";
import { FcPaid } from "react-icons/fc";
import ImageLogo from "../assets/icon.png"
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { AuthContext } from '../contexts/AuthContext';
import { CartContext } from '../contexts/CartContext';

const NavbarComp = () => {
    // menggunakan context
    const { isLogin, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogout() {
        // panggil fn logout dr context
        logout();
        // pisahkan halaman, navigate tidak bisa digunakan di context
        navigate("/")
    }

    const { cart } = useContext(CartContext);

    return (
        <div>
            <Navbar fluid rounded className='px-10 py-5'>
                <NavbarBrand href="/">
                    <img src={ImageLogo} alt="" className='mr-3 h-6 sm:h-9' />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Fake Store App</span>
                </NavbarBrand>
                <div className="flex md:order-2">
                    <Link to='/cart' className='relative'>
                        <span className='bg-red-200 text-red-500 px-2 rounded-full absolute font-bold'>{cart.length}</span>
                        <FcPaid className='text-4xl' />
                    </Link>
                    <Link to="/users">
                        <FaRegUserCircle className='text-3xl ms-5 text-white' />
                    </Link>
                    {
                        isLogin && (<Button color="red" className='ms-3' onClick={handleLogout}>Logout</Button>)
                    }
                </div>
            </Navbar>
        </div>
    );
}

export default NavbarComp;