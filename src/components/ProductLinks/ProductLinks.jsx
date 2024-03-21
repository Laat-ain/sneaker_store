import React from "react";
import styles from "./ProductLinks.module.css";

const ProductLinks = () => {
  return (
    <>
      <div className={styles.productLinks}>
        <div className={styles.woman}>
          <a href="#">woman</a>
        </div>
        <div className={styles.man}>
          <a href="#">man</a>
        </div>
      </div>
    </>
  );
};

export default ProductLinks;
