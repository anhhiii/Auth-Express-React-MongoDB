import { useEffect, useState } from "react";
import { getUserApi } from "../util/api";
import { notification, Table } from "antd";

const UserPage = () => {
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await getUserApi();
            if (!res.message) {
                setDataSource(res);
            } else {
                notification.error({
                    message: "Unauthorized",
                    description: res.message
                });
            }
        };
        fetchUser();
    }, []);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        },
    ];

    return (
        <div style={{ padding: "30px" }}>
            <Table
                dataSource={dataSource}
                columns={columns}
                bordered
                rowKey={"_id"}
            />
        </div>
    );
};

export default UserPage;