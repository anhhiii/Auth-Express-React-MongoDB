import { Row, Col, Typography } from 'antd';

const { Title } = Typography;

const HomePage = () => {
    return (
        <div style={{ padding: "30px", textAlign: "center" }}>
            <Row justify="center">
                <Col>
                    <Title level={1}>Welcome to JSON Web Token</Title>
                    <p>This page is only accessible to logged-in users.</p>
                </Col>
            </Row>
        </div>
    );
};

export default HomePage;