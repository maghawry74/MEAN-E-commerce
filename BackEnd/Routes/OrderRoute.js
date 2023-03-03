const express = require("express")
const validator = require("../Core/OrderValidation")
const CheckAdmin = require("../Core/Authorization")
const checkValidation = require("../Core/checkValidation")
const { PostOrder, getAllProducts } = require("../Controllers/OrderController")
const OrderRouter = express.Router()

OrderRouter.route("/orders")
  .get(getAllProducts)
  .post(CheckAdmin, validator.post, checkValidation, PostOrder)

module.exports = OrderRouter
