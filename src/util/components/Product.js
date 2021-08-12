import { useState, useEffect } from "react";
import api from "../../util/services/api";

export default function Product({ product }) {
  const [images, setImages] = useState([]);

  //   console.log(product.productID);

  const getImages = () => {
    api.getImagesByProductID(product.productID).then((res) => {
      //   console.log(res);
      setImages(res);
    });
  };

  useEffect(() => {
    getImages();
  }, []);
  let image = images[0];
  console.log(image);

  return (
    <div className="card" style={{ width: "12rem" }}>
      <img className="card-img-top" src={images[0]} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{product.productName}</h5>
        <p className="card-text">{product.productDescription}</p>
        <a href="#" className="btn btn-primary">
          Add to Cart
        </a>
      </div>
    </div>
  );
}
