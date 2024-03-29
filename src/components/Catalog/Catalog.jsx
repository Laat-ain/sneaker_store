import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./Catalog.module.css";
import Image from "next/image";
import Pagination from "../UI/Pagination/Pagination";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showHiddenElements, setShowHiddenElements] = useState(false);
  const [likedProducts, setLikedProducts] = useState([]); // Массив для хранения понравившихся товаров
  const productsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products");
        const jsonData = await response.json();
        setProducts(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Функция для отображения нужных продуктов на текущей странице
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Функция для обработки клика по страницам
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Функция для переключения состояния нажатия на сердечко и добавления/удаления товара из массива понравившихся
  const toggleLike = (vendorCode) => {
    if (likedProducts.includes(vendorCode)) {
      // Если товар уже понравился, удаляем его из массива
      setLikedProducts(likedProducts.filter((code) => code !== vendorCode));
    } else {
      // Если товар еще не понравился, добавляем его в массив
      setLikedProducts([...likedProducts, vendorCode]);
    }

    console.log(likedProducts);
  };

  return (
    <div className={"container"}>
      <div className={styles.productGrid}>
        {currentProducts.map((product, index) => (
          <div
            key={product.vendorCode}
            className={styles.product}
            onMouseEnter={() => setShowHiddenElements(true)}
            onMouseLeave={() => setShowHiddenElements(false)}
          >
            <Navigation name={"product"} vendorCode={product.vendorCode}>
              <Image
                src={product.imgSrc}
                alt={product.name}
                width={100}
                height={100}
              />
              <div className={styles.productCardDescription}>
                <span>{`${product.price}руб.`}</span>
                <div className={styles.typeProductDescription}>
                  <p>{product.gender}</p>
                  <p>{product.name}</p>
                  {showHiddenElements && (
                    <div className={styles.hiddenElements}>
                      <div>
                        <p>{product.size}</p>
                      </div>
                      <button>Купить</button>
                    </div>
                  )}
                </div>
              </div>
            </Navigation>

            
            <button
              onClick={() => toggleLike(product.vendorCode)}
              className={`${styles.like} ${
                likedProducts.includes(product.vendorCode) ? styles.likedd : ""
              }`}
            >
              <Image
                className={styles.svgLike}
                src="/svg/like_pink.svg"
                alt="Like"
                height={3}
                width={3}
              />
            </button>
          </div>
        ))}
      </div>

      {products.length > productsPerPage && (
        <Pagination
          totalPages={Math.ceil(products.length / productsPerPage)}
          currentPage={currentPage}
          onPageChange={paginate}
        />
      )}
    </div>
  );
};

export default Catalog;
