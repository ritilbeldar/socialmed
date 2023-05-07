var express = require("express");
const {
  register,
  login,
  logout,
  followUser,
  updatePassword,
  updateProfile,
  deleteMyProfile,
  myProfile,
  getUserProfile,
  getAllUsers,
  forgotPassword,
  resetPassword,
  myPosts,
  addDetails,
} = require("../controllers/User");
const { isAuthenticated } = require("../middleware/authentication");
const { uploadDp } = require("../middleware/multerDp");

var router = express.Router();

router
  .route("/register").post(uploadDp, register)
  
  router.route("/register2").post(isAuthenticated, addDetails, uploadDp);

router.route("/login").post(login);
router.route("/logout").get(logout);

router.route("/follow/:id").get(isAuthenticated, followUser);

router.route("/update/password").put(isAuthenticated, updatePassword);

router.route("/update/profile").put(isAuthenticated, updateProfile);

router.route("/delete/me").delete(isAuthenticated, deleteMyProfile);

router.route("/me").get(isAuthenticated, myProfile);
router.route("/my/posts").get(isAuthenticated, myPosts);

router.route("/user/:id").get(isAuthenticated, getUserProfile);

router.route("/users").get(isAuthenticated, getAllUsers);

router.route("/forgot/password").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

module.exports = router;
