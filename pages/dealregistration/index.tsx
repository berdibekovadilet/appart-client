import { Button, Divider } from "antd";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Title from "../../components/Title/Title";
import styles from "./Dealregistration.module.scss";

const Dealregistration = () => {
  return (
    <>
      <Head>
        <title>Оформление сделок | Appart.kg</title>
        <meta
          name="description"
          content="Appart.kg - оформление сделок недвижимости в Бишкеке, Кыргызстане"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={styles.container}>
        <PageHeader>Оформление сделок</PageHeader>
        <Title size="h1">Оформление сделок</Title>
        <p style={{ marginBottom: "16px" }}>
          Операции с недвижимостью - дело ответственное и достаточно хлопотное.
          Разновидностей сделок - немалое количество. Как же нужно действовать,
          когда вы уже определились с покупкой либо продажей, дарением либо
          обменом недвижимости?
        </p>
        <Link href="/dealregistration/submitting">
          <Button type="primary" size="large" block>
            Заказать сопровождение сделок
          </Button>
        </Link>
        <div className={styles.content}>
          <Title size="h3">Виды сделок с недвижимостью:</Title>
          <p>- Купля-продажа за наличный расчет</p>
          <p>- Гос. Ипотека</p>
        </div>
        <Title size="h3">Купля-продажа за наличный расчет</Title>
        <p style={{ marginBottom: "16px" }}>
          Итак, сделка готова состояться - две стороны, собственник и
          приобретатель, в наличии. Все договора по отчуждению недвижимости
          заключаются и заверяются в органах нотариата. А учёт всех земельных
          участков, домов и квартир, а также контроль за всеми операции с этими
          объектами, осуществляется в Главном Управлении по землеустройству и
          регистрации прав на недвижимое имущество Кыргызской Республики
          (сокращённо - Госрегистр). В регионах непосредственную работу
          осуществляют местные регистрационные органы - областные, городские,
          районные управления Госрегистра. Все юридические действия с объектами
          недвижимости в обязательном порядке удостоверяются и заверяются
          органами нотариата - нотариальными конторами, как государственными,
          так и частными.
        </p>
        <Title size="h3">
          Шаг 1. Подтверждение права собственности владельца
        </Title>
        <p>
          Прежде чем направиться к нотариусу для заключения сделки, вы, как
          собственник, должны подготовить ряд документов в подтверждение того
          факта, что данный объект принадлежит вам по праву: 1. Справку о
          зарегистрированном праве на отчуждаемое недвижимое имущество. Этот
          документ отражает право заявителя на объект, наличие обременений и
          ограничений. На основании этого подтверждения нотариус принимает
          сделку к исполнению. 2. Технический паспорт объекта. Он имеется на
          руках у каждого владельца недвижимости, но следует помнить, что срок
          годности техпаспорта любого объекта - 1 год. Поэтому, если срок
          годности старого истёк, перед любой сделкой нужно его обновить
          (получить заново). Что такое обременения и ограничения? Это
          юридические действия в отношении данного объекта. Если квартира или
          дом находится в залоге (по договору залога); или на объект наложен
          арест (по решению компетентных органов); то эти факты обязательно
          будут отражены в «Справке о зарегистрированном праве...». Для
          получения этих важных документов необходимо обратиться в местный
          регистрационный орган, в Бишкеке это - Бишкекское Городское Управление
          по Землеустройству и Регистрации Прав на Недвижимое Имущество (БГУ по
          ЗРПНИ). БГУ по ЗРПНИ Адрес: г. Бишкек, пр. Мира, д. 1 Рабочие дни:
          понедельник - пятница, 8:30 - 17:30 Обеденный перерыв: 12:00 - 13:00
          Выходные: суббота, воскресенье
        </p>
      </div>
    </>
  );
};

export default Dealregistration;
