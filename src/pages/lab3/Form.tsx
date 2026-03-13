import { Form, Input, Button, Card } from "antd";
import { useState } from "react";

export default function App() {
  const [form] = Form.useForm();
  const [postData, setPostData] = useState<any>(null);

  const onLogin = (values: any) => {
    console.log("Login:", values);
  };

  const onRegister = (values: any) => {
    console.log("Register:", values);
  };

  const onProduct = (values: any) => {
    console.log("Product:", values);
  };

  const onPost = (values: any) => {
    setPostData(values);
  };

  return (
    <>
      {/* Bài 1 */}
      <Card title="Bài 1 - Login">
        <Form layout="vertical" onFinish={onLogin}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Email bắt buộc" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password bắt buộc" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {/* Bài 2 */}
      <Card title="Bài 2 - Register">
        <Form layout="vertical" onFinish={onRegister}>
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { type: "email", message: "Email sai định dạng" },
              { required: true }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Phone" name="phone">
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true },
              { min: 6, message: "Password tối thiểu 6 ký tự" }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label="Confirm Password" name="confirm">
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {/* Bài 3 */}
      <Card title="Bài 3 - Product">
        <Form layout="vertical" onFinish={onProduct}>
          <Form.Item label="Tên sản phẩm" name="name">
            <Input />
          </Form.Item>

          <Form.Item label="Giá" name="price">
            <Input />
          </Form.Item>

          <Form.Item label="Số lượng" name="quantity">
            <Input />
          </Form.Item>

          <Form.Item label="Mô tả" name="description">
            <Input.TextArea />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {/* Bài 4 */}
      <Card title="Bài 4 - Post">
        <Form layout="vertical" onFinish={onPost}>
          <Form.Item label="Title" name="title">
            <Input />
          </Form.Item>

          <Form.Item label="Slug" name="slug">
            <Input />
          </Form.Item>

          <Form.Item label="Content" name="content">
            <Input.TextArea />
          </Form.Item>

          <Form.Item label="Image URL" name="image">
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        {postData && (
          <>
            <h3>Kết quả sau khi submit</h3>
            <p>Title: {postData.title}</p>
            <p>Slug: {postData.slug}</p>
            <p>Content: {postData.content}</p>
            <img src={postData.image} width={200} />
          </>
        )}
      </Card>
    </>
  );
}