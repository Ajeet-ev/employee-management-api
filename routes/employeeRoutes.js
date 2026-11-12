const express = require("express");

const  Employee = require("../models/Employee.js");

const router = express.Router();

router.get("/", async (req,res)=>{
    try{
      const employees = await Employee.find();

      if(employees.length === 0){
        return res.status(404).json({
            message:"employee not found"
        })
      }

      res.status(200).json({
        message:"employee fetched successfully..",
        employee: employees
      })
    }
    catch(err){
           res.status(500).json({
            message:"something went worng",
            error:err.message
           })
    }
})


router.get("/department/:department", async  (req,res)=>{
    try{

        const department = req.params.department;

        const employees = await Employee.find({
            department:department
        })

        if(employees.length === 0){
            return res.status(404).json({
                message:"no employee found in this account"
            })
        }

           res.status(200).json({
            message: "Employees fetched successfully",
            employees: employees
        });

    }
    catch(err){
           res.status(500).json({
            message: "Something went wrong",
            error: err.message
        });
    }
})


module.exports = router;
