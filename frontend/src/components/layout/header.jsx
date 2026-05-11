import React, { useContext } from 'react';
import { UsergroupAddOutlined, HomeOutlined, SettingOutlined, LogoutOutlined, LoginOutlined, UserOutlined, SearchOutlined, BellOutlined } from '@ant-design/icons';
import { Menu, Layout, Space, Typography, Avatar, Input, Badge, Dropdown } from 'antd';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { auth, setAuth } = useContext(AuthContext);

    const userMenuItems = [
        {
            label: <Text strong>{auth.user.name || auth.user.email}</Text>,
            key: 'header-name',
            disabled: true,
        },
        {
            type: 'divider',
        },
        {
            label: 'Profile Settings',
            key: 'profile',
            icon: <SettingOutlined />,
        },
        {
            label: 'Sign Out',
            key: 'logout',
            icon: <LogoutOutlined />,
            danger: true,
            onClick: () => {
                localStorage.clear();
                setAuth({ isAuthenticated: false, user: { email: "", name: "" } });
                navigate("/login");
            }
        },
    ];

    const navItems = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: '/',
            icon: <HomeOutlined />,
        },
        ...(auth.isAuthenticated ? [{
            label: <Link to={"/user"}>Users</Link>,
            key: '/user',
            icon: <UsergroupAddOutlined />,
        }] : []),
    ];

    return (
        <AntHeader style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
            padding: '0 40px',
            height: '70px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}>
            {/* Left side: Logo & Navigation */}
            <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <div className="logo" style={{ marginRight: '48px', display: 'flex', alignItems: 'center' }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '8px',
                        marginRight: '12px'
                    }}></div>
                    <Text strong style={{ fontSize: '20px', letterSpacing: '1px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        AUTH CORE
                    </Text>
                </div>
                <Menu
                    mode="horizontal"
                    selectedKeys={[location.pathname]}
                    items={navItems}
                    style={{ border: 'none', background: 'transparent', minWidth: '300px', fontSize: '15px' }}
                />
            </div>

            {/* Right side: Search, Notification, User */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <Input
                    prefix={<SearchOutlined style={{ color: '#bfbfbf' }} />}
                    placeholder="Search..."
                    style={{ width: 200, borderRadius: '20px', background: '#f5f5f5', border: 'none' }}
                />

                <Space size={20}>
                    <Badge dot color="blue">
                        <BellOutlined style={{ fontSize: '20px', color: '#595959', cursor: 'pointer' }} />
                    </Badge>

                    {auth.isAuthenticated ? (
                        <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" arrow>
                            <Space style={{ cursor: 'pointer', padding: '4px 8px', borderRadius: '8px', transition: 'all 0.3s' }} className="user-dropdown-hover">
                                <Avatar
                                    style={{ backgroundColor: '#764ba2', verticalAlign: 'middle' }}
                                    icon={<UserOutlined />}
                                />
                                <Text strong style={{ color: '#262626' }}>{auth.user.name || 'User'}</Text>
                            </Space>
                        </Dropdown>
                    ) : (
                        <Space>
                            <Link to="/login"><Text strong style={{ color: '#595959' }}>Sign In</Text></Link>
                            <Link to="/register"><Text strong style={{ color: '#764ba2' }}>Register</Text></Link>
                        </Space>
                    )}
                </Space>
            </div>
        </AntHeader>
    );
};

export default Header;