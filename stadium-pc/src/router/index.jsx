import Home from '@/pages/home/home'
import Login from '@/pages/login/login'
import Menu from '@/pages/ums/menu/menu'
import Resource from '@/pages/ums/resource/resource'
import User from '@/pages/ums/user/user'
import Role from '@/pages/ums/role/role'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Root from './root'
import Page404 from '@/pages/error/404'
import { DashboardOutlined, UserOutlined, MenuOutlined, SettingOutlined, ContainerOutlined, UsergroupAddOutlined } from '@ant-design/icons'

export const routes = [

    {
        path: "/",
        element: <Root />,
        errorElement: <Page404 />,
        loader() {
            console.log('loader')
            return true
        },
        children: [
            {
                index: false,
                path: "/home",
                label: '首页',
                icon: <DashboardOutlined />,
                element: <Home />
            },
            {
                path: "/ums",
                label: "系统管理",
                icon: <SettingOutlined />,
                children: [{
                    path: "/ums/user",
                    label: "用户管理",
                    icon: <UserOutlined />,
                    element: <User />
                }, {
                    path: "/ums/role",
                    label: "角色管理",
                    icon: <UsergroupAddOutlined />,
                    element: <Role />
                }, {
                    path: "/ums/menu",
                    label: "菜单管理",
                    icon: <MenuOutlined />,
                    element: <Menu />
                }, {
                    path: "/ums/resource",
                    label: "资源管理",
                    icon: <ContainerOutlined />,
                    element: <Resource />
                }]
            }
        ]
    },

]

const baseRoutes = [
    {
        path: '/login',
        Component: Login
    },
    {
        path: "/",
        element: <Navigate to='/home' />,
    },
]
const router = createBrowserRouter([...baseRoutes, ...routes])

export default router;