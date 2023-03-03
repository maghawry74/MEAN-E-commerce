const express = require("express")
const RegisteRouter = express.Router()
const {
  PostUser,
  CheckuserbyEmail,
  CheckuserbyPhone,
} = require("../Controllers/RegisterController")
const { post } = require("../Core/UserValidation")
RegisteRouter.route("/register").post(post, PostUser)
RegisteRouter.route("/register/:Phone").get(CheckuserbyPhone)
RegisteRouter.route("/register/check/:Email").get(CheckuserbyEmail)

module.exports = RegisteRouter
