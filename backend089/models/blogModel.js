import mongoose from "mongoose";

const blogSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    imageURL:{
        type:String,
        required:true
    },
    authorid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},
{ timestamps: true });
const blog = mongoose.model("blog", blogSchema);
export default blog;
