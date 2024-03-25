// pages/product/[productId].jsx

import React from "react";
import { useRouter } from "next/router";

const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;

  // Здесь можно загрузить данные о товаре с помощью productId из вашей базы данных

  return (
    <div>
      <h1>Товар с ID: {productId}</h1>
      {/* Здесь можно отобразить подробную информацию о товаре */}
    </div>
  );
};

export default ProductPage;
