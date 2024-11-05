const express = require('express');
const connectDB = require('./configs/db');
const Products = require('./routes/ProductRoute');
const PORT = 5000;

const app = express();

app.use(express.json()); // For parsing JSON request bodies

connectDB(); // Connect to the database

// Mount the Products routes under the '/products' prefix
app.use('/products', Products);
//app.use('/products', );

app.get('/', (req, res) => {
    res.send("Hello all, Welcome to MongoDB!");
});

app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);
});
