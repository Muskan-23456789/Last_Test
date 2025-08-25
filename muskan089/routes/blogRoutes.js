import express from "express";
import { createBlog, getBlogs, getBlogById } from "../controllers/blogController.js";
import { protect } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post("/", protect, upload.single("image"), createBlog);
router.get("/", getBlogs);
router.get("/:id", getBlogById);

export default router;
