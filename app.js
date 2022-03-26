import express from 'express';
// import products from './products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import connectDB from './config/db.js';
const PORT = 5000;

const app = express();
connectDB();
app.get('/api/products', async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

app.get('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.send(product);
});
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
