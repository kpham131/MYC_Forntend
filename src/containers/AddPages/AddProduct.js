import { useForm } from "react-hook-form";
import api from "../../util/services/api";
import Button from "@material-ui/core/Button";

// type FormData = {
//   collectionID: number,
//   prodcutName: string,
//   price: number,
//   productDescription: String,
//   isAvailable: Boolean,
// };

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    api.createProduct(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="collectionID">CollectionID:</label>
      <input
        type="text"
        {...register("collectionID", { required: "CollectionID is required" })}
        id="collectionID"
      />
      {errors.collectionID && <p>{errors.collectionID.message}</p>}
      <br />

      <label htmlFor="productName">Product Name:</label>
      <input
        type="text"
        {...register("productName", { required: true })}
        id="productName"
      />
      <br />

      <label htmlFor="price">Price:</label>
      <input
        type="text"
        {...register("price", { required: true })}
        id="price"
      />
      <br />

      <label htmlFor="productDescription">Product Description:</label>
      <input
        type="text"
        {...register("productDescription", { required: true })}
        id="productDescription"
      />
      <br />

      <label htmlFor="isAvailable">Available </label>
      <input type="checkbox" {...register("isAvailable")} id="isAvailable" />
      <br />

      <Button type="submit" variant="contained" color="secondary">
        Submit
      </Button>
      {/* <button type="submit">Submit</button> */}
    </form>
  );
}
