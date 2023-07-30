import { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
import { routes } from '@/router/index'

const Index = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    function getItem(label, key, icon, children, type) {
        return {
            label, key, icon, children, type
        }
    }
    function getTreeMenu(route) {
        if (!route) return null;
        return route.map(item => {
            return getItem(item.label, item.path, item.icon, getTreeMenu(item.children))
        })
    }
    const items = getTreeMenu(routes[0].children)

    function onClickMenu(e) {
        navigate(e.key)
    }

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} theme='dark'>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    items={items}
                    onClick={onClickMenu}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
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
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
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