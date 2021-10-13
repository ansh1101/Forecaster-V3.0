// jshint esversion:6
const fs = require('fs');

fs.copyFileSync('file1.txt' , 'server2.txt' );

// const express = require('express');

// const app = express();

// app.get("/" , function(req, res){
// res.send(`<h1>Calculator</h1> <input class="a"></input> <input class = "b"></input> 
// <button class = "plus">+</button> <button>-</button> <button>*</button> <button>/</button> `);
// });

// app.listen(4000 , function(){
//    console.log("Server Started");
// });
// var button = document.querySelector(".plus");
// function add(){
//     button.addEventListener("click", function(){
//         document.querySelector(".a").innerHTML  +    document.querySelector(".b").innerHTML ;
//     });
// }
