import React, { useContext, useState } from 'react';
import { Button, Col, Divider, Form, Input, notification, Row, Card, Typography } from 'antd';
import { loginApi } from '../util/api';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const LoginPage = () => {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        const { email, password } = values;
        const res = await loginApi(email, password);
        setLoading(false);
        if (res && res.EC === 0) {
            localStorage.setItem("access_token", res.access_token);
            setAuth({ isAuthenticated: true, user: { email: res?.user?.email, name: res?.user?.name } });
            notification.success({ message: "Welcome Back!", description: "Login successful." });
            navigate("/");
        } else {
            notification.error({ message: "Login Failed", description: res?.EM ?? "Invalid credentials" });
        }
    };

    return (
        <Row justify={"center"} align={"middle"} style={{ minHeight: 'calc(100vh - 120px)' }}>
            <Col xs={22} sm={16} md={12} lg={8}>
                <Card className="glass-card fade-in" style={{ padding: '20px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <Title level={2} style={{ marginBottom: '8px' }}>Sign In</Title>
                        <Text type="secondary">Welcome back! Please enter your details.</Text>
                    </div>
                    <Form onFinish={onFinish} layout='vertical' size="large">
                        <Form.Item 
                            label="Email" 
                            name="email" 
                            rules={[{ required: true, message: 'Please input email!' }, { type: 'email', message: 'Invalid email format' }]}
                        >
                            <Input prefix={<MailOutlined style={{ color: '#bfbfbf' }} />} placeholder="your@email.com" />
                        </Form.Item>
                        <Form.Item 
                            label="Password" 
                            name="password" 
                            rules={[{ required: true, message: 'Please input password!' }]}
                        >
                            <Input.Password prefix={<LockOutlined style={{ color: '#bfbfbf' }} />} placeholder="••••••••" />
                        </Form.Item>
                        <Form.Item style={{ marginTop: '32px' }}>
                            <Button type="primary" htmlType="submit" block loading={loading} style={{ height: '45px', borderRadius: '8px' }}>
                                Sign In
                            </Button>
                        </Form.Item>
                    </Form>
                    <Divider plain>Or</Divider>
                    <div style={{ textAlign: "center" }}>
                        Don't have an account? <Link to={"/register"} style={{ fontWeight: 600 }}>Create one now</Link>
                    </div>
                </Card>
            </Col>
        </Row>
    );
};

export default LoginPage;