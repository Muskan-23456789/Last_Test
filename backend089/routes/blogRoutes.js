import express from "express";
import { createblog, getblogs, getblogById } from "../controllers/blogController.js";
import { protect } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post("/", protect, upload.single("image"), createblog);
router.get("/", getblogs);
router.get("/:id", getblogById);

export default router;
