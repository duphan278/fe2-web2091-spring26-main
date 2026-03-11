import { useState } from "react";
import { Button, Modal, Form, Input } from "antd";

export default function AddUserModal() {
  const [open, setOpen] = useState(false);

  const onFinish = (values: any) => {
    console.log(values);
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add User
      </Button>

      <Modal
        title="Add User"
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>

          <Form.Item label="Role" name="role">
            <Input />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
}