import Head from "next/head";
import { Form, Select, Segmented, Input, Space, Button } from "antd";
import PageHeader from "../components/PageHeader/PageHeader";
import Title from "../components/Title/Title";
import styles from "../styles/Search.module.scss";

const { Option } = Select;

const Search = () => {
  return (
    <>
      <Head>
        <title>Создать объявление | Appart.kg</title>
        <meta
          name="description"
          content="Appart.kg - оформление сделок недвижимости в Бишкеке, Кыргызстане"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.container}>
        <PageHeader>Поиск</PageHeader>
        <div className={styles.row}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            autoComplete="on"
          >
            <Form.Item name="city" rules={[{ required: true }]}>
              <Select allowClear placeholder="Выберите город" size="large">
                <Option value="1">Бишкек</Option>
                <Option value="2">Ош</Option>
                <Option value="3">Иссык-Куль</Option>
                <Option value="4">Кант</Option>
                <Option value="5">Токмок</Option>
                <Option value="6">Кара-Балта</Option>
              </Select>
            </Form.Item>
            <Form.Item name="district" rules={[{ required: true }]}>
              <Select allowClear placeholder="Выберите район" size="large">
                <Option value="1">Асанбай</Option>
                <Option value="2">12 мкр</Option>
              </Select>
            </Form.Item>
            <Form.Item name="typeOfAds" rules={[{ required: true }]}>
              <Segmented
                size="large"
                options={["Купить", "Снять", "Посуточно"]}
              />
            </Form.Item>
            <Form.Item name="typeOfProperty" rules={[{ required: true }]}>
              <Select
                allowClear
                placeholder="Выберите тип недвижимости"
                size="large"
              >
                <Option value="1">Квартира</Option>
                <Option value="2">Частный дом</Option>
                <Option value="3">Коммерческая надвижимость</Option>
                <Option value="4">Участок</Option>
                <Option value="5">Вилла</Option>
              </Select>
            </Form.Item>
            <Form.Item name="numberOfRoom" rules={[{ required: true }]}>
              <Segmented
                size="large"
                options={["1", "2", "3", "4", "5", "6+"]}
              />
            </Form.Item>
            <Form.Item
              name="price"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Title size="h3">Цена</Title>
              <Space size="large">
                <Input placeholder="От" size="large" type="number" />
                <Input placeholder="До" size="large" type="number" />
              </Space>
            </Form.Item>
            <Form.Item
              name="currency"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Space size="large">
                <Segmented size="large" options={["сом", "usd"]} />
                <Segmented size="large" options={["За всё", "За м2"]} />
              </Space>
            </Form.Item>
            <Form.Item
              name="area"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Title size="h3">Общая площадь, м2</Title>
              <Space size="large">
                <Input placeholder="От" size="large" type="number" />
                <Input placeholder="До" size="large" type="number" />
              </Space>
            </Form.Item>
          </Form>
          <div className={styles.row}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              className="marginBottom16"
            >
              Найти
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
