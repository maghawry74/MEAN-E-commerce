console.clear()
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const server = express()
const mongoose = require("mongoose")
const ProductsRouter = require("./Routes/ProductRoute")
const UserRoute = require("./Routes/UserRoute")
const LoginRouter = require("./Routes/LoginRoute")
const registerRouter = require("./Routes/RegisterRoute")
const orderRoute = require("./Routes/OrderRoute")
const cors = require("cors")
const OrderRouter = require("./Routes/OrderRoute")
mongoose.set("strictQuery", true)
mongoose
  .connect(process.env.ConnectionString)
  .then(() => {
    console.log("DB Connection Established")
    server.listen(5000, () => {
      console.log("server is listening on port 5000")
    })
  })
  .catch((error) => {
    console.log(error)
  })

server.use(morgan("dev"))
server.use((req, res, next) => {
  next()
})
server.use(
  cors({
    origin: "http://localhost:4200",
    allowedHeaders: " Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization",
    methods: "GET, POST, PATCH, DELETE",
  })
)
server.options("*", cors())
server.use(express.static("public"))
server.use(express.json({ limit: "50mb" }))
server.use(registerRouter)
server.use(LoginRouter)
server.use(UserRoute)
server.use(OrderRouter)
server.use(ProductsRouter)
server.use((request, response, next) => {
  response.status(404).json({ message: "Page Not Found" })
})
server.use((error, request, response, next) => {
  response.status(error.status || 403).json({ message: `${error}` })
})
