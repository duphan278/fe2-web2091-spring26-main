import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";

const { Header, Sider, Content } = Layout;

const items: MenuProps["items"] = [
  { key: "1", label: "Dashboard" },
  { key: "2", label: "Users" },
];

const Dashboard = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <Menu theme="dark" mode="inline" items={items} />
      </Sider>

      <Layout>
        <Header style={{ color: "white", fontSize: 20 }}>
          Antd Dashboard
        </Header>

        <Content style={{ padding: 20 }}>
          Nội dung hiển thị ở đây
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;