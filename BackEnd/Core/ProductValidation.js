const { body } = require("express-validator")

module.exports.post = [
  body("ProductName")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Product Name Should Be a String"),
  body("Price").isNumeric().withMessage("Product Price Should Be a Number"),
  body("Description").isString().withMessage("Product Description Should Be a String"),
  body("Category")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Product Category Should Be a String"),
  body("Amount").isNumeric().withMessage("Product Amount Should Be a Number"),
  body("image")
    .custom((value) => {
      return value == "" ? false : true
    })
    .withMessage("Image is required"),
]

module.exports.patch = [
  body("_id").isNumeric().withMessage("Id Must be a Number "),
  body("ProductName")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Product Name Should Be a String")
    .optional(),
  body("Price").isNumeric().withMessage("Product Price Should Be a Number").optional(),
  body("Description").isString().withMessage("Product Description Should Be a String").optional(),
  body("Category")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Product Category Should Be a String")
    .optional(),
  body("Amount").isNumeric().withMessage("Product Amount Should Be a Number").optional(),
]
module.exports.delete = [
  body("id").isNumeric().withMessage("Id Must be a Number"),
  body("image")
    .custom((value) => {
      return value == "" ? false : true
    })
    .withMessage("Image is required"),
]
