import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Button, Form, Input } from "antd";
import { GoogleOutlined, AppleOutlined } from "@ant-design/icons";
import Title from "../../components/Title/Title";
import styles from "./Login.module.scss";

const Enter: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.container}>
      <PageHeader>Вход и регистрация</PageHeader>
      <div className={styles.info}>
        <Title size="h2">Подтверждение входа</Title>
        <p>
          Подтвердите номер телефона <br /> <b>+996 (0702) 010-203</b> введите
          код из смс
        </p>
      </div>
      <Button size="large" type="link" block className="marginBottom16">
        Изменить номер
      </Button>
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
          name="Введите код"
          rules={[{ required: true, message: "Пожалуйста введите код!" }]}
        >
          <Input placeholder="Введите код" size="large" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            block
            className="marginBottom16"
          >
            Войти
          </Button>
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
  );
};

export default Enter;
