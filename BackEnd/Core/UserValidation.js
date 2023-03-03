const { body, param } = require("express-validator")

module.exports.post = [
  body("FirstName")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("First Name should be a string")
    .isLength({ min: 3, max: 12 })
    .withMessage("First Name should be between 3 and 12 Letter"),
  body("LastName")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Last Name should be a string")
    .isLength({ min: 3, max: 12 })
    .withMessage("Last Name should be between 3 and 12 Letter"),
  body("Phone")
    .custom((value) => {
      return /01[0125]\d{8}/.test(value)
    })
    .withMessage("Invalid Phone Number"),
  body("Email").isEmail().withMessage("Inalid Email Format"),
  body("Password")
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage(
      "Password Must be min 8 charachers with at least one lowercase, one Uppercase, one special characher,one Number and one Symbol "
    ),
  body("Address").isObject().withMessage("Address Must Be an Object With governorate and city"),
  body("Address.governorate")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("governorate Should be a String"),
  body("Address.City").isAlpha("en-US", { ignore: " " }).withMessage("City Should be a String"),
]
module.exports.patch = [
  body("id").isMongoId().withMessage("User Id Is required"),
  body("FirstName")
    .optional()
    .isAlpha("en-US", { ignore: " " })
    .withMessage("First Name should be a string")
    .isLength({ min: 3, max: 12 })
    .withMessage("First Name should be between 3 and 12 Letter"),
  body("Last Name")
    .optional()
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Last Name should be a string")
    .isLength({ min: 3, max: 12 })
    .withMessage("Last Name should be between 3 and 12 Letter"),
  body("Phone")
    .custom((value) => {
      return /01[0125]\d{8}/.test(value)
    })
    .withMessage("Invalid Phone Number")
    .optional(),
  body("Email").isEmail().withMessage("InValid Email Format").optional(),
  body("Password")
    .optional()
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage(
      "Password Must be min 8 charachers with at least one lowercase, one Uppercase, one special characher,one Number and one Symbol "
    ),
  body("Address").isObject().withMessage("Address Must Be an Object With governorate and city"),
  body("Address.governorate")
    .optional()
    .isAlpha("en-US", { ignore: " " })
    .withMessage("governorate Should be a String")
    .optional(),
  body("Address.City")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("City Should be a String")
    .optional(),
]
module.exports.delete = [body("id").isMongoId().withMessage("User Id Is required")]
module.exports.getUserById = [param("id").isMongoId().withMessage("User Id Is required")]
