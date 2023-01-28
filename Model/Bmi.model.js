const mongoose = require("mongoose")

const bmiSchema = mongoose.Schema({
    weight : Number,
    height : Number,
    bmi : Number
})

const BmiModel = mongoose.model("bmi", bmiSchema)

module.exports = {
BmiModel
}