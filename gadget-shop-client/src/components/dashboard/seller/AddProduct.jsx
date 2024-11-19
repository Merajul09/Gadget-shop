import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    const title = data.title;
    const brand = data.brand;
    const price = parseInt(data.price);
    const stock = parseInt(data.stock);
    const imageURL = data.image;
    const description = data.title;
    const category = data.category;
    const sellerEmail = user.email;
    const product = {
      title,
      brand,
      price,
      stock,
      description,
      category,
      imageURL,
      sellerEmail,
    };
    const token = localStorage.getItem("access-token");
    axios
      .post("http://localhost:5000/add-product", product, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product added successfully",
            showConfirmButton: false,
            timer: 2500,
          });
        }
        window.location.reload();
      });
  };

  return (
    <div>
      <div className="w-[50vw] mx-auto my-4 p-6 rounded-lg shadow bg-base-200">
        <h2 className="text-3xl font-semibold text-center">Add your Product</h2>
        <div className="divider"></div>
        <form className="space-y-1" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-2 w-full">
            <div className="form-control w-full">
              <label htmlFor="title" className="label">
                <span className="label-text">Product Title</span>
              </label>
              <input
                type="text"
                id="title"
                placeholder="Google Phone"
                className="input input-bordered w-full"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <p className="text-red-500 text-sm font-light">
                  Title is required
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <label htmlFor="brand" className="label">
                <span className="label-text">Brand</span>
              </label>
              <input
                type="text"
                id="brand"
                placeholder="Google"
                className="input input-bordered"
                {...register("brand", { required: true })}
              />
              {errors.brand && (
                <span className="text-red-500 text-sm font-light">
                  Brand is required
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-2 w-full">
            <div className="form-control w-full">
              <label htmlFor="price" className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                id="price"
                placeholder="10000"
                className="input input-bordered w-full"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <p className="text-red-500 text-sm font-light">
                  Price is required
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <label htmlFor="stock" className="label">
                <span className="label-text">Stock</span>
              </label>
              <input
                type="number"
                id="stock"
                placeholder="10"
                className="input input-bordered w-full"
                {...register("stock", { required: true })}
              />
              {errors.stock && (
                <span className="text-red-500 text-sm font-light">
                  Stock is required
                </span>
              )}
            </div>
            <div className="form-control w-full">
              <label htmlFor="category" className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                id="category"
                placeholder="Smart Phone"
                className="input input-bordered w-full"
                {...register("category", { required: true })}
              />
              {errors.category && (
                <span className="text-red-500 text-sm font-light">
                  Category is required
                </span>
              )}
            </div>
          </div>
          <div className="form-control w-full">
            <label htmlFor="image" className="label">
              <span className="label-text">ImageURL</span>
            </label>
            <input
              type="text"
              id="image"
              placeholder="image url"
              className="input input-bordered w-full"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <span className="text-red-500 text-sm font-light">
                ImageURL is required
              </span>
            )}
          </div>
          <div className="form-control w-full">
            <label htmlFor="description" className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              id="description"
              placeholder="Lorem ipsum dolor sit abet consectetur adit edit..."
              className="textarea textarea-primary"
              rows="3"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-red-500 text-sm font-light">
                Description is required
              </span>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
