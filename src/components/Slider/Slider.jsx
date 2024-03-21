import React, { useRef, useState } from "react";
import styles from "./Slider.module.css";
import Image from "next/image";

const slidesData = [
  {
    imagePath: "/slider/sneaker_5.png",
    name: "Lorem 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore tenetur exercitationem modi sapiente. Illo vel adipisci in ipsa sapiente! Nesciunt accusamus, atque deserunt est dicta repellendus fugiat obcaecati ad!",
  },
  {
    imagePath: "/slider/sneaker_7.jpg",
    name: "Lorem 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore tenetur exercitationem modi sapiente. Illo vel adipisci in ipsa sapiente! Nesciunt accusamus, atque deserunt est dicta repellendus fugiat obcaecati ad!",
  },
  {
    imagePath: "/slider/sneaker_8.jpg",
    name: "Lorem 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore tenetur exercitationem modi sapiente. Illo vel adipisci in ipsa sapiente! Nesciunt accusamus, atque deserunt est dicta repellendus fugiat obcaecati ad!",
  },
  {
    imagePath: "/slider/sneaker_3.jpg",
    name: "Lorem 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore tenetur exercitationem modi sapiente. Illo vel adipisci in ipsa sapiente! Nesciunt accusamus, atque deserunt est dicta repellendus fugiat obcaecati ad!",
  },
  {
    imagePath: "/slider/sneaker_4.jpg",
    name: "Lorem 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore tenetur exercitationem modi sapiente. Illo vel adipisci in ipsa sapiente! Nesciunt accusamus, atque deserunt est dicta repellendus fugiat obcaecati ad!",
  },
  {
    imagePath: "/slider/sneaker_2.jpg",
    name: "Lorem 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore tenetur exercitationem modi sapiente. Illo vel adipisci in ipsa sapiente! Nesciunt accusamus, atque deserunt est dicta repellendus fugiat obcaecati ad!",
  },
];

const Slider = () => {
  const slideRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (slideRef.current) {
      slideRef.current.appendChild(slideRef.current.firstElementChild);
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  const handlePrev = () => {
    if (slideRef.current) {
      slideRef.current.prepend(slideRef.current.lastElementChild);
    }
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length
    );
  };

  return (
    <div className={styles.container}>
      <div ref={slideRef} className={styles.slide}>
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`${styles.item} ${
              index === currentIndex ? styles.active : ""
            }`}
          >
            <Image
              src={slide.imagePath}
              alt={slide.name}
              fill={true}
              //className={styles.img}
              className={slide.imagePath === "/slider/sneaker_2.jpg"?styles.specialPositionImg:styles.positionImg}

              
            />
            <div className={styles.content}>
              <div className={styles.name}>{slide.name}</div>
              <div className={styles.des}>{slide.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.button}>
        <button className={styles.prev} onClick={handlePrev}>
          Назад
        </button>
        <button className={styles.next} onClick={handleNext}>
          Вперёд
        </button>
      </div>
    </div>
  );
};

export default Slider;
