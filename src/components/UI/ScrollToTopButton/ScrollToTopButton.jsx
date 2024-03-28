import React, { useState, useEffect } from "react";
import styles from "./ScrollToTopButton.module.css";
import Image from "next/image";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${styles.scrollButton} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
    >
      <Image src="/svg/topButton.svg" alt="gDMode" width="32" height="32" />
    </div>
  );
};

export default ScrollToTopButton;
