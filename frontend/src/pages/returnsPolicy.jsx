import React from 'react';

const ReturnsPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Returns & Refunds Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">30-Day Return Policy</h2>
              <p className="text-gray-700 mb-4">
                We want you to be completely satisfied with your purchase. If you're not happy with your order, you can return most items within 30 days of delivery for a full refund or exchange.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Return Conditions</h2>
              <p className="text-gray-700 mb-4">To be eligible for a return, your item must be:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>In the original packaging</li>
                <li>Unused and in the same condition that you received it</li>
                <li>Included with all tags and labels attached</li>
                <li>Accompanied by the original receipt or proof of purchase</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Non-Returnable Items</h2>
              <p className="text-gray-700 mb-4">Certain types of items cannot be returned:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Gift cards</li>
                <li>Downloadable software products</li>
                <li>Personal care items (for health and hygiene reasons)</li>
                <li>Perishable goods (food, flowers, etc.)</li>
                <li>Intimate or sanitary goods</li>
                <li>Customized or personalized products</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How to Return an Item</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ol className="list-decimal list-inside space-y-4">
                  <li className="text-gray-700">
                    <span className="font-semibold">Contact our support team</span> at <a href="mailto:returns@shopeasy.com" className="text-blue-600 hover:text-blue-800">returns@shopeasy.com</a> to initiate your return
                  </li>
                  <li className="text-gray-700">
                    <span className="font-semibold">Package your item</span> securely in the original packaging
                  </li>
                  <li className="text-gray-700">
                    <span className="font-semibold">Include the return form</span> with your package
                  </li>
                  <li className="text-gray-700">
                    <span className="font-semibold">Ship your return</span> to the address provided by our support team
                  </li>
                </ol>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Refund Process</h2>
              <p className="text-gray-700 mb-4">
                Once we receive your return, we will inspect it and notify you of the approval or rejection of your refund. If approved, your refund will be processed within 7-10 business days, and a credit will automatically be applied to your original method of payment.
              </p>
              <p className="text-gray-700">
                Please note that shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Exchanges</h2>
              <p className="text-gray-700 mb-4">
                We only replace items if they are defective or damaged. If you need to exchange an item for the same product, contact us at <a href="mailto:exchanges@shopeasy.com" className="text-blue-600 hover:text-blue-800">exchanges@shopeasy.com</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Damaged or Defective Items</h2>
              <p className="text-gray-700 mb-4">
                If you receive a damaged or defective item, please contact us within 7 days of delivery. We will arrange for a replacement or refund and cover the return shipping costs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
              <p className="text-gray-700">
                If you have any questions about our returns policy, please contact us:
              </p>
              <div className="mt-4 space-y-2 text-gray-700">
                <p>Email: <a href="mailto:returns@shopeasy.com" className="text-blue-600 hover:text-blue-800">returns@shopeasy.com</a></p>
                <p>Phone: (555) 123-4567</p>
                <p>Hours: Monday-Friday, 9AM-6PM EST</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsPolicy;