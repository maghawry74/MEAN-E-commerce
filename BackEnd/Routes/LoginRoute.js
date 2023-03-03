const express = require("express")
const jwt = require("jsonwebtoken")
const Login = require("../Controllers/LoginController")
let LoginRoute = express.Router()

LoginRoute.route("/Login").post(Login)
module.exports = LoginRoute
