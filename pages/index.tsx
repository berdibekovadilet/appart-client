import type { NextPage } from "next";
import Head from "next/head";
import Stories from "../components/Stories/Stories";
import Header from "../layout/Header/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Appart.kg</title>
        <meta
          name="description"
          content="Appart.kg - покупка и аренда недвижимости в Бишкеке, Кыргызстане"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className={styles.container}>
        <Stories />
      </div>
    </>
  );
};

export default Home;
