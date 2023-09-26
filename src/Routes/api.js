// src/Routes/api.js
const express = require('express');
const router = express.Router();

// Import controller functions for each controller
const {
  create: createUser,
  read: readUser,
  get: getUser,
  update: updateUser,
} = require('../Controllers/userController');

const {
  create: createAdminController,
  read: readAdminController,
  get: getAdminController,
  update: updateAdminController,
} = require('../Controllers/adminController');

const {
  create: createSubAdminController,
  read: readSubAdminController,
  get: getSubAdminController,
  update: updateSubAdminController,
} = require('../Controllers/subAdminController');

const {
  create: createget,
  read: readget,
  get: getget,
  update: updateget,
} = require('../Controllers/getController');

const {
  create: createCustomer,
  read: readCustomer,
  get: getCustomer,
  update: updateCustomer,
} = require('../Controllers/customerController');

const {
  create: createCategory,
  read: readCategory,
  get: getCategory,
  update: updateCategory,
} = require('../Controllers/categoryController');

const {
  create: createOrder,
  read: readOrder,
  get: getOrder,
  update: updateOrder,
} = require('../Controllers/orderController');

const {
  create: createProduct,
  read: readProduct,
  get: getProduct,
  update: updateProduct,
} = require('../Controllers/productController');

const {
  create: createOrderItem,
  read: readOrderItem,
  get: getOrderItem,
  update: updateOrderItem,
} = require('../Controllers/order_itemController');

const {
  create: createPayment,
  read: readPayment,
  get: getPayment,
  update: updatePayment,
} = require('../Controllers/paymentController');

const {
  create: createShipment,
  read: readShipment,
  get: getShipment,
  update: updateShipment,
} = require('../Controllers/shipmentController');

const {
  create: createCart,
  read: readCart,
  get: getCart,
  update: updateCart,
} = require('../Controllers/cartController');

const {
  create: createWishlist,
  read: readWishlist,
  get: getWishlist,
  update: updateWishlist,
} = require('../Controllers/wishlistController');

// Define routes for userController
router.get('/user', createUser);
router.get('/user', readUser);
router.get('/user/:id', getUser);
router.get('/user/:id', updateUser);

// Define routes for adminController
router.get('/admin', createAdminController);
router.get('/admin', readAdminController);
router.get('/admin/:id', getAdminController);
router.get('/admin/:id', updateAdminController);

// Define routes for subAdminController
router.get('/subadmin', createSubAdminController);
router.get('/subadmin', readSubAdminController);
router.get('/subadmin/:id', getSubAdminController);
router.get('/subadmin/:id', updateSubAdminController);

// Define routes for getController
router.get('/get', createget);
router.get('/get', readget);
router.get('/get/:id', getget);
router.get('/get/:id', updateget);

// Define routes for customerController
router.get('/customer', createCustomer);
router.get('/customer', readCustomer);
router.get('/customer/:id', getCustomer);
router.get('/customer/:id', updateCustomer);

// Define routes for categoryController
router.get('/category', createCategory);
router.get('/category', readCategory);
router.get('/category/:id', getCategory);
router.get('/category/:id', updateCategory);

// Define routes for orderController
router.get('/order', createOrder);
router.get('/order', readOrder);
router.get('/order/:id', getOrder);
router.get('/order/:id', updateOrder);

// Define routes for productController
router.get('/product', createProduct);
router.get('/product', readProduct);
router.get('/product/:id', getProduct);
router.get('/product/:id', updateProduct);

// Define routes for order_itemController
router.get('/orderitem', createOrderItem);
router.get('/orderitem', readOrderItem);
router.get('/orderitem/:id', getOrderItem);
router.get('/orderitem/:id', updateOrderItem);

// Define routes for paymentController
router.get('/payment', createPayment);
router.get('/payment', readPayment);
router.get('/payment/:id', getPayment);
router.get('/payment/:id', updatePayment);

// Define routes for shipmentController
router.get('/shipment', createShipment);
router.get('/shipment', readShipment);
router.get('/shipment/:id', getShipment);
router.get('/shipment/:id', updateShipment);

// Define routes for cartController
router.get('/cart', createCart);
router.get('/cart', readCart);
router.get('/cart/:id', getCart);
router.get('/cart/:id', updateCart);

// Define routes for wishlistController
router.get('/wishlist', createWishlist);
router.get('/wishlist', readWishlist);
router.get('/wishlist/:id', getWishlist);
router.get('/wishlist/:id', updateWishlist);

module.exports = router;
