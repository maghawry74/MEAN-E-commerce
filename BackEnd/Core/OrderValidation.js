const { body } = require("express-validator")

module.exports.post = [
  body("Price").isNumeric().withMessage("Price Should Be a Number"),
  body("user").isMongoId().withMessage("user Should be a mongo Object ID"),
  body("Products")
    .isArray({ min: 1 })
    .withMessage("Products Should be an array of Numbers with minimum one product"),
  body("Products[*].Quantity").isNumeric().withMessage("Product Quantity Should be a Number"),
  body("Products[*].Product").isNumeric().withMessage("Product Id Should be a Number"),
]
