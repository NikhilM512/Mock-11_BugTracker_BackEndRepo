const express = require("express")


const bugsRouter = express.Router();


bugsRouter.get("/", async (req, res) => {
    res.send("Bugs")
})


module.exports = {bugsRouter}