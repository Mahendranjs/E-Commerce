import React, { useState } from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import { useSelector } from "react-redux";
import CartModal from "../../components/CartModal";

const Header = ({ setSearchTerm }) => {
  const cartCount = useSelector((state) => state.cart.cartItems.length);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-blue-600">
          E-Commerce
        </a>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center border border-gray-300 rounded-lg px-3 py-1">
            <input
              type="text"
              placeholder="Search products..."
              className="outline-none bg-transparent w-40"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="text-gray-700 hover:text-blue-600">
            <User size={24} />
          </button>
          <button
            className="text-gray-700 hover:text-blue-600 relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              {cartCount}
            </span>
          </button>
        </div>
        {isCartOpen && (
          <CartModal
            cartItems={cartItems}
            setIsCartOpen={(value) => setIsCartOpen(value)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
