import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
           <Link
          to="/login"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Your Profile
          </Link>
          <Link
          to="/setting"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Settings
          </Link>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Sign out
          </a>
        </div>
      </div>
    )
}

export default Menu;