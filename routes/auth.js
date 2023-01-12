const express = require("express");
const { model } = require("mongoose");
const router = express.Router()

router.get("/", (req, res) =>{
    res.send("Hello")
})

router.post("signup", (req, res) =>{
    const {name, email, password} = req.body;
    if(!email || !password || !name){
        res.json({error: "Please add all the fiels"})
    }
    res.json({ msg: "succesfully sent"})
})

module.exports = router