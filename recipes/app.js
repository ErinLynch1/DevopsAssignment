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

mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://admin:admin@recipesdev.xjq6sp2.mongodb.net/RecipesDev?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection
db.on('error', (err) =>{
    console.log(err)
})

db.once('open', () => {
    console.log('Database connection successful!')
})

app.get("/", (req, res) => {res.render("index.ejs")});
app.get("/register", (req, res) => {res.render("register.ejs")});
app.get("/login", (req, res) => {res.render("login.ejs")});

const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes)
app.listen(port, ()=> console.log(`Listening on PORT ${port}`));