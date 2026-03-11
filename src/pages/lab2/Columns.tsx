import { Table, Tag, Button, Space } from "antd";

interface User {
  key: number;
  id: number;
  name: string;
  email: string;
  status: string;
}

export default function UserTable() {

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => (
        <Tag color={status === "active" ? "green" : "red"}>
          {status}
        </Tag>
      ),
    },
    {
      title: "Action",
      render: () => (
        <Space>
          <Button type="primary">Edit</Button>
          <Button danger>Delete</Button>
        </Space>
      ),
    },
  ];

  const data: User[] = [
    {
      key: 1,
      id: 1,
      name: "Nguyen Van A",
      email: "a@gmail.com",
      status: "active",
    },
    {
      key: 2,
      id: 2,
      name: "Tran Van B",
      email: "b@gmail.com",
      status: "inactive",
    },
  ];

  return <Table columns={columns} dataSource={data} />;
}