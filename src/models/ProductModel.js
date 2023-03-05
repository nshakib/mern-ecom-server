const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    title: {
        type: String,
      },
      description: {
        type: String,
      },
      price: {
        type: Number,
      },
      image: {
        type: String,
      },
      quantity: {
        type: Number,
      }
}, {versionKey:false});
const ProductModel = mongoose.model('products', DataSchema);
module.exports=ProductModel