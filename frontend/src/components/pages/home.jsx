import { Row, Col, Typography, Button, Space, Card } from 'antd';
import { RocketOutlined, SafetyCertificateOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

const { Title, Paragraph, Text } = Typography;

const HomePage = () => {
    const navigate = useNavigate();
    const { auth } = useContext(AuthContext);

    return (
        <div style={{ padding: "60px 24px", maxWidth: '1200px', margin: '0 auto' }}>
            {/* Hero Section */}
            <Row justify="center" align="middle" style={{ marginBottom: '80px' }} gutter={[32, 32]}>
                <Col xs={24} md={14} className="fade-in">
                    <Title style={{ fontSize: '48px', fontWeight: 800, marginBottom: '24px' }}>
                        Modern Authentication <br />
                        <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Made Simple.
                        </span>
                    </Title>
                    <Paragraph style={{ fontSize: '18px', color: '#636e72', marginBottom: '32px' }}>
                        Secure your application with our state-of-the-art authentication system.
                        Built with React, Express, and MongoDB.
                    </Paragraph>
                    <Space size="middle">
                        {auth.isAuthenticated ? (
                            <Button type="primary" size="large" icon={<RocketOutlined />} onClick={() => navigate("/user")} style={{ height: '48px', padding: '0 32px', borderRadius: '8px' }}>
                                Manage Users
                            </Button>
                        ) : (
                            <>
                                <Button type="primary" size="large" onClick={() => navigate("/login")} style={{ height: '48px', padding: '0 32px', borderRadius: '8px' }}>
                                    Get Started
                                </Button>
                                <Button size="large" onClick={() => navigate("/register")} style={{ height: '48px', padding: '0 32px', borderRadius: '8px' }}>
                                    Create Account
                                </Button>
                            </>
                        )}
                    </Space>
                </Col>
                <Col xs={0} md={10}>
                    <div style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        width: '300px',
                        height: '300px',
                        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                        margin: '0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 20px 40px rgba(118, 75, 162, 0.3)'
                    }}>
                        <RocketOutlined style={{ fontSize: '100px', color: '#fff' }} />
                    </div>
                </Col>
            </Row>

            {/* Features Section */}
            <Row gutter={[24, 24]}>
                <Col xs={24} md={8}>
                    <Card className="glass-card" bordered={false} hoverable>
                        <SafetyCertificateOutlined style={{ fontSize: '32px', color: '#764ba2', marginBottom: '16px' }} />
                        <Title level={4}>Secure Storage</Title>
                        <Text type="secondary">Passwords are hashed using bcrypt and stored securely in MongoDB.</Text>
                    </Card>
                </Col>
                <Col xs={24} md={8}>
                    <Card className="glass-card" bordered={false} hoverable>
                        <RocketOutlined style={{ fontSize: '32px', color: '#667eea', marginBottom: '16px' }} />
                        <Title level={4}>JWT Auth</Title>
                        <Text type="secondary">State-of-the-art token-based authentication for modern web apps.</Text>
                    </Card>
                </Col>
                <Col xs={24} md={8}>
                    <Card className="glass-card" bordered={false} hoverable>
                        <UserOutlined style={{ fontSize: '32px', color: '#a29bfe', marginBottom: '16px' }} />
                        <Title level={4}>User Management</Title>
                        <Text type="secondary">Role-based access control and easy user administration interface.</Text>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default HomePage;