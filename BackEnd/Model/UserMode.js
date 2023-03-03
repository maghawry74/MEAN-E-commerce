const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  FirstName: String,
  LastName: String,
  Phone: {
    type: String,
    validate: [/01[0125]\d{8}/, " Invalid phone number"],
  },
  Email: {
    type: String,
    validate: [
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      "Invalid Email",
    ],
  },
  Password: {
    type: String,
    validate: [
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&?"])[a-zA-Z0-9!#$%&?]/,
      "Ivalid Password",
    ],
  },
  Address: {
    governorate: String,
    City: String,
  },
})

module.exports = mongoose.model("Users", userSchema)
