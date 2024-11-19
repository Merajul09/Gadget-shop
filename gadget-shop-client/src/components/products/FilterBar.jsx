/* eslint-disable react/prop-types */
import { HiFilter } from "react-icons/hi";

const FilterBar = ({
  handleReset,
  setBrand,
  setCategory,
  uniqueBrand,
  uniqueCategory,
}) => {
  return (
    <div className="space-y-4 mt-5">
      <div className="flex gap-2 items-center justify-center">
        <HiFilter className="text-2xl" />
        <h1 className="text-2xl">Filter</h1>
      </div>
      <div>
        <select
          className="select w-full max-w-md"
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="">Brand</option>
          {uniqueBrand.map((brand, idx) => (
            <option key={idx} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          className="select w-full max-w-md"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Category</option>
          {uniqueCategory.map((category, idx) => (
            <option key={idx} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary w-full" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default FilterBar;
