const express = require("express")
const {
  getUsers,
  getUserById,
  PatchUser,
  DeleteUserById,
} = require("../Controllers/UserController")
const validator = require("../Core/UserValidation")
const checkValidation = require("../Core/checkValidation")
const UserRouter = express.Router()

UserRouter.route("/users")
  .get(getUsers)
  .patch(validator.patch, checkValidation, PatchUser)
  .delete(validator.delete, checkValidation, DeleteUserById)

UserRouter.route("/users/:id").get(validator.getUserById, getUserById)
module.exports = UserRouter
