const SortByPrice = ({ setSort }) => {
  return (
    <div>
      <select
        className="select w-full max-w-md"
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="asc">Low to high</option>
        <option value="desc">High to low</option>
      </select>
    </div>
  );
};

export default SortByPrice;
