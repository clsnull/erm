import Layout from '@/layouts/index'
import Home from '@/pages/home/home'
import Login from '@/pages/login/login'
import { createBrowserRouter } from 'react-router-dom';
let router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home,
            },
        ],
    },
    {
        path: "/login",
        Component: Login
    }
]);

export default router;