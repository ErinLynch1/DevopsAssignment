const bodyParser = require('body-parser');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const { AuthUser } = require('./server/controllers/AuthController')

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

app.use(cookieParser('SecureRecipes'));
app.use(session({
    secret: 'RecipesSession',
    saveUninitialized: true,
    resave: true
}));
app.use(flash());
app.use(fileUpload());


app.use('/', router);
app.get("/home", (req, res) => {res.render("index.ejs")});
app.get("/register", (req, res) => {res.render("register.ejs")});
app.get("/reviews", (req, res) => {res.render("reviews.ejs")});
app.get("/login", (req, res) => {res.render("login.ejs")});
app.get('/logout', (req, res) => {res.clearCookie('token');
res.redirect('/login');
});

router.post("/register/create", user_controller.register);
app.use('/api', AuthRoute)

const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes)
app.listen(port, ()=> console.log(`Listening on PORT ${port}`));