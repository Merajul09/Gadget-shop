import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Dropdown = () => {
  const { user, Logout } = useAuth();
  const handleLogout = () => {
    Logout();
  };
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img
              src={`${
                user?.photoURL ||
                "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              }`}
            />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li className="mb-1">
          <Link>Dropdown</Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="btn btn-sm btn-outline btn-primary"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
