import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className={styles.pagination}>
      {[...Array(totalPages).keys()].map((number) => (
        <span
          key={number}
          onClick={() => onPageChange(number + 1)}
          className={currentPage === number + 1 ? styles.active : null}
        >
          {number + 1}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
