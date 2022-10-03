import React, { useState } from "react";
import Head from "next/head";

import {
  Button,
  Form,
  Input,
  Segmented,
  Select,
  Cascader,
  message,
  Upload,
  Space,
} from "antd";
import type { UploadProps } from "antd";
import { CameraOutlined } from "@ant-design/icons";
import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";

import PageHeader from "../../components/PageHeader/PageHeader";
import Title from "../../components/Title/Title";
import IconCard from "../../components/IconCard/IconCard";

import { adType, propertyType, comfortItems } from "../../data";
import styles from "./Adscreate.module.scss";

const { Option } = Select;
const { Dragger } = Upload;
const { TextArea } = Input;

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const options: Option[] = [
  {
    value: "heating",
    label: "Отопление",
    children: [
      {
        value: "central",
        label: "Центральное",
      },
      {
        value: "gasHeating",
        label: "Газовое",
      },
      {
        value: "electric",
        label: "Электрическая",
      },
      {
        value: "combined",
        label: "Комбинированная",
      },
      {
        value: "solidFuel",
        label: "Твердое топливо",
      },
    ],
  },
  {
    value: "waterSupply",
    label: "Водопровод",
    children: [
      {
        value: "exist",
        label: "Есть",
      },
      {
        value: "NotExist",
        label: "Нет",
      },
    ],
  },
  {
    value: "gas",
    label: "Газ",
    children: [
      {
        value: "exist",
        label: "Есть",
      },
      {
        value: "NotExist",
        label: "Нет",
      },
    ],
  },
  {
    value: "sewerage",
    label: "Канализация",
    children: [
      {
        value: "exist",
        label: "Есть",
      },
      {
        value: "NotExist",
        label: "Нет",
      },
    ],
  },
];

