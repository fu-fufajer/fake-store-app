import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/Products";
import Template from "../Template";
import UserPages from "../pages/UserPages";
import ProductCategory from "../pages/ProductCategory";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import { auth } from "../middleware/auth"

// membuat daftar routing
export const router = createBrowserRouter([
    // middleware sebelum login
    {
        path: '/',
        element: <Template />,
        // mengisi outlet di template.jsx
        children: [
            { path: '/', element: <App /> },
            { path: '/products', element: <Products /> },
            { path: '/categories/:categoryId', element: <ProductCategory /> },
            { path: '/users', element: <UserPages /> },
            { path: '/login', element: <Login /> }
        ]
    },
    // middleware setelah login
    {
        path: '/',
        element: <Template />,
        loader: auth, // menjalankan fungsi ketika proses perpindahan halaman, menjalankan pengecekan middleware/auth.js baru meneruskan halaman
        children: [
            { path: '/cart', element: <Cart /> }
        ]
    }
]);