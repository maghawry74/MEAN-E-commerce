const multer = require("multer")

const DiskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/")
  },
  filename: function (req, file, cb) {
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
      cb(null, `${Date.now()}${file.originalname}`)
    } else {
      let err = new Error("invalid File Formate")
      err.state = 403
      cb(err)
    }
  },
})

module.exports = multer({ storage: DiskStorage }).single("image")
