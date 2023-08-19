import { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Avatar, Dropdown } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
import { routes } from '@/router/index'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/store/user/userSlice'

const Index = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { payload: userInfo } = useSelector(state => state.user.userInfo)
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const getItem = (label, key, icon, children, type) => {
        return {
            label, key, icon, children, type
        }
    }
    const getTreeMenu = (route) => {
        if (!route) return null;
        return route.map(item => {
            return getItem(item.label, item.path, item.icon, getTreeMenu(item.children))
        })
    }
    const items = getTreeMenu(routes[0].children)

    const onClickMenu = (e) => {
        navigate(e.key)
    }
    const clickDropDown = (e) => {
        switch (e.key) {
            case 'logout':
                dispatch(logout())
                navigate('/login')
                break
        }
    }
    let location = useLocation()
    const defaultSelectedKeys = location.pathname
    const defaultOpenKeys = defaultSelectedKeys.split('/').filter(item => item).map(item => '/' + item)
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} theme='dark'>
                <div className="demo-logo-vertical" />
                <Menu
                    defaultSelectedKeys={[defaultSelectedKeys]}
                    defaultOpenKeys={defaultOpenKeys}
                    theme="dark"
                    mode="inline"
                    items={items}
                    onClick={onClickMenu}
                />
            </Sider>
            <Layout className='h-screen'>
                <Header style={{ background: colorBgContainer }} className='flex items-center justify-between pr-[16px] pl-0'>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <Dropdown menu={{ items: [{ label: '退出登录 ', key: 'logout' }], onClick: clickDropDown }}>
                        <Avatar size={45} icon={<UserOutlined />} src={userInfo.icon} />
                    </Dropdown>
                </Header>
                <Content
                    className='overflow-y-scroll '
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default Index;