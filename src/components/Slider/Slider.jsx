import React, { useRef, useState } from 'react';
import styles from './Slider.module.css';

import image_1 from '../../public/sneaker_1.jpg';
import image_3 from '../../public/sneaker_3.jpg';
import image_4 from '../../public/sneaker_4.jpg';
import image_5 from '../../public/sneaker_5.png';
import image_7 from '../../public/sneaker_7.jpg';
import image_8 from '../../public/sneaker_8.jpg';



const slidesData = [
    {
      image: image_3,
      name: 'Switzerland',
      description: '1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      image: image_7,
      name: 'Finland',
      description: '2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      image: image_8,
      name: 'Iceland',
      description: '3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      image: image_5,
      name: 'Australia',
      description: '4 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      image: image_4,
      name: 'Netherland',
      description: '5 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      image: image_1,
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
              //style={{ backgroundImage: `url(${slide.image})` }}
              //style={{ backgroundImage: `url(${br.src})` }}
              style={{ backgroundImage: `url(${slide.image.src})` }}  
            >
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