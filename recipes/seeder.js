const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin@recipesdev.xjq6sp2.mongodb.net/RecipesDev?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

module.exports = mongoose;