import { Form, Input, Button } from "antd";

interface User{
    name:string,
    email:string,
    password:string
}
const Register = () => {
    const onFinish = (values: User) => {
      console.log(values);
    };
    return (
        <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter name" }]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter email" }]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter password" }]}
          >
            <Input.Password />
          </Form.Item>
    
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      );
    };
    
    export default Register;