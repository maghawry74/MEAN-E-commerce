const mongoose = require("mongoose")
const AutoIncrement = require("mongoose-sequence")(mongoose)
let ProductsSchema = mongoose.Schema(
  {
    _id: Number,
    ProductName: String,
    Price: Number,
    Description: String,
    Category: String,
    Amount: Number,
    image: String,
  },
  { _id: false }
)
ProductsSchema.plugin(AutoIncrement)
module.exports = mongoose.model("Product", ProductsSchema)
