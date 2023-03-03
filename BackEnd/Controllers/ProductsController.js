const ProductSchema = require("../Model/ProductModel")
const fs = require("fs").promises
let getAllProducts = async (request, response, next) => {
  try {
    let products = await ProductSchema.find({}, { __v: 0 })
    response.status(200).json(products)
  } catch (error) {
    next(error)
  }
}
let getSingleProducts = async (request, response, next) => {
  try {
    let data = await ProductSchema.findOne({ _id: request.params.id })
    if (data) {
      response.status(200).json(data)
    } else {
      let err = new Error("Product isn't Founded")
      err.status = 404
      throw err
    }
  } catch (err) {
    next(err)
  }
}

let InsertProduct = async (request, response, next) => {
  console.log(request.file)
  if (request.file != undefined) {
    console.log("Post Path")
    PostProduct(request, response, next)
  } else {
    console.log("Patch Path")
    PatchProduct(request, response, next)
  }
}
let PostProduct = async (request, response, next) => {
  try {
    request.body.image = `${process.env.serverURL}${request.file.filename}`
    let newProduct = new ProductSchema({
      _id: request.body.id,
      ProductName: request.body.ProductName,
      Price: request.body.Price,
      Description: request.body.Description,
      Amount: request.body.Amount,
      image: request.body.image,
      Category: request.body.Category,
    })
    let data = await newProduct.save()
    response.status(200).json({ data: data })
  } catch (error) {
    next(error)
  }
}
let PatchProduct = async (request, response, next) => {
  try {
    console.log(request.body.file)
    let data = await ProductSchema.updateOne({ _id: request.body._id }, request.body)
    if (data.matchedCount == 0) {
      let error = new Error("Product isn't Found")
      error.status = 404
      throw error
    } else {
      response.status(200).json({ data: "Updated Successfully" })
    }
  } catch (err) {
    next(err)
  }
}
let DeleteProduct = async (request, response, next) => {
  try {
    console.log(request)
    let data = await ProductSchema.deleteOne({ _id: request.body.id })
    if (data.deletedCount == 0) {
      let err = new Error("Product isn't Founded")
      err.status = 400
      throw err
    } else {
      if (request.body.image) {
        let path = `public/${request.body.image.split(process.env.serverURL)[1]}`
        console.log(path)
        await fs.unlink(path)
        response.status(200).json({ data: "Deleted Successfully" })
      } else {
        let err = new Error("Image Path is required")
        err.status = 400
        throw err
      }
    }
  } catch (error) {
    next(error)
  }
}
module.exports = {
  getAllProducts,
  getSingleProducts,
  InsertProduct,
  DeleteProduct,
}
