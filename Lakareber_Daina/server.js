const express = require('express');
const path = require('path');
const mongoose = require('mongoose');





const passport = require("passport");
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false
});



//importing models
const Form = require('./models/form')







require('dotenv').config();

// Import routes
const formRoutes = require('./routes/formRoutes');

// Instantiate app
const app = express();
const port = process.env.PORT || 3000;




// Mongoose connection to local DB
mongoose.connect(process.env.DATABASE_LOCAL, {
  
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Database connection error:', err.message);
});



app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));  // Ensure the path to the views is correct


// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





// Express session and passport middleware
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());




passport.use(Form.createStrategy());// use the local strategy
passport.serializeUser(Form.serializeUser());// assign a serial number to a user in the system
passport.deserializeUser(Form.deserializeUser());// the serial number is destroyed on log out





// Routes
app.use('/', formRoutes);

// Handle 404 errors
app.get("*", (req, res) => {
  res.send("Error! Page does not exist");
});




// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
