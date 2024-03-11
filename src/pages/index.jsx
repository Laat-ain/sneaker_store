import Head from "next/head";
import React from "react";
import Link from "next/link";

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
        <h1>Добро пожаловать на стартовую страницу</h1>
      </div>

      <Link href="/shoes">На About</Link>
    </main>
  </>
);

export default Home;
