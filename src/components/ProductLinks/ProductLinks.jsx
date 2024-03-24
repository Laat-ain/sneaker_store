import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./ProductLinks.module.css";
import Navigation from "../Navigation/Navigation";

const ProductLinks = ({ navLinks }) => {
  /* const navProductLinks = [
    { name: "men", text: "Мужчинам" },
    { name: "woman", text: "Женщинам" },
  ]
   */
  return (
    <>
      <div className={styles.productLinks}>
        <div className={styles.woman}>
          <Navigation /* key={index}  */ name="men" text="Мужчинам" />
          {/* <a onClick={() => onClickHandler("/catalog")}>woman</a> */}
        </div>
        <div className={styles.man}>
          <Navigation /* key={index} */ name="woman" text="Женщинам" />
          {/* <a onClick={() => onClickHandler("/catalog")}>man</a> */}
        </div>
      </div>
    </>
  );
};

export default ProductLinks;
