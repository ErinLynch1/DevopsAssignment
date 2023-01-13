const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'This field is required.'
  },
  description: {
    type: String,
    required: 'This field is required.'
  },
  email: {
    type: String,
    required: 'This field is required.'
  },
  ingredients: {
    type: Array,
    required: 'This field is required.'
  },
  category: {
    type: String,
    enum: ['Japanese', 'Chinese', 'Italian', 'Greek', 'Mexican', 'Thai', 'Spanish', 'French', 'Indian'],
    required: 'This field is required.'
  },
  image: {
    type: String,
    required: 'This field is required.'
  },
});

recipeSchema.index({ name: 'text', description: 'text' });


module.exports = mongoose.model('Recipe', recipeSchema);