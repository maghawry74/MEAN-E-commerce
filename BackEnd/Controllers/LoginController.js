const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const userSchema = require("../Model/UserMode")
const Login = async (request, response, next) => {
  if (request.body.Email == "admin" && request.body.Password == 1234) {
    let token = jwt.sign(
      {
        role: "admin",
      },
      process.env.SECRETKEY
    )
    response.status(200).json({ token, role: "Admin" })
  } else {
    try {
      let user = await userSchema.findOne({ Email: request.body.Email })
      if (user == null) throw new Error("User Not Found")
      let Result = await bcrypt.compare(request.body.Password, user.Password)
      if (Result == false) throw new Error("Unauthenticated User")
      let token = jwt.sign(
        {
          id: user._id,
          role: "User",
        },
        process.env.SECRETKEY
      )
      response.status(200).json({ token, role: "User", user })
    } catch (err) {
      err.status = 401
      next(err)
    }
  }
}

module.exports = Login
