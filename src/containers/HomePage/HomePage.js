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
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        const {
                            productID,
                            productName,
                            price,
                            productDescription
                        } = product;
                        return (
                            <tr key={productID}>
                                <td>{productName}</td>
                                <td>{price}</td>
                                <td>{productDescription}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
