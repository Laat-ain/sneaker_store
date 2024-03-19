import Head from "next/head";
import React from "react";
import Link from "next/link";
import Slider from "../components/Slider/Slider";

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
        <Slider/>
        
        <h1>Добро пожаловать на стартовую страницу</h1>
        <h1>Добро пожаловать на стартовую страницу</h1>
        <h1>Добро пожаловать на стартовую страницу</h1>
        <h1>Добро пожаловать на стартовую страницу</h1>
        <h1>Добро пожаловать на стартовую страницу</h1>
        <h1>Добро пожаловать на стартовую страницу</h1>
        <h1>Добро пожаловать на стартовую страницу</h1>
        <h1>Добро пожаловать на стартовую страницу</h1>
        <h1>Добро пожаловать на стартовую страницу</h1>
        <h1>Добро пожаловать на стартовую страницу</h1>

      </div>
    </main>
  </>
);

export default Home;
