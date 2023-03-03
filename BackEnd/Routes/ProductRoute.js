const validator = require("../Core/ProductValidation")
const checkValidation = require("../Core/checkValidation")
const ImageUplode = require("../Core/MulterConfiguration")
const express = require("express")
const {
  getAllProducts,
  getSingleProducts,
  InsertProduct,
  DeleteProduct,
} = require("../Controllers/ProductsController")
const CheckAdmin = require("../Core/Authorization")
const ProductsRouter = express.Router()
ProductsRouter.route("/products")
  .get(getAllProducts)
  .post(CheckAdmin, ImageUplode, validator.post, checkValidation, InsertProduct)
  .patch(CheckAdmin, ImageUplode, validator.patch, checkValidation, InsertProduct)
  .delete(CheckAdmin, validator.delete, checkValidation, DeleteProduct)
ProductsRouter.route("/products/:id").get(getSingleProducts)
module.exports = ProductsRouter
