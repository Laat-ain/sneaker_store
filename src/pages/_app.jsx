import "@/styles/normalize.css";
import "@/styles/globals.css";
import React from "react";
import MainLayout from "../Layouts/MainLayout";
// // Importing the Bootstrap CSS
// import 'bootstrap/dist/css/bootstrap.min.css';

/* Корневой элемент страницы */
const App = ({ Component, pageProps }) => {

  return (
    // Добавить header
    
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>

    // добавить footer
  );
};

export default App;
