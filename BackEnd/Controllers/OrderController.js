const OrderSchema = require("../Model/OrderModel")

const getAllProducts = async (request, response, next) => {
  try {
    let orders = await OrderSchema.find({ Delivered: request.params.statue }, { __v: 0 })
      .populate({
        path: "user",
        select: { __v: 0, _id: 0, Password: 0 },
      })
      .sort({ createdAt: -1 })
      .populate({
        path: "Products.Product",
        select: { __v: 0 },
      })
    response.status(200).json({ data: orders })
  } catch (err) {
    next(err)
  }
}

const PostOrder = async (request, response, next) => {
  try {
    let newOrder = new OrderSchema({
      user: request.body.user,
      Price: request.body.Price,
      Products: request.body.Products,
      OrderDate: new Date(),
    })
    let order = await newOrder.save()
    response.status(200).json({ data: order })
  } catch (err) {
    next(err)
  }
}

const PatchOrder = async (request, response, next) => {
  try {
    let result = await OrderSchema.updateOne({ _id: request.body._id }, { Delivered: true })
    if (result.modifiedCount == 1) {
      response.status(200).json("Update Successfully")
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getAllProducts,
  PostOrder,
  PatchOrder,
}
