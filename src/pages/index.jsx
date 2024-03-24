import Head from "next/head";
import React from "react";
import Link from "next/link";
import Slider from "../components/Slider/Slider";
import ProductLinks from "../components/ProductLinks/ProductLinks";
import Questions from "../components/Questions/Questions";

const navProductLinks = [
  { name: "men", text: "Мужчинам" },
  { name: "woman", text: "Женщинам" },
]

/* Домашнаяя страница */
const Home = () => (
  <>
    <Head>
      {/* добавить название */}
      <title>Название</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div className="container">
        {/* добавить props */}
        <Slider/>
        {/* посмотреть позже, т.к. там изображение */}
        <ProductLinks /> 
        <Questions/>
      </div>
    </main>
  </>
);

export default Home;
