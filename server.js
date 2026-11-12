require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const PORT = process.env.PORT  || 5000;

const employeeRoutes = require("./routes/employeeRoutes")

 app.use("/employees",employeeRoutes)

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{

    app.listen(PORT,()=>{
      console.log(`server is running on port ${PORT}`)
    })

    console.log("mongoodb db connection successfully...")

   
})
.catch((err)=>{
    console.log("something went wornge",err.message)
})

