import { Link, useLocation } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const location = useLocation();

  const scrollToHome = () => {
    if (location.pathname === "/") {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white shadow sticky top-0 z-50">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src="https://pramayagro.netlify.app/assets/logo.png"
          alt="logo"
          className="h-10"
        />
      </Link>

      {/* Menu */}
      <ul className="hidden md:flex items-center gap-8 font-medium text-gray-800">

        {/* HOME */}
        <li>
          <Link
            to="/"
            onClick={scrollToHome}
            className="hover:text-green-600 transition"
          >
            Home
          </Link>
        </li>

        {/* PRODUCTS */}
        <li className="relative group flex items-center gap-1 cursor-pointer">
          <span className="group-hover:text-green-600 transition">Products</span>
          <FiChevronDown className="group-hover:text-green-600 transition" />

          <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md mt-2 w-56 rounded-lg overflow-hidden">
            <li className="px-4 py-2 hover:bg-gray-100">BIO PESTICIDES</li>
            <li className="px-4 py-2 hover:bg-gray-100">NEEM BASED PRODUCTS</li>
            <li className="px-4 py-2 hover:bg-gray-100">GRANULE PRODUCTS</li>
            <li className="px-4 py-2 hover:bg-gray-100">STICKERS & SPREADERS</li>
            <li className="px-4 py-2 hover:bg-gray-100">PLANT GROWTH REGULATORS</li>
          </ul>
        </li>

        <li><Link to="/about" className="hover:text-green-600">About Us</Link></li>
        <li><Link to="/categories" className="hover:text-green-600">Categories</Link></li>
        <li><Link to="/blogs" className="hover:text-green-600">Blogs</Link></li>
        <li><Link to="/careers" className="hover:text-green-600">Careers</Link></li>
        <li><Link to="/contact" className="hover:text-green-600">Contact Us</Link></li>
        
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6 text-xl text-gray-700">
        <FaHeart className="hover:text-green-600 cursor-pointer" />
        <div className="relative">
          <FaShoppingCart className="hover:text-green-600 cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
        </div>
       <Link to="/login">
  <FaUser className="cursor-pointer hover:text-green-600 transition" />
</Link>

      </div>
    </nav>
  );
}
