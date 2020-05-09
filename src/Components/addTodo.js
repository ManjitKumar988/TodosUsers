import { Form, Input, DatePicker } from "antd";
import React from "react";

export const todoForm = (
  <>
    <Form.Item label="Action: " name="todo">
      <Input placeholder="Action" />
    </Form.Item>
    <Form.Item
      label="DateAdded"
      name="dateAdded"
      rules={[{ required: true, message: "Please Enter Date" }]}
    >
      <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
    </Form.Item>
  </>
);