const Objectcreate: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
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
        <PageHeader>Создать объявление</PageHeader>
        <Title size="h2">Новое объявление</Title>
        <div className={styles.cardWrapper}>
          {adType.map((item) => (
            <div key={item.id}>
              <IconCard title={item.title} icon={item.icon} id={item.id} />
            </div>
          ))}
        </div>
        <div className={styles.row}>
          <Title size="h3">Выберите тип недвижимости</Title>
          <div className={styles.cardWrapper}>
            {propertyType.map((item) => (
              <div key={item.id}>
                <IconCard title={item.title} icon={item.icon} id={item.id} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.adressTitle}>
            <Title size="h3">Адрес:</Title>
            <button>Бишкек</button>
          </div>
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
              name="adress"
              rules={[
                {
                  required: true,
                  message: "Укажите адрес или название ЖК",
                },
              ]}
            >
              <Input
                placeholder="Укажите адрес или название ЖК"
                size="large"
                type="adress"
              />
            </Form.Item>
          </Form>
        </div>
        <YMaps query={{ apikey: "26627679-7264-4409-98a4-22eb522d227d" }}>
          <div className={styles.mapWrapper}>
            <Map
              width="100%"
              height="300px"
              defaultState={{ center: [42.87, 74.6], zoom: 12 }}
            />
          </div>
        </YMaps>
        <div className={styles.row}>
          <Title size="h3">Об объекте</Title>
          <h3 style={{ marginRight: 8 }}>Количество комнат:</h3>
          <Segmented size="large" options={["1", "2", "3", "4", "5", "6+"]} />
          <div className={styles.row}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="on"
            >
              <Form.Item name="series" rules={[{ required: true }]}>
                <Select allowClear placeholder="Серия" size="large">
                  <Option value="104">104 серия</Option>
                  <Option value="105">105 серия</Option>
                  <Option value="105b">105 улучшенная</Option>
                  <Option value="106">106 серия</Option>
                  <Option value="106b">106 улучшенная</Option>
                  <Option value="stalinka">Сталинка</Option>
                  <Option value="khrushchevka">Хрущевка</Option>
                  <Option value="individual">Индивидуалка</Option>
                  <Option value="elite">Элитка</Option>
                </Select>
              </Form.Item>
              <Form.Item name="houseStatus" rules={[{ required: true }]}>
                <Select allowClear placeholder="Статус дома" size="large">
                  <Option value="done">Сдан в эксплуатацию</Option>
                  <Option value="build">Строится</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="buildYear"
                rules={[
                  {
                    required: true,
                    message: "Укажите год постройки",
                  },
                ]}
              >
                <Input placeholder="Год постройки" size="large" type="number" />
              </Form.Item>
              <Form.Item name="houseMaterials" rules={[{ required: true }]}>
                <Select
                  allowClear
                  placeholder="Материал постройки"
                  size="large"
                >
                  <Option value="brick">Кирпичный</Option>
                  <Option value="panel">Панельный</Option>
                  <Option value="monolithic">Монолитный</Option>
                </Select>
              </Form.Item>
              <Form.Item name="floor" rules={[{ required: true }]}>
                <Select allowClear placeholder="Этаж" size="large">
                  <Option value="basement">Цокольный</Option>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                  <Option value="6">6</Option>
                  <Option value="7">7</Option>
                  <Option value="8">8</Option>
                  <Option value="9">9</Option>
                  <Option value="10">10</Option>
                  <Option value="11">11</Option>
                  <Option value="12">12</Option>
                  <Option value="13">13</Option>
                  <Option value="14">14</Option>
                  <Option value="15">15</Option>
                  <Option value="16">16</Option>
                  <Option value="17">17</Option>
                  <Option value="18">18</Option>
                  <Option value="19">19</Option>
                  <Option value="20">20</Option>
                  <Option value="21">21</Option>
                  <Option value="22">22</Option>
                  <Option value="23">23</Option>
                  <Option value="24">24</Option>
                  <Option value="25">25</Option>
                </Select>
              </Form.Item>
              <Form.Item name="totalFloors" rules={[{ required: true }]}>
                <Select allowClear placeholder="Всего этажей" size="large">
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                  <Option value="6">6</Option>
                  <Option value="7">7</Option>
                  <Option value="8">8</Option>
                  <Option value="9">9</Option>
                  <Option value="10">10</Option>
                  <Option value="11">11</Option>
                  <Option value="12">12</Option>
                  <Option value="13">13</Option>
                  <Option value="14">14</Option>
                  <Option value="15">15</Option>
                  <Option value="16">16</Option>
                  <Option value="17">17</Option>
                  <Option value="18">18</Option>
                  <Option value="19">19</Option>
                  <Option value="20">20</Option>
                  <Option value="21">21</Option>
                  <Option value="22">22</Option>
                  <Option value="23">23</Option>
                  <Option value="24">24</Option>
                  <Option value="25">25</Option>
                </Select>
              </Form.Item>
              <Form.Item name="balcony" rules={[{ required: true }]}>
                <Select allowClear placeholder="Балкон" size="large">
                  <Option value="noBalcony">Нет балкона</Option>
                  <Option value="haveBalcony">Есть балкон</Option>
                  <Option value="glazedBalcony">Застекленный балкон</Option>
                  <Option value="loggia">Лоджия</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Cascader options={options} placeholder="Коммуникации" />
              </Form.Item>
              <Form.Item name="territory" rules={[{ required: true }]}>
                <Select allowClear placeholder="Территория" size="large">
                  <Option value="closed">Закрытая</Option>
                  <Option value="open">Открытая</Option>
                  <Option value="guarded">Охраняемая</Option>
                  <Option value="videoSurveillance">С видеонаблюдением</Option>
                </Select>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className={styles.row}>
          <Title size="h3">Площадь</Title>
          <Form>
            <Form.Item
              name="totalArea"
              rules={[
                {
                  required: true,
                  message: "Укажите общую площадь, м2",
                },
              ]}
            >
              <Input
                placeholder="Общая площадь, м2"
                size="large"
                type="number"
              />
            </Form.Item>
            <Form.Item
              name="livingArea"
              rules={[
                {
                  required: true,
                  message: "Укажите жилую площадь, м2",
                },
              ]}
            >
              <Input
                placeholder="Жилая площадь, м2"
                size="large"
                type="number"
              />
            </Form.Item>
            <Form.Item
              name="kitchenArea"
              rules={[
                {
                  required: true,
                  message: "Укажите площадь кухни, м2",
                },
              ]}
            >
              <Input
                placeholder="Площадь кухни, м2"
                size="large"
                type="number"
              />
            </Form.Item>
          </Form>
        </div>
        <div className={styles.row}>
          <Title size="h3">Документы</Title>
          <Form>
            <Form.Item name="legalDocument" rules={[{ required: true }]}>
              <Select
                allowClear
                placeholder="Правоустанавливающий документ"
                size="large"
              >
                <Option value="buyDocument">Договор купли-продажи</Option>
                <Option value="partDocument">Договор долевого участия</Option>
                <Option value="giftDocument">Договор дарения</Option>
                <Option value="powerAttorney">Генеральная доверенность</Option>
                <Option value="techPassport">Тех паспорт</Option>
                <Option value="redBook">Красная книга</Option>
                <Option value="greenBook">Зеленая книга</Option>
              </Select>
            </Form.Item>
          </Form>
        </div>
        <div className={styles.row}>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <CameraOutlined />
            </p>
            <p className="ant-upload-text">Добавить фото</p>
          </Dragger>
        </div>
        <div className={styles.row}>
          <Title size="h3">Удобства и подробности</Title>
          <Form.Item>
            <TextArea rows={4} placeholder="Опишите недвижимость" />
          </Form.Item>
          <h3>Состояние</h3>
          <Form>
            <Form.Item name="repairType" rules={[{ required: true }]}>
              <Select allowClear placeholder="Тип ремонта" size="large">
                <Option value="noRepair">Без ремонта</Option>
                <Option value="oldRepair">Старый ремонт</Option>
                <Option value="cosmeticRepair">Косметический ремонт</Option>
                <Option value="euroRepair">Евро ремонт</Option>
                <Option value="designerRepair">Дизайнерский ремонт</Option>
              </Select>
            </Form.Item>
          </Form>
          <div className={styles.cardWrapper}>
            {comfortItems.map((item) => (
              <div key={item.id}>
                <IconCard title={item.title} icon={item.icon} id={item.id} />
              </div>
            ))}
          </div>
          <div className={styles.row}>
            <Title size="h3">Цена</Title>
            <Form>
              <Form.Item
                name="kitchenArea"
                rules={[
                  {
                    required: true,
                    message: "Напишите цену",
                  },
                ]}
              >
                <Input placeholder="Напишите цену" size="large" type="number" />
              </Form.Item>
              <Space size="large">
                <Segmented size="large" options={["сом", "usd"]} />
                <Segmented size="large" options={["За всё", "За м2"]} />
              </Space>
            </Form>
          </div>
        </div>
        <div className={styles.row}>
          <Title size="h3">Контакты</Title>
          <Segmented
            size="large"
            options={["Собственник", "Агент", "Агенство"]}
          />
          <div className={styles.row}>
            <Form>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Ваше имя",
                  },
                ]}
              >
                <Input placeholder="Ваше имя" size="large" type="text" />
              </Form.Item>
              <Form.Item
                name="telephone"
                rules={[
                  {
                    required: true,
                    message: "Номер телефона",
                  },
                ]}
              >
                <Input
                  placeholder="Номер телефона"
                  size="large"
                  type="number"
                />
              </Form.Item>
              <Segmented
                size="large"
                options={["Только звонки", "Звонки и сообщения"]}
              />
            </Form>
          </div>
        </div>
        <div className={styles.row}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            block
            className="marginBottom16"
          >
            Подать объявление
          </Button>
        </div>
      </div>
    </>
  );
};

export default Objectcreate;
