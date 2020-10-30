const express = require("express");
const app = express();
const userRoutes = require('./users_routes');
const indexRoutes = require('./index_routes');

//import mongo server
require("./mon-server");

const port = process.env.PORT || 5000;

app.use(express.json());


app.use('/seller', indexRoutes);
app.use('/users',userRoutes);

app.listen(port, ()=>{
    console.log(`Server Started at ${port}`);
});
