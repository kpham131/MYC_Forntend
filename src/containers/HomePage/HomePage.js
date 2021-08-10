import { useState, useEffect } from "react";
import api from "../../util/services/api";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    api.getAllProduct().then((res) => {
      console.log(res);
      setProducts(res);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <table>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Description</th>
        </tr>

        {products.map((product) => {
          const { productName, price, productDescription } = product;
          return (
            <tr>
              <td>{productName}</td>
              <td>{price}</td>
              <td>{productDescription}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
