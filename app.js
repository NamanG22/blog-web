//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const posts = {
  "Day 1":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."
}

const detailPost = {
  "Day 1":"Lorem ipsum dolor sit amet, consectetur adipisc  ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed turpis tincidunt id aliquet risus feugiat in. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Viverra aliquet eget sit amet. Ultrices dui sapien eget mi proin sed libero enim. Massa tempor nec feugiat nisl pretium fusce id. Maecenas sed enim ut sem viverra. Tellus molestie nunc non blandit massa. Gravida neque convallis a cras semper. Bibendum enim facilisis gravida neque convallis a. Orci porta non pulvinar neque laoreet. Est ultricies integer quis auctor elit sed. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ut sem viverra aliquet eget sit amet tellus cras. Faucibus vitae aliquet nec ullamcorper. Netus et malesuada fames ac turpis egestas. Fermentum iaculis eu non diam phasellus vestibulum lorem. Scelerisque felis imperdiet proin fermentum leo vel. Aliquam etiam erat velit scelerisque in dictum."
}

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

mongoose.connect("mongodb://localhost:27017/blog-web");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const postSchema = new mongoose.Schema({
  title:String,
  post:String
})

const Post = mongoose.model("Post",postSchema);

app.get("/",function(req,res) {

  async function findAll() {
    const allItems = await Post.find({});
    res.render('home',{homeContent:homeStartingContent,posts:allItems});
  }
  findAll();

})
app.get("/home",function(req,res) {
  res.render('home',{homeContent:homeStartingContent,posts:posts});
})

app.get("/posts",function(req,res) {
  res.render('post');
})

app.get("/about",function(req,res) {
  res.render('about',{aboutContent:aboutContent});
})

app.get("/contact",function(req,res) {
  res.render('contact',{contactContent:contactContent});
})

app.get("/compose",function(req,res) {
  res.render('compose');
})

app.post("/compose",function(req,res) {
  let title = req.body.title;
  let post = req.body.post;
  if(title && post){
    const newPost = new Post({
      title:title,
      post:post
    })
    newPost.save();
  }
  res.redirect("/");
})

app.get('/posts/:post', function (req, res) {
  const token = req.params.post;
  async function findSpec() {
    const postFound = await Post.findOne({_id:token})
    res.render("post",{title:postFound.title,post:postFound.post})
  }
  findSpec();
})



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
