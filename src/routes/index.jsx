import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/Products";
import Template from "../Template";
import UserPages from "../pages/UserPages";

// membuat daftar routing
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Template />,
        // mengisi outlet di template.jsx
        children: [
            { path: '/', element: <App /> },
            { path: '/products', element: <Products /> },
            { path: '/users', element: <UserPages /> }
        ]
    },
]);