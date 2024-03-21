import "@/styles/normalize.css";
import "@/styles/globals.css";
import React from "react";
import MainLayout from "../Layouts/MainLayout";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";

/* Корневой элемент страницы */
const App = ({ Component, pageProps }) => {

  return (
    // Добавить header
    
    <MainLayout>
      <ScrollToTopButton/>
      
      <Component {...pageProps} />
    </MainLayout>

    // добавить footer
  );
};

export default App;
