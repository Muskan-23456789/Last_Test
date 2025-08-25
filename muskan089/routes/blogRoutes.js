import express from "express";
import multer from "multer";
import {createblog,getblogs,getblogById} from "../controllers/blogController.js";
import {protect} from "../middlewares/authMiddleware.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/",protect,upload.single("image"),createblog);
router.get("/",getblogs);
router.get("/:id",getblogById);
export default router;




















