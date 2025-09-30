import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const OrderSuccess = () => {
  const { id } = useParams();

  useEffect(() => {
    toast.success('Order placed successfully!');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          {/* Success Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
          <p className="text-gray-600 mb-4">
            Thank you for your purchase. Your order has been successfully placed.
          </p>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600">Order Number</p>
            <p className="text-lg font-semibold text-gray-900">{id?.slice(-8).toUpperCase()}</p>
          </div>

          <p className="text-gray-600 mb-6">
            We've sent a confirmation email with your order details and tracking information.
          </p>

          <div className="space-y-3">
            <Link
              to={`/order/${id}`}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition block"
            >
              View Order Details
            </Link>
            <Link
              to="/products"
              className="w-full bg-gray-200 text-gray-900 py-3 px-4 rounded-lg font-semibold hover:bg-gray-300 transition block"
            >
              Continue Shopping
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Need help? <Link to="/contact" className="text-blue-600 hover:text-blue-800">Contact our support team</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;