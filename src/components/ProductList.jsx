import React from "react";
import useFetch from "../Hooks/API";
import ProductFetch from "../Hooks/ProductFetch";
import { ShoppingCart, Eye, Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/ cartSlice";

const ProductList = (props) => {
  const dispatch = useDispatch();
  const { product, cartItems } = props;
  const isInCart = cartItems.some((item) => item.id === product.id);
  return (
    <>
      <div
        key={product.id}
        className="bg-white p-5 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2"
      >
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-contain mb-4"
          />
          <span className="absolute top-2 left-2 bg-blue-500 text-white px-3 py-1 text-xs rounded-lg">
            {product.category}
          </span>
        </div>

        {/* Product Details */}
        <h3 className="text-lg font-semibold line-clamp-1">{product.title}</h3>

        {/* Price */}
        <p className="text-gray-700 font-bold text-lg">
          ${product.price.toFixed(2)}
        </p>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* Buttons */}
        <div className="mt-4 flex justify-between">
          {isInCart ? (
            <button
              onClick={() => dispatch(removeFromCart(product.id))}
              className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              <Trash size={18} className="mr-2" /> Remove
            </button>
          ) : (
            <button
              onClick={() => dispatch(addToCart(product))}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <ShoppingCart size={18} className="mr-2" /> Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
