const SortByPrice = () => {
  return (
    <div>
      <select className="select w-full max-w-md">
        <option value="asc">Low to high</option>
        <option value="desc">High to low</option>
      </select>
    </div>
  );
};

export default SortByPrice;
