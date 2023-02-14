const express=require('express');
const mongoose=require('mongoose');
const bodyParser =require('body-parser');

const app =express();
// import routes 
const postRoutes =require('./routes/posts');

//app middleware
app.use(bodyParser.json());
app.use(postRoutes );


const PORT =8000;
const DB_URL='mongodb+srv://nadil80:1997@cluster0.stiuiem.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);

mongoose.connect(DB_URL).then(()=>{
    console.log("Database Conected");
})
.catch((err)=>{
    console.log("Conection failed",err);mongoose.set('strictQuery', true);
})

app.listen(PORT, ()=>{
    console.log(`App is Running on ${PORT}`);
});