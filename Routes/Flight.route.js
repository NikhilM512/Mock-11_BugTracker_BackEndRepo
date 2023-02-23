const express = require("express");
const { FlightModel } = require("../Models/Flight.model");

const flightRouter = express.Router();


flightRouter.get("/", async (req, res) => {
    const flight = await FlightModel.find();
    res.send(flight);
})

flightRouter.post("/", async (req, res) => {
    const payload = req.body
    console.log(payload)
    try{
        const new_flight = new FlightModel(payload)
        await new_flight.save()
        res.send({"msg" : "Flight Added to the system successfully"})
    }
    catch(err){
        console.log(err)
        res.send({"err" : "Something went wrong"})
    }
});

flightRouter.get("/:id", async (req, res) => {
    let id = req.params.id;
    console.log(id);
    try {
      let flight = await FlightModel.findById(id);
      console.log(flight);
      res.send(flight);
    } catch (error) {
      res.send(error);
    }
  });

  flightRouter.put("/:flightID", async (req, res) => {
    const flightID = req.params.flightID
    let payload=req.body
    // const userID = req.body.userID
    const flight = await FlightModel.findOne({_id:flightID})
    // if(userID !== flight.userID){
    //     res.send("Not authorised")
    // }
    // else{
        await FlightModel.findByIdAndUpdate({_id :flightID},payload)
        res.send({"msg" : "Flight updated successfully"})
    // }
})

flightRouter.patch("/:flightID", async (req, res) => {
    const flightID = req.params.flightID
    let payload=req.body
    // const userID = req.body.userID
    const flight = await FlightModel.findOne({_id:flightID})
    // if(userID !== flight.userID){
    //     res.send("Not authorised")
    // }
    // else{
        await FlightModel.findByIdAndUpdate({_id :flightID},payload)
        res.send({"msg" : "Flight updated successfully"})
    // }
})

flightRouter.delete("/:flightID", async (req, res) => {
const flightID = req.params.flightID
// const userID = req.body.userID
const flight = await FlightModel.findOne({_id:flightID})
// if(userID !== flight.userID){
//     res.send("Not authorised")
// }
// else{
    await FlightModel.findByIdAndDelete({_id : flightID})
    res.send({"msg" : "Flight deleted successfully"})
// }
})

module.exports = {flightRouter}