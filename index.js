const express = require('express');
const app=express();
const mongoose=require('mongoose')
const cors = require('cors');
const userRoute = require("./routes/user");

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

mongoose.connect("mongodb+srv://rahul:21022003@cluster0.bbnefuf.mongodb.net/vit?retryWrites=true&w=majority").then(() => 
console.log("DB Connection Successfull"))
.catch((err) => {
  console.error(err);
});

app.use(express.json());
app.use(cors(corsOptions));
app.use("/backend/users/", userRoute);
app.listen(8800,()=>{
    console.log("Backennd");
})