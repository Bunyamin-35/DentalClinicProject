const express = require('express');
//import express from 'express';

const app = express();

app.get("/",(req,res)=>{
    res.status(200).send('INDEXx SAYFASİ')
})

const port = 3000;
app.listen(port,() =>{
    console.log(`App started on port ${port}`)
});
