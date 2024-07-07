const { default: mongoose } = require("mongoose");
const Post = require("./models/postSchema");
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


let posts = [
    {
        author:"Adam",
        title:"How to make money online",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        created_at:new Date(),
    },
    {
        author:"Eve",
        title:"How to kill mosquitoes",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        created_at:new Date(),
    },
]

Post.insertMany(posts);