import {
  HiChartPie,
  HiInbox,
  HiUser,
  HiShoppingBag,
  HiHome,
  HiLogout,
  HiUserAdd,
} from "react-icons/hi";
import { Sidebar as Side } from "flowbite-react";
import { Link } from "react-router-dom";
import useUserData from "../../hooks/useUserData";

const Sidebar = () => {
  const data = useUserData();
  console.log(data);
  return (
    <Side aria-label="Default Side example" className="min-h-screen ">
      <Side.Items>
        <Side.ItemGroup>
          <Link to="/dashboard/overview">
            <Side.Item icon={HiChartPie}>Overview</Side.Item>
          </Link>
          <Side.Item href="#" icon={HiInbox} label="3">
            Wishlist
          </Side.Item>
          <Link to="/dashboard/add-product">
            <Side.Item icon={HiUserAdd}>Add Product</Side.Item>
          </Link>
          <Side.Item href="#" icon={HiShoppingBag}>
            Products
          </Side.Item>
        </Side.ItemGroup>
      </Side.Items>
      <Side.Items className="flex flex-col justify-end h-[60vh]">
        <Side.ItemGroup>
          <Link to="/dashboard/profile">
            <Side.Item icon={HiUser}>Profile</Side.Item>
          </Link>
          <Side.Item href="/" icon={HiHome}>
            Home
          </Side.Item>
          <Side.Item href="/" icon={HiLogout}>
            Logout
          </Side.Item>
        </Side.ItemGroup>
      </Side.Items>
    </Side>
  );
};

export default Sidebar;
