import type { NextPage } from "next";
import Head from "next/head";
import Header from "../layout/Header/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Appart.kg</title>
        <meta
          name="description"
          content="Appart.kg - покупка и аренда недвижимости в Бишкеке, Кыргызстане"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
};

export default Home;
