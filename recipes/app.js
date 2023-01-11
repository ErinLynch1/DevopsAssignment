const bodyParser = require('body-parser');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { default: mongoose } = require('mongoose');
const app = express();
const port = process.env.port || 3000;
require('dotenv').config();
app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));
app.set('view engine', 'ejs');



app.get("/", (req, res) => {res.render("index.ejs")});
app.get("/register", (req, res) => {res.render("register.ejs")});
app.get("/login", (req, res) => {res.render("login.ejs")});

const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes)
app.listen(port, ()=> console.log(`Listening on PORT ${port}`));