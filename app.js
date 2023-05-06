const express = require('express');
//import express from 'express';

const app = express();

// Template Engine
app.set("view engine","ejs");
//Middlewares
app.use(express.static("public")); //static files will be in the public file.

// app.get("/",(req,res)=>{
//     res.status(200).send('INDEXx SAYFASİ') // we will render the index template instead of text
// }) 

//Routes
app.get("/",(req,res)=>{
    res.status(200).render('index',{
        page_name:"index",
    })
})
app.get("/about",(req,res)=>{
    res.status(200).render('about',{
        page_name:"about",
    })
})


const port = 3000;
app.listen(port,() =>{
    console.log(`App started on port ${port}`)
});
