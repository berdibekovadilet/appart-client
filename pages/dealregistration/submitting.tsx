import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Title from "../../components/Title/Title";
import { Button, Form, Input, Select } from "antd";
import styles from "./Dealregistration.module.scss";

const { Option } = Select;
const { TextArea } = Input;

const Submitting = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.container}>
      <PageHeader>Подача заявки</PageHeader>
      <Title size="h1">Подача заявки</Title>
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
            rules={[{ required: true, message: "Ваш номер телефона" }]}
          >
            <Input placeholder="Ваш номер телефона" size="large" />
          </Form.Item>
          <Form.Item
            name="Номер телефона"
            rules={[{ required: true, message: "Адрес объекта" }]}
          >
            <Input placeholder="Адрес объекта" size="large" />
          </Form.Item>
          <Form.Item name="objectType" rules={[{ required: true }]}>
            <Select allowClear placeholder="Тип объекта" size="large">
              <Option value="apartment">Квартира</Option>
              <Option value="house">Дом</Option>
              <Option value="plot">Участок</Option>
              <Option value="commercial">Коммерческая недвижимость</Option>
            </Select>
          </Form.Item>
          <Form.Item name="documentType" rules={[{ required: true }]}>
            <Select
              allowClear
              placeholder="Правоустанавливающий документ"
              size="large"
            >
              <Option value="buyDocument">Договор купли-продажи</Option>
              <Option value="giftDocument">Договор дарения</Option>
              <Option value="partDocument">Договор долевого участия</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <TextArea rows={4} placeholder="Описание сделки" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              className="marginBottom16"
            >
              Отправить заявку
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Submitting;
