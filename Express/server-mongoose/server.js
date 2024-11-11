const express = require('express');
const cors = require('cors')
const app = express();
const connectDB = require('./configs/db');
const Products = require('./routes/ProductRoute');
const PORT = 5000;
app.use(express.json()); 
const Users = require('./routes/UserRoute')
//const Orders = require('./routes/OrdersRoute')
const Auth = require('./routes/AuthRoute')

connectDB(); // Connect to the database


app.use('/products', Products);
app.use('/users', Users)
//app.use('/orders', Orders)
app.use('/auth', Auth)

app.get('/', (req, res) => {
    res.status(200).json({message: "welcome"})
    res.send("Hello all, Welcome to MongoDB!");
});

app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);
});
