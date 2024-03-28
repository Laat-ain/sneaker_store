import React from "react";
import styles from "./Footer.module.css";
import Navigation from "../Navigation/Navigation";

const Footer = ({ navItems }) => {
  const leftEdgeItems = [];
  const rightEdgeItems = [];

  navItems.forEach((item, index) => {
    if (item.type === "leftEdge") {
      leftEdgeItems.push(
        item.name === "text" ? (
          <span> {item.text} </span>
        ) : (
          <Navigation key={index} name={item.name} text={item.text} />
        )
      );
    } else if (item.type === "rightEdge") {
      rightEdgeItems.push(
        item.name === "text" ? (
          <span> {item.text} </span>
        ) : (
          <Navigation key={index} name={item.name} text={item.text} />
        )
      );
    }
  });

  return (
    <>
      <footer className={styles.footer}>
        <div className={`container`}>
          <div className={styles.flex}>
            <div className={styles.leftEdgeItems}>{leftEdgeItems}</div>

            <div className={`${styles.rightEdgeItems}`}>{rightEdgeItems}</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
