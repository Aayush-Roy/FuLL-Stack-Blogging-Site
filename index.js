const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const Post = require("./models/postSchema")
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join("public")));
main()
.then((res)=>{
    console.log(`connected`)
}).catch((err)=>{
    console.log(err);
})
async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/blog');
}

app.listen(8080,(req,res)=>{
    console.log(`app listening on port`);
});
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/posts",async(req,res)=>{
    let posts = await Post.find();
    res.render("show",{posts});
})
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})
app.post("/posts",(req,res)=>{
    try{
        let {id} = req.params;
    let {author,title,content} = req.body;
    let newPost = new Post({
        author:author,
        title:title,
        content:content,
        created_at:new Date(),
    })
    newPost.save().then((res)=>console.log('saved'))
    .catch((err)=>console.log(err));
    res.redirect("/posts");
    }catch(err)
    {
        console.log(err);
    };
})
app.get("/posts/:id/edit",async (req,res)=>{
    let {id} = req.params;
    let post = await Post.findById(id);
    res.render("edit",{post})
})
app.put("/posts/:id",async (req,res)=>{
    let {id} = req.params;
    let {newTitle,newContent} = req.body;
    let updatedPost = await Post.findByIdAndUpdate(id,{title:newTitle},{content:newContent});
    res.redirect("/posts");
})
app.delete("/posts/:id",async (req,res)=>{
    let {id} = req.params;
    let delPost = await Post.findByIdAndDelete(id);
    res.redirect("/posts");
})