require("dotenv").config();
// Basic workflow
const express = require("express");
const cookieParser =  require("cookie-parser");
//if we use mongodb we have to use CORS
const cors = require("cors");

//Importing routes
const generalRoutes = require("./routes/general.routes");
const adminRoutes = require("./routes/admin");
const authRoutes = require("./routes/auth"); 
// Importing db
const { db } = require("./db/coonectUsingMongoose");

//if we use mongodb we have to use CORS

const app = express();
db();
// using the packages/ libraries that we imported  
app.use(cors());
app.use(cookieParser());
app.use(express.json()); // we have to parse the data that we are getting from the request data (streaming data) data in to JSON

// using routes by creating custom middleware

app.use("/api", generalRoutes);
app.use("/api/user", authRoutes);
app.use("/api/admin", adminRoutes);


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server App is listening in ${PORT}`);
});

// //----> 1st step
// require('dotenv').config(); // if we use env file means we have to declare here it as global
// const express = require("express");
// const cors = require("cors");
// const{requireSignin,isAuth} = require('./utils/authentication');

// //----> 2nd step

// //IMPORT AND CONNECTING DB
// const {db}=require('./db/coonectUsingMongoose');

// //----> 4th step
// //IMPORTING ROUTES
// const quotesRoutes = require("./routes/quotes.routes")
// const generalRoutes = require("./routes/general.routes")
// const authRoutes = require('./routes/auth')

// //----> 3rd step
// const app = express(); //decalring the express function in one variable
// db(); //-->calling db function and connecting to db

// //----> 5th step [app.use()]
// app.use(cors()); // To accept the multi origin requests
// app.use(express.json()); // we have to parse the request (streaming data) data in to JSON

// // Adding custom middleware
// app.use('/api',requireSignin, isAuth, quotesRoutes);
// app.use('/api',requireSignin, isAuth, generalRoutes);
// app.use('/api',authRoutes);

// //----> 6th step
// const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => {
//   console.log(`server App is listening in ${PORT}`);
// });
