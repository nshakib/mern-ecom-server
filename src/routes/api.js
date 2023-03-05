const express = require('express');
const UsersController = require("../controller/UsersController");
const ProductsController = require("../controller/ProductsController");
const OrdersController = require("../controller/OrdersController");
const AuthVerifyMiddlware = require('../middleware/AuthVerifyMiddlware')


const router = express.Router();

router.post("/registration", UsersController.registration);
router.post("/login", UsersController.login);
router.post("/profileUpdate",AuthVerifyMiddlware, UsersController.profileUpdate);

//products
// GET all products
router.get('/products', ProductsController.getProducts);

// GET a single product by ID
router.get('/productsById/:id', ProductsController.getProductById);

// POST a new product
router.post('/productsCreate', ProductsController.createProduct);

// PUT update a product by ID
router.post('/productsUpdate/:id', ProductsController.updateProduct);

// DELETE a product by ID
router.post('/productsDelete/:id', ProductsController.deleteProduct);

//orders
// GET all orders
router.get('/orders', OrdersController.getOrders);

// GET a single order by ID
router.get('/ordersById/:id', OrdersController.getOrderById);

// POST a new order
router.post('/createOrders', OrdersController.createOrder);

// PUT update an order by ID
router.post('/updateOrders/:id', OrdersController.updateOrder);

// DELETE an order by ID
router.post('/deleteOrders/:id', OrdersController.deleteOrder);
//Api routing end point
module.exports = router;