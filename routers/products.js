const Router = require('express').Router()
const { add_fruits } = require('../controllers/fruits_cont');
const { add_juices } = require('../controllers/juices_cont');
const {add_products} = require('../controllers/product');
const {fruits, juices,medicine} = require('../controllers/products_get');
Router.post("/add-medicine",add_products);
Router.post("/add-juices",add_juices);
Router.post("/add-fruits", add_fruits);
Router.get('/get-fruits', fruits);
Router.get('/get-juices',juices);
Router.get('/get-medicines',medicine);
module.exports = Router;