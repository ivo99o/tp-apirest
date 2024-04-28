const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require("../src/routes/user.js");

const app = express();
const port = process.env.PORT || 9000;


//middleware
app.use(express.json());
app.use('/api', userRoutes);


//route
app.get('/', (req, res)=> {
    res.send('Bienvenido a mi API')
});




app.listen(port, () => console.log('server listening in port', `${port}`));

///conexion mongo db
mongoose
 .connect(process.env.MONGODB_URI)
 .then(() => console.log("connected to MongoDB Atlas"))
 .catch((error) => console.error(error))


