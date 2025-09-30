const express = require('express');
const { 
  createOrder, 
  getOrderById, 
  updateOrderToPaid, 
  getMyOrders,
  getOrders,
  updateOrderToDelivered 
} = require('../controllers/orderController');
const { auth, admin } = require('../middleware/auth');

const router = express.Router();

router.route('/')
  .post(auth, createOrder)
  .get(auth, admin, getOrders);

router.route('/my-orders').get(auth, getMyOrders);
router.route('/:id').get(auth, getOrderById);
router.route('/:id/pay').put(auth, updateOrderToPaid);
router.route('/:id/deliver').put(auth, admin, updateOrderToDelivered);

module.exports = router;