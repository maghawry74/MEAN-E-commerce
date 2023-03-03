const UserSchema = require("../Model/UserMode")
const bcrypt = require("bcrypt")
const getUsers = async (request, response, next) => {
  try {
    let users = await UserSchema.find()
    response.status(200).json({ data: users })
  } catch (err) {
    next(err)
  }
}
const getUserById = async (request, response, next) => {
  try {
    let user = UserSchema.findOne({ _id: request.params.id })
    response.status(200).json(user)
  } catch (err) {
    next(err)
  }
}
const PatchUser = async (request, response, next) => {
  try {
    let data = await UserSchema.updateOne({ _id: request.body.id }, request.body)
    if (data.matchedCount != 0) {
      response.status(200).json({ data: "Updated Successfully" })
    } else {
      throw new Error("User is Not Founded")
    }
  } catch (err) {
    next(err)
  }
}

const DeleteUserById = async (request, response, next) => {
  try {
    let data = await UserSchema.deleteOne({ _id: request.body.id })
    if (data.deletedCount != 0) {
      response.status(200).json({ data: `Deleted Successfully` })
    } else {
      throw new Error("User is Not Founded")
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getUsers,
  getUserById,
  PatchUser,
  DeleteUserById,
}
