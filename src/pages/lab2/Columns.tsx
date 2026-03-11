import { Table } from "antd";

interface Student {
  key: number;
  id: number;
  name: string;
  age: number;
  major: string;
}

export default function Dashboard() {

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
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Major",
      dataIndex: "major",
    },
  ];

  const data: Student[] = [
    {
      key: 1,
      id: 1,
      name: "Nguyen Van A",
      age: 20,
      major: "Information Technology",
    },
    {
      key: 2,
      id: 2,
      name: "Tran Van B",
      age: 21,
      major: "Business",
    },
    {
      key: 3,
      id: 3,
      name: "Le Van C",
      age: 22,
      major: "Design",
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Student List</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}