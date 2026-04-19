const express = require('express');
const app = express();
app.use(express.json());

app.get('/books',(req,res)=>{
    res.send("This is the List of the books ");
});

app.post('.books',(req,res)=>{
    res.send("books added successfully");
});

app.listen(3000,()=>{
    console.log("server started successfully");
});