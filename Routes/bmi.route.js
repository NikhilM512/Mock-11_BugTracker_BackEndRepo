const express = require("express");
const { BmiModel } = require("../Model/Bmi.model");

const bmiRouter = express.Router();


bmiRouter.get("/", async (req, res) => {
    const bmi = await BmiModel.find()
    res.send(bmi)
})

bmiRouter.post("/create", async (req, res) => {
    const payload = req.body
    //get token from header
    //verify token using jwt
    try{
        const new_bmi = new BmiModel(payload)
        await new_bmi.save()
        res.send({"msg" : "BMI Added successfully"})
    }
    catch(err){
        console.log(err)
        res.send({"err" : "Something went wrong"})
    }
})

module.exports = {bmiRouter}