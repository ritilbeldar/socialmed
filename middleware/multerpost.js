const multer = require("multer");

const Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/posts");
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
exports.uploadpost = multer({ storage: Storage, fileFilter }).single(
  "images"
  
);
