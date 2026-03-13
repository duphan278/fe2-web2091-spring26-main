import { Table, Tag, Button, Space } from "antd";

interface Product {
  key: number;
  id: number;
  name: string;
  price: number;
  category: string;
}

interface User {
  key: number;
  id: number;
  name: string;
  email: string;
  status: string;
}

export default function Dashboard() {

  // ===== PRODUCT TABLE =====
  const productColumns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Product Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
  ];

  const productData: Product[] = [
    { key: 1, id: 1, name: "Laptop", price: 1200, category: "Electronics" },
    { key: 2, id: 2, name: "Phone", price: 800, category: "Electronics" },
    { key: 3, id: 3, name: "Shoes", price: 100, category: "Fashion" },
    { key: 4, id: 4, name: "T-shirt", price: 30, category: "Fashion" },
    { key: 5, id: 5, name: "Watch", price: 200, category: "Accessories" },
  ];

  // ===== USER TABLE =====
  const userColumns = [
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

  const userData: User[] = [
    { key: 1, id: 1, name: "Nguyen Van A", email: "a@gmail.com", status: "active" },
    { key: 2, id: 2, name: "Tran Van B", email: "b@gmail.com", status: "inactive" },
  ];

  return (
    <div style={{ padding: 20 }}>

      {/* Bài 2 - Product Table 1 */}
      <h2>Product Table 1</h2>
      <Table
        columns={productColumns}
        dataSource={productData}
        pagination={{ pageSize: 3 }}
      />

      {/* Bài 2 - Product Table 2 */}
      <h2 style={{ marginTop: 40 }}>Product Table 2</h2>
      <Table
        columns={productColumns}
        dataSource={productData}
        pagination={{ pageSize: 3 }}
      />

      {/* Bài 3 - User Table */}
      <h2 style={{ marginTop: 40 }}>User Table</h2>
      <Table
        columns={userColumns}
        dataSource={userData}
      />

    </div>
  );
}