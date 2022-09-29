import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Button, Form, Input } from "antd";
import { GoogleOutlined, AppleOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "./Login.module.scss";

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.container}>
      <PageHeader>Вход и регистрация</PageHeader>
      <div className={styles.fromWrapper}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
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
            <Input placeholder="Номер телефона" size="large" />
          </Form.Item>
          <Form.Item>
            <Link href="/login/enter">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                className="marginBottom16"
              >
                Продолжить
              </Button>
            </Link>
            <Button
              type="primary"
              danger
              block
              size="large"
              className="marginBottom16"
            >
              <GoogleOutlined /> Вход с Google
            </Button>
            <Button
              type="primary"
              size="large"
              style={{ background: "black", borderColor: "black" }}
              block
            >
              <AppleOutlined />
              Вход с Apple
            </Button>
          </Form.Item>
          <Form.Item>
            <Button size="large" type="link" block>
              Служба поддержки
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
