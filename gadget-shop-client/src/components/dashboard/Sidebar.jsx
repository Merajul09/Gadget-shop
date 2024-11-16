const Sidebar = () => {
  return (
    <div className="bg-gray-200 border-r-2 border-black min-h-screen">
      <ul className="flex flex-col gap-2">
        <li>Overview</li>
        <li>My Products</li>
        <li>Add Products</li>
        <li>Home</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
