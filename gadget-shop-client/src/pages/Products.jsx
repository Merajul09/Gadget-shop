import { useEffect, useState } from "react";
import FilterBar from "../components/products/FilterBar";
import SearchBar from "../components/products/SearchBar";
import SortByPrice from "../components/products/SortByPrice";
import axios from "axios";

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
      <div className="grid grid-cols-12">
        <div className="col-span-2 bg-gray-200">
          <FilterBar />
        </div>
        <div className="col-span-10">
          <h1>products</h1>
        </div>
      </div>
    </div>
  );
};

export default Products;
