import React, { useState } from 'react';
import { Button, Col, Divider, Form, Input, notification, Row, Card, Typography } from 'antd';
import { createUserApi } from '../util/api';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined, UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const RegisterPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        const { name, email, password } = values;
        const res = await createUserApi(name, email, password);
        setLoading(false);
        if (res && !res.message) {
            notification.success({ message: "Registration Successful", description: "You can now log in." });
            navigate("/login");
        } else {
            notification.error({ message: "Registration Failed", description: res?.message ?? "Error" });
        }
    };

    return (
        <Row justify={"center"} align={"middle"} style={{ minHeight: 'calc(100vh - 120px)' }}>
            <Col xs={22} sm={16} md={12} lg={8}>
                <Card className="glass-card fade-in" style={{ padding: '20px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <Title level={2} style={{ marginBottom: '8px' }}>Create Account</Title>
                        <Text type="secondary">Join us and start managing your users today.</Text>
                    </div>
                    <Form onFinish={onFinish} layout='vertical' size="large">
                        <Form.Item label="Full Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                            <Input prefix={<UserOutlined style={{ color: '#bfbfbf' }} />} placeholder="John Doe" />
                        </Form.Item>
                        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input email!' }, { type: 'email', message: 'Invalid email' }]}>
                            <Input prefix={<MailOutlined style={{ color: '#bfbfbf' }} />} placeholder="your@email.com" />
                        </Form.Item>
                        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input password!' }, { min: 6, message: 'Min 6 characters' }]}>
                            <Input.Password prefix={<LockOutlined style={{ color: '#bfbfbf' }} />} placeholder="••••••••" />
                        </Form.Item>
                        <Form.Item style={{ marginTop: '32px' }}>
                            <Button type="primary" htmlType="submit" block loading={loading} style={{ height: '45px', borderRadius: '8px' }}>
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                    <Divider plain>Already have an account?</Divider>
                    <div style={{ textAlign: "center" }}>
                        <Link to={"/login"} style={{ fontWeight: 600 }}>Sign In here</Link>
                    </div>
                    <div style={{ textAlign: "center", marginTop: '20px' }}>
                        <Link to={"/"}><ArrowLeftOutlined /> Back to Home</Link>
                    </div>
                </Card>
            </Col>
        </Row>
    );
};

export default RegisterPage;
