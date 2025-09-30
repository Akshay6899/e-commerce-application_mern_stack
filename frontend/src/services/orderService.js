import API from './api';

export const orderService = {
  // Create new order
  createOrder: async (orderData) => {
    const response = await API.post('/orders', orderData);
    return response.data;
  },

  // Get order by ID
  getOrder: async (id) => {
    const response = await API.get(`/orders/${id}`);
    return response.data;
  },

  // Get user's orders
  getMyOrders: async () => {
    const response = await API.get('/orders/my-orders');
    return response.data;
  },

  // Get all orders (admin only)
  getAllOrders: async () => {
    const response = await API.get('/orders');
    return response.data;
  },

  // Update order to paid
  updateOrderToPaid: async (id, paymentResult) => {
    const response = await API.put(`/orders/${id}/pay`, paymentResult);
    return response.data;
  },

  // Update order to delivered
  updateOrderToDelivered: async (id) => {
    const response = await API.put(`/orders/${id}/deliver`);
    return response.data;
  }
};