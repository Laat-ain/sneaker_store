import "@/styles/normalize.css";
import "@/styles/globals.css";
import React from "react";
import MainLayout from "../Layouts/MainLayout";
import ScrollToTopButton from "../components/UI/ScrollToTopButton/ScrollToTopButton";

/* Корневой элемент страницы */
const App = ({ Component, pageProps }) => {

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default App;
