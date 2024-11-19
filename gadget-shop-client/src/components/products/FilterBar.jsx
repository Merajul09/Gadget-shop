import { HiFilter } from "react-icons/hi";

const FilterBar = () => {
  return (
    <div className="space-y-4 mt-5">
      <div className="flex gap-2 items-center justify-center">
        <HiFilter className="text-2xl" />
        <h1 className="text-2xl">Filter</h1>
      </div>
      <div>
        <select className="select w-full max-w-md">
          <option value="asc">Low to high</option>
          <option value="desc">High to low</option>
        </select>
      </div>
      <div>
        <select className="select w-full max-w-md">
          <option value="asc">Low to high</option>
          <option value="desc">High to low</option>
        </select>
      </div>
      <button className="btn btn-primary w-full">Reset</button>
    </div>
  );
};

export default FilterBar;
