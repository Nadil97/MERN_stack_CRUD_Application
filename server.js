const express =require('express');
const mongoose=require('mongoose');

const app =express();




const PORT =8000;
const DB_URL='mongodb+srv://nadil80:1997@cluster0.stiuiem.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL).then(()=>{
    console.log("Database Conected");
})
.catch((err)=>{
    console.log("Conection failed");
})

app.listen(PORT, ()=>{
    console.log(`App is Running on ${PORT}`);
});