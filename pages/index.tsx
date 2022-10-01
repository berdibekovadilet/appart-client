import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Header from "../layout/Header/Header";
import MainMenu from "../components/MainMenu/MainMenu";
import Stories from "../components/Stories/Stories";
import VipCottages from "../components/VipCottages/VipCottages";
import ButtonPrimary from "../components/ButtonPrimary/ButtonPrimary";
import Recommendation from "../components/Recommendation/Recommendation";
import HousingComplexes from "../components/HousingComplexes/HousingComplexes";
import HousingComplexes1 from "../components/HousingComplexes/HousingComplexes1";
import HousingComplexes2 from "../components/HousingComplexes/HousingComplexes2";

import { AvangardComplex } from "../data";

import styles from "../styles/Home.module.scss";

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
        <Link href="/adscreate">
          <ButtonPrimary>Создать объявление</ButtonPrimary>
        </Link>
        <Recommendation />
        <HousingComplexes1 />
        <HousingComplexes2 />
      </div>
    </>
  );
};

export default Home;
