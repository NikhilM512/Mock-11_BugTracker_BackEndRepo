const express = require("express");
const { BookingModel } = require("../Models/Booking.model");

const bookingRouter = express.Router();


bookingRouter.get("/", async (req, res) => {
    const flight = await BookingModel.find();
    res.send("MAKE A POST REQ TO BOOK");
})

bookingRouter.post("/",async(req,res)=>{
    const payload = req.body
    console.log(payload)
    try{
        const new_booking = new BookingModel(payload)
        await new_booking.save()
        res.send({"msg" : "Booking Done in the system successfully"})
    }
    catch(err){
        console.log(err)
        res.send({"err" : "Something went wrong"})
    }
});

module.exports = {bookingRouter}