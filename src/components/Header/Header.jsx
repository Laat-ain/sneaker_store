import React from "react";
import styles from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

const Header = ({ navItems }) => {
  // Создаем массивы для каждого типа элементов
  const leftEdgeItems = [];
  const rightEdgeItems = [];
  const svgItems = [];

  // Разделяем элементы по типам
  navItems.forEach((item, index) => {
    if (item.type === "leftEdge") {
      leftEdgeItems.push(
        <Navigation key={index} name={item.name} text={item.text} />
      );
    } else if (item.type === "rightEdge") {
      rightEdgeItems.push(
        <Navigation key={index} name={item.name} text={item.text} />
      );
    } else if (item.type === "logoSite") {
      svgItems.push(
        <Navigation key={index} name={item.name} text={item.text} />
      );
    }
  });

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.navHeader}`}>
        <div className={`${styles.itemsFlex} ${styles.leftEdgeItems}`}>
          {leftEdgeItems}
        </div>
        <div className={styles.logo}>{svgItems}</div>
        <div className={`${styles.itemsFlex} ${styles.rightEdgeItems}`}>
          {rightEdgeItems}
        </div>
      </nav>
    </header>
  );
};

export default Header;
