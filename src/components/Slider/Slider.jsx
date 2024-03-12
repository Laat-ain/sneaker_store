 import React, { useRef, useState } from 'react';
import styles from './Slider.module.css';

const slidesData = [
    {
      image: 'https://i.ibb.co/qCkd9jS/img1.jpg',
      name: 'Switzerland',
      description: '1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      image: 'https://i.ibb.co/jrRb11q/img2.jpg',
      name: 'Finland',
      description: '2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      image: 'https://i.ibb.co/NSwVv8D/img3.jpg',
      name: 'Iceland',
      description: '3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      image: 'https://i.ibb.co/Bq4Q0M8/img4.jpg',
      name: 'Australia',
      description: '4 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      image: 'https://i.ibb.co/jTQfmTq/img5.jpg',
      name: 'Netherland',
      description: '5 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      image: 'https://i.ibb.co/RNkk6L0/img6.jpg',
      name: 'Ireland',
      description: '6 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
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
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
    };
  
    return (
      <div className={styles.container}>
        <div ref={slideRef} className={styles.slide}>
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className={`${styles.item} ${index === currentIndex ? styles.active : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={styles.content}>
                <div className={styles.name}>{slide.name}</div>
                <div className={styles.des}>{slide.description}</div>
                <button>See More</button>
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