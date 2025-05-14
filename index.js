const express = require('express');
const app = express();
const PORT = 3002;

const products = [
  { id: 1, name: 'Laptop'},
  { id: 2, name: 'Phone' },
  { id: 3, name: 'head phone' },
  { id: 4, name: 'adapter' },
  { id: 5, name: 'pc' }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));

