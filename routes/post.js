const express = require("express");
const { createPost, likeandunlikePost, deletePost, followingskiallposts, updateCaption, addComment, deleteComment } = require("../controllers/Post");

const { isAuthenticated } = require("../middleware/authentication");
const { uploadpost } = require("../middleware/multerpost");

const router = express.Router();

router.route("/post/upload").post( isAuthenticated, uploadpost, createPost);

router.route("/post/:id").get(isAuthenticated, likeandunlikePost).delete(isAuthenticated, deletePost).put(isAuthenticated, updateCaption);


router.route("/posts").get(isAuthenticated, followingskiallposts);

router.route("/post/comment/:id").put(isAuthenticated, addComment).delete(isAuthenticated, deleteComment);




module.exports = router;
