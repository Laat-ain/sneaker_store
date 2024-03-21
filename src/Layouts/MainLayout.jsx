import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

/* Обертка контента основной страницы */
const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="p-4 bg-slate-400">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
