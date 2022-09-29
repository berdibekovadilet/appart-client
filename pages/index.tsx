import Header from "../layout/Header/Header";
import MainMenu from "../components/MainMenu/MainMenu";
import Stories from "../components/Stories/Stories";

import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.scss";
import VipCottages from "../components/VipCottages/VipCottages";
import ButtonPrimary from "../components/ButtonPrimary/ButtonPrimary";
import Recommendation from "../components/Recommendation/Recommendation";
import HousingComplexes1 from "../components/HousingComplexes/HousingComplexes1";
import HousingComplexes2 from "../components/HousingComplexes/HousingComplexes2";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Appart.kg</title>
        <meta
          name="description"
          content="Appart.kg - покупка и аренда недвижимости в Бишкеке, Кыргызстане"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <div className={styles.container}>
        <Stories />
        <MainMenu />
        <VipCottages />
        <ButtonPrimary>Создать объявление</ButtonPrimary>
        <Recommendation />
        <HousingComplexes1 />
        <HousingComplexes2 />
      </div>
    </>
  );
};

export default Home;
