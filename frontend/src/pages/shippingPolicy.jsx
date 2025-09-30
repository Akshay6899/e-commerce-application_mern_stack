import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Shipping Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Shipping Methods & Times</h2>
              <p className="text-gray-700 mb-4">
                We offer several shipping options to meet your needs. All orders are processed within 1-2 business days.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold mb-3">Standard Shipping</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Delivery within 5-7 business days</li>
                  <li>Free on orders over $50</li>
                  <li>$4.99 for orders under $50</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold mb-3">Express Shipping</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Delivery within 2-3 business days</li>
                  <li>$9.99 flat rate</li>
                  <li>Order by 2 PM EST for same-day processing</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Overnight Shipping</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Next business day delivery</li>
                  <li>$19.99 flat rate</li>
                  <li>Order by 12 PM EST for next-day delivery</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">International Shipping</h2>
              <p className="text-gray-700 mb-4">
                We currently ship to the following countries: United States, Canada, United Kingdom, Australia, and Germany.
              </p>
              <p className="text-gray-700">
                International orders typically take 10-15 business days for delivery. Additional customs fees and import duties may apply and are the responsibility of the customer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Order Tracking</h2>
              <p className="text-gray-700 mb-4">
                Once your order ships, you will receive a confirmation email with your tracking number. You can track your package using the link provided in the email or through our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Shipping Restrictions</h2>
              <p className="text-gray-700 mb-4">
                Some items may have shipping restrictions due to size, weight, or destination. These restrictions will be noted on the product page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about our shipping policy, please contact our customer service team at <a href="mailto:shipping@shopeasy.com" className="text-blue-600 hover:text-blue-800">shipping@shopeasy.com</a> or call us at (555) 123-4567.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;