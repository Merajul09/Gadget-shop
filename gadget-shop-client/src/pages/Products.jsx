import { useEffect, useState } from "react";
import FilterBar from "../components/products/FilterBar";
import SearchBar from "../components/products/SearchBar";
import SortByPrice from "../components/products/SortByPrice";
import axios from "axios";
import Loading from "../components/Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log({ products, loading });
  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      axios.get(`http://localhost:5000/all-products`).then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
    };
    fetch();
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl mt-6"> All Products</h1>
      <div className="flex justify-between">
        <SearchBar />
        <SortByPrice />
      </div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-2 bg-gray-200">
          <FilterBar />
        </div>
        <div className="col-span-10">
          {loading ? (
            <Loading />
          ) : (
            <>
              {products.length === 0 ? (
                <div className="w-full h-full flex justify-center items-center">
                  <h1>No Products Found</h1>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-2">
                  {products.map((product) => (
                    <div
                      key={product._id}
                      className="card bg-base-100 shadow-xl"
                    >
                      <figure>
                        <img src={product.imageURL} alt={product.title} />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{product.title}</h2>
                        <p>{product.description}</p>
                        <div className="card-actions justify-end">
                          <button className="btn btn-primary">Buy Now</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
