import React from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTopButton from "../components/UI/ScrollToTopButton/ScrollToTopButton";

/* Обертка контента основной страницы */
const MainLayout = ({ children }) => {
  const svgLogo = (
    <Image src="/svg/logo.svg" alt="logo" width="180" height="20" />
  );
  const svgLike = (
    <Image src="/svg/like.svg" alt="Like" height="28" width="28"  />
  );
  const svgShoppingСart = (
    <Image src="/svg/shoppingСart.svg" alt="ShoppingСart" width="28" height="28" />
  );
  const svgDMode = (
    <Image src="/svg/dMode.svg" alt="gDMode" width="28" height="28" />
  );
  const svgNMode = (
    <Image src="/svg/nMode.svg" alt="NMode" width="28" height="28" />
  );

  const navItemsHeader = [
    { type: "leftEdge", name: "man", text: "Мужчинам" },
    { type: "leftEdge", name: "woman", text: "Женщинам" },
    { type: "leftEdge", name: "about", text: "Другое" },

    { type: "logoSite", name: "logoSite", text: svgLogo },

    { type: "rightEdge", name: "like", text: svgLike },
    { type: "rightEdge", name: "shoppingСart", text: svgShoppingСart },
    { type: "rightEdge", name: "d/nMode", text: svgNMode },
  ];

  return (
    <>
      <Header navItems={navItemsHeader} />
      <div>{children}</div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default MainLayout;
