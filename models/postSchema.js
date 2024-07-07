const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema({
    author:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    created_at:{
        type:Date,
        required:true,
    },
});

const Post = mongoose.model("Post",blogSchema);
module.exports = Post;