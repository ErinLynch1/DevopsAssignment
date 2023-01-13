const mongoose = require('mongoose');
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

require('./Category');
require('./Recipe')