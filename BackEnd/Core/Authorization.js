const jwt = require("jsonwebtoken")

let CheckAdmin = (request, response, next) => {
  if (request.header("authorization") != undefined) {
    let token = request.header("authorization").split(" ")[1]
    let result = jwt.verify(token, process.env.SECRETKEY)
    request.body.role = result.role
    console.log(result)
    next()
  } else {
    let error = new Error("UnAuthenticated")
    error.status = 401
    next(error)
  }
}

module.exports = CheckAdmin
