import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./Catalog.module.css";
import Image from "next/image";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
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

  return (
    <div className={styles.container}>
      <h2>Список продуктов</h2>
      <div className={styles.productGrid}>
        {currentProducts.map((product, index) => (
          <div key={product.vendorCode} className={styles.product}>
            <Navigation name={"product"} vendorCode={product.vendorCode}>
              <Image src={product.imgSrc} alt={product.name} width={100} height={100}/>
              <p>{product.name}</p>
              <p>Размер: {product.size}</p>
              <p>Пол: {product.gender}</p>
              <p>Цена: {product.price}</p>
            </Navigation>
          </div>
        ))}
      </div>
      {products.length > productsPerPage && (
        <div className={styles.pagination}>
          {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(
            (number) => (
              <span
                key={number}
                onClick={() => paginate(number + 1)}
                className={currentPage === number + 1 ? styles.active : null}
              >
                {number + 1}
              </span>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Catalog;
