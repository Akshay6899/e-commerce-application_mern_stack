import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/cartContext';
import { useAuth } from '../context/authContext';

const Cart = () => {
  const { cartItems, removeFromCart, addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const updateQuantity = (item, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(item.product);
    } else if (newQuantity <= item.countInStock) {
      addToCart({ ...item, _id: item.product }, newQuantity);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    if (!user) {
      navigate('/login?redirect=checkout');
    } else {
      navigate('/checkout');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">Add some products to your cart to see them here.</p>
          <Link 
            to="/products" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md">
            {cartItems.map(item => (
              <div key={item.product} className="flex items-center border-b border-gray-200 p-6 last:border-b-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                
                <div className="flex-1 ml-6">
                  <Link to={`/product/${item.product}`} className="text-lg font-semibold hover:text-blue-600">
                    {item.name}
                  </Link>
                  <p className="text-gray-600">${item.price}</p>
                  
                  <div className="flex items-center mt-2">
                    <span className="mr-4">Quantity:</span>
                    <div className="flex items-center border border-gray-300 rounded">
                      <button
                        onClick={() => updateQuantity(item, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-gray-100"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-4 py-1">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-gray-100"
                        disabled={item.quantity >= item.countInStock}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-xl font-semibold mb-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.product)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>{calculateTotal() > 50 ? 'Free' : '$10.00'}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>${(calculateTotal() * 0.1).toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                <span>Total:</span>
                <span>
                  ${(calculateTotal() + (calculateTotal() > 50 ? 0 : 10) + calculateTotal() * 0.1).toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-4"
            >
              Proceed to Checkout
            </button>

            <Link 
              to="/products" 
              className="block text-center text-blue-600 hover:text-blue-800 font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;