import { Table } from "antd";

interface User {
  key: number;
  name: string;
  email: string;
  role: string;
}

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Role",
    dataIndex: "role",
  },
];

const data: User[] = [
  {
    key: 1,
    name: "Nguyen Van A",
    email: "a@gmail.com",
    role: "Admin",
  },
  {
    key: 2,
    name: "Tran Van B",
    email: "b@gmail.com",
    role: "User",
  },
];

export default function UserTable() {
  return <Table columns={columns} dataSource={data} />;
}