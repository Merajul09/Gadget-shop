import { useEffect, useState } from "react";
import FilterBar from "../components/products/FilterBar";
import SearchBar from "../components/products/SearchBar";
import SortByPrice from "../components/products/SortByPrice";
import axios from "axios";
import Loading from "../components/Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [uniqueBrand, setUniqueBrand] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState([]);
  console.log(sort, search, brand, category);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      axios
        .get(
          `http://localhost:5000/all-products?title=${search}&sort=${sort}&brand=${brand}&category=${category}`
        )
        .then((res) => {
          console.log(res.data);
          setProducts(res.data.products);
          setUniqueBrand(res.data.brands);
          setUniqueCategory(res.data.categories);
          setLoading(false);
        });
    };
    fetch();
  }, [search, brand, category, sort]);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };
  const handleReset = () => {
    setBrand("");
    setCategory("");
    setSearch("");
    setSort("asc");
    window.location.reload();
  };
  return (
    <div>
      <h1 className="text-center text-3xl mt-6"> All Products</h1>
      <div className="flex justify-between">
        <SearchBar handleSearch={handleSearch} />
        <SortByPrice setSort={setSort} />
      </div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-2 bg-gray-200">
          <FilterBar
            setBrand={setBrand}
            setCategory={setCategory}
            handleReset={handleReset}
            uniqueBrand={uniqueBrand}
            uniqueCategory={uniqueCategory}
          />
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
                        <h2 className="card-title">{product.price}</h2>
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
