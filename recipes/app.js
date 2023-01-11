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
const router = express.Router();
const user_controller = require("./server/controllers/userController");
const AuthRoute = require('./server/routes/auth')

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);
app.get("/", (req, res) => {res.render("index.ejs")});
app.get("/register", (req, res) => {res.render("register.ejs")});
app.get("/login", (req, res) => {res.render("login.ejs")});
router.post("/register/create", user_controller.register);
app.use('/api', AuthRoute)

const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes)
app.listen(port, ()=> console.log(`Listening on PORT ${port}`));