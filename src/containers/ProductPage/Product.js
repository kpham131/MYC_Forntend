import Button from "@material-ui/core/Button";
import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import api from "../../util/services/api";

export default function Product() {
  const [product, setProduct] = useState(null);
  const [sizes, setSizes] = useState([]);
  const { id } = useParams();

  const {register, handleSubmit, formState: {errors}}= useForm();
  const onSubmit = (data) =>{
      api.createOrderItem(data);
  }



  const getProductAndSize = () => {
    api.getProductByID(id).then((res) => {
      setProduct(res);
    });
    api.getSizeInProductByProductID(id).then((res)=>{
        setSizes(res);
    })
  };

  useEffect(async() => {
    await getProductAndSize();
  }, []);
 console.log(sizes);
  
  return (
    <div>
      {product && (
        <form>
          <h1>{product.productName}</h1>
          <h2>${product.price}</h2>
          <p>{product.productDescription}</p>
          {sizes.map((size) => {
            return (
              <div>
                <input type="radio" value={size.sizeName} name="size" />
                <label htmlFor="size">{size.sizeName}</label>
              </div>
            );
          })}
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
        </form>
      )}
    </div>
  );
}
