import React from "react";
import Head from "next/head";

import PageHeader from "../../components/PageHeader/PageHeader";
import Title from "../../components/Title/Title";
import IconCard from "../../components/IconCard/IconCard";

import { adType, propertyType } from "../../data";
import styles from "./Adscreate.module.scss";

const Objectcreate = () => {
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
          <Title size="h3">Адрес</Title>
          <div className={styles.cardWrapper}></div>
        </div>
      </div>
    </>
  );
};

export default Objectcreate;
