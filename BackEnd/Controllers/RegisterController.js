const userSchema = require("../Model/UserMode")
const bcrypt = require("bcrypt")
const CheckuserbyEmail = async (request, response, next) => {
  try {
    console.log(request.params.Email)
    let user = await userSchema.findOne({ Email: request.params.Email })
    if (user == null) {
      response.status(200).json(null)
    } else {
      response.status(200).json({ EmailTaken: true })
    }
  } catch (err) {
    next(err)
  }
}

const CheckuserbyPhone = async (request, response, next) => {
  try {
    let user = await userSchema.findOne({ Phone: request.params.Phone })
    if (user == null) {
      response.status(200).json(null)
    } else {
      response.status(200).json({ PhoneTaken: true })
    }
  } catch (err) {
    next(err)
  }
}
const PostUser = async (request, response, next) => {
  try {
    let hashPassword = await PasswordHashing(request.body.Password)
    let newUser = new userSchema({
      FirstName: request.body.FirstName,
      LastName: request.body.LastName,
      Phone: request.body.Phone,
      Email: request.body.Email,
      Password: hashPassword,
      Address: request.body.Address,
    })
    let resultData = await newUser.save()
    response.status(200).json({ data: resultData })
  } catch (err) {
    next(err)
  }
}
const PasswordHashing = (Password) => {
  return bcrypt.hash(Password, 10)
}
module.exports = {
  PostUser,
  CheckuserbyEmail,
  CheckuserbyPhone,
}
