import React from "react";
import Router from "next/router";
import styles from "../styles/Login.module.css";
import { PageHeader, Button, Form, Input } from "antd";
import { GoogleOutlined, AppleOutlined } from "@ant-design/icons";

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onBack = () => {};
  return (
    <div className={styles.container}>
      <PageHeader
        className="site-page-header"
        onBack={() => Router.back()}
        title="Вход и регистрация"
      />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <Form.Item
          name="Номер телефона"
          rules={[
            { required: true, message: "Пожалуйста введите номер телефона!" },
          ]}
        >
          <Input placeholder="Номер телефона" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            className="marginBottom16"
          >
            Продолжить
          </Button>
          <Button type="primary" danger block className="marginBottom16">
            <GoogleOutlined /> Вход с Google
          </Button>
          <Button
            type="primary"
            style={{ background: "black", borderColor: "black" }}
            block
          >
            <AppleOutlined />
            Вход с Apple
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="link" block>
            Служба поддержки
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;