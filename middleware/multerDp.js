const multer = require("multer");

//storage

const Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/profilepic");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
exports.uploadDp = multer({ storage: Storage, fileFilter }).single("avatar");


