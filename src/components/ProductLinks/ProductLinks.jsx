import React from "react";
import styles from "./ProductLinks.module.css";
import Navigation from "../Navigation/Navigation";
import Image from "next/image";

const ProductLinks = ({ navLinks }) => {
  const navProductLinks = [
    {
      name: "man",
      imagePathSneaker: "/productLinks/man_sneaker.jpg",
      imagePathProfile: "/productLinks/male_profile.png",
      text: "мужчинам"
    },
    {
      name: "woman",
      imagePathSneaker: "/productLinks/woman_sneaker.jpg",
      imagePathProfile: "/productLinks/female_profile.png",
      text: "женщинам"
    },
  ];

  return (
    <>
      <div className={styles.productLinks}>
        {navProductLinks.map((navProductLink, index) => (
          <div key={index}>
            <Navigation name={navProductLink.name}>
              <div className={styles.body}>
                <div className={`${styles.images} ${styles[navProductLink.name]}`}>
                  <Image
                    src={navProductLink.imagePathSneaker}
                    alt={navProductLink.name}
                    width={400}
                    height={400}
                    className={styles.bgImage}
                  />

                  <span className={styles.caption}> {navProductLink.text} </span>

                  <Image
                    src={navProductLink.imagePathProfile}
                    alt={navProductLink.name}
                    width={400}
                    height={400}
                    className={styles.frontImage}
                  />
                </div>
              </div>
            </Navigation>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductLinks;

