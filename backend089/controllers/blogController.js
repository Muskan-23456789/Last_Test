import blog from "../models/blogModel.js";
import cloudinary from "../config/cloudinaryConfig.js";


export const createblog = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content || !req.file)
      return res.status(400).json({ message: "All fields are required" });

    const result = await cloudinary.uploader.upload(req.file.path, { folder: "blogs" })
    const blog = await blog.create({
      title,
      content,
      imageURL: result.secure_url,
      authorId: req.user,
    });
    res.status(201).json
    ({ message: "Blog created successfully", blog });
  }
  catch(error){
    res.status(500).json
    ({ message: "Server error", error: error.message });
  }
};
export const getblogs = async (req, res) => {
  try {
    const blogs = await blog.find().populate("authorId", "name email");
    res.status(200).json(blogs);
  } 
  catch (error) {
    res.status(500).json
    ({ message: "Server error", error: error.message });
  }
};
export const getblogById = async (req, res) => {
  try {
    const blog = await blog.findById(req.params.id).populate("authorId", "name email");
    if (!blog) return res.status(404).json
    ({ message: "Blog not found" });

    res.status(200).json(blog);
  } 
  catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};






















































