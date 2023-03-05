const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    customerName: {
        type: String,
        
      },
      email: {
        type: String,
       
      },
      address: {
        type: String,
       
      },
      productList: [{
        productId: {
          type: mongoose.Types.ObjectId,
          ref: 'Product',
         
        },
        quantity: {
          type: Number,
        }
      }],
      totalPrice: {
        type: Number,
      }
}, {versionKey:false});
const OrderModel = mongoose.model('orders', DataSchema);
module.exports=OrderModel