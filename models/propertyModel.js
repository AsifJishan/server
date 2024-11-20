const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, enum: ['Rent', 'Sale'], required: true },
  size: { type: Number, required: true },
});

module.exports = mongoose.model('Property', propertySchema);
