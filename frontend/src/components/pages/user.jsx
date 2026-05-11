import { useEffect, useState } from "react";
import { getUserApi } from "../util/api";
import { notification, Table, Card, Typography, Tag, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const UserPage = () => {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            const res = await getUserApi();
            setLoading(false);
            if (!res.message) {
                setDataSource(res);
            } else {
                notification.error({
                    message: "Unauthorized Access",
                    description: res.message
                });
            }
        };
        fetchUser();
    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <Text strong>{text}</Text>
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            render: (role) => (
                <Tag color={role === 'Admin' ? 'volcano' : 'geekblue'}>
                    {role?.toUpperCase()}
                </Tag>
            )
        },
    ];

    return (
        <div style={{ padding: "40px 24px", maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ marginBottom: '24px' }}>
                <Space align="center" size="middle">
                    <div style={{ background: '#764ba2', padding: '12px', borderRadius: '12px' }}>
                        <UserOutlined style={{ fontSize: '24px', color: '#fff' }} />
                    </div>
                    <div>
                        <Title level={2} style={{ margin: 0 }}>User Management</Title>
                        <Text type="secondary">View and manage all registered users in the system.</Text>
                    </div>
                </Space>
            </div>
            
            <Card className="glass-card" bordered={false}>
                <Table
                    dataSource={dataSource}
                    columns={columns}
                    loading={loading}
                    rowKey={"_id"}
                    pagination={{ pageSize: 8 }}
                />
            </Card>
        </div>
    );
};

export default UserPage;