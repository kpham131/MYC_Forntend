import { useState, useEffect } from "react";
import  api  from "../../util/services/api";

export default function HomePage() {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        api.getAllProduct().then((res) => {
            console.log(res);
            setProducts(res);
        })
    }

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
                <tr>
                    {products.map((product) => {
                        const {
                            ProductName,
                            Price,
                            ProductDescription
                        } = product;
                        return (
                            <div>
                                <td>{ProductName}</td>
                                <td>{Price}</td>
                                <td>{ProductDescription}</td>
                            </div>
                        )
                    })}

                </tr>
            </table>

        </div>
    );
}
