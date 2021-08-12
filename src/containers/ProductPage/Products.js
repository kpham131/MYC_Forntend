import Button from "@material-ui/core/Button";
import React from "react";
import { useState, useEffect } from "react";
import Product from "../../util/components/Product";

import api from "../../util/services/api";

export default function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    api.getAllProduct().then((res) => {
      setProducts(res);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((product) => {
        return <Product product={product} key={product.productID} />;
      })}
    </div>
  );
}
