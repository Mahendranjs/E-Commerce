import React from "react";
import { removeFromCart } from "../Redux/ cartSlice";
import { useDispatch } from "react-redux";
import { X } from "lucide-react";

const CartModal = (props) => {
  const { cartItems, setIsCartOpen } = props;
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  return (
    <div>
      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg p-6 z-10">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 mt-4">Your cart is empty.</p>
        ) : (
          <div className="mt-4 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-sm font-semibold line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 hover:text-red-700"
                >
                  <X size={18} />
                </button>
              </div>
            ))}

            <div className="text-lg font-bold text-right">
              Total: ${totalPrice.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
