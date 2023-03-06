const express = require("express")
const validator = require("../Core/OrderValidation")
const CheckAdmin = require("../Core/Authorization")
const checkValidation = require("../Core/checkValidation")
const { PostOrder, getAllProducts, PatchOrder } = require("../Controllers/OrderController")
const OrderRouter = express.Router()

OrderRouter.route("/orders/:statue").get(getAllProducts)

OrderRouter.route("/orders")
  .patch(CheckAdmin, validator.Patch, checkValidation, PatchOrder)
  .post(CheckAdmin, validator.post, checkValidation, PostOrder)
module.exports = OrderRouter
