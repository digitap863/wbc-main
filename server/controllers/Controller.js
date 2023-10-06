const jwt = require("jsonwebtoken");
const InvestorModel = require("../models/investorModel");
const dotenv = require("dotenv").config();
const adminCredentials = {
  adminid: process.env.ADMIN_ID,
  password: process.env.ADMIN_PASSWORD,
};


module.exports={
    loginController:(req,res)=>{
        const data = req.body;
        try {
          if (data.email != adminCredentials.adminid) {
            res.status(200).send({ message: "ID Mismatch", success: false });
          } else {
            if (data.password === adminCredentials.password) {
              const token = jwt.sign({ id: data.email }, process.env.JWT_SECRET, {
                expiresIn: "1d",
              });
              res
                .status(200)
                .send({ message: "Login Success", success: true, token });
            } else {
              res
                .status(200)
                .send({ message: "Password Mismatch", success: false });
            }
          }
        } catch (error) {
          res.status(500).send({
            message: `admin login controller ${error.message}`,
            success: false,
          });
        } 
    },
    addMember:async(req,res)=>{
        const data = req.body
        try{
          data.idImage = req.files.idImage[0]?.filename
        data.profileImage = req.files.profileImage[0]?.filename
        const newMember = new InvestorModel(data)
        await newMember.save()
        const members = await InvestorModel.find()
        res.status(201).send({msg:"member added succesfully",success:true,members})
        }catch(err){
          console.log(err);
          res.status(500).send({
            message: `admin addmember controller ${err.message}`,
            success: false,
          });
        }
    },
    fetchInvestors:async(req,res)=>{
      try{
        const investors = await InvestorModel.find()
        res.status(200).send({msg:'succesfully fetched',success:true,investors})
      }catch(err){
        console.log(err);
        res.status(500).send({msg:'error in fetching investors',success:false})
      }
    }
}