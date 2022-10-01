import React from "react";
import Head from "next/head";

import { Button, Form, Input } from "antd";
import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";

import PageHeader from "../../components/PageHeader/PageHeader";
import Title from "../../components/Title/Title";
import IconCard from "../../components/IconCard/IconCard";

import { adType, propertyType } from "../../data";
import styles from "./Adscreate.module.scss";

const Objectcreate = () => {
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
              name="Адрес или название ЖК"
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
      </div>
    </>
  );
};

export default Objectcreate;
