const express = require("express");
// const { model } = require("mongoose");
const mongoose = require("mongoose")
const router = express.Router()
const User = mongoose.model("User")

router.get("/", (req, res) =>{
    res.send("Hello")
})

router.post("/signup", (req, res) =>{
    const {name, email, password} = req.body;
    if(!email || !password || !name){
        res.status(422).json({ error: "Please add all the fields"})
    }
    res.json({ msg: "succesfully sent"})

    User.findOne({ email: email})
        .then((savedUser) =>{
            if(savedUser){
                return res.status(422).json({error: "user already exist with that email"})
            }
            const user = new User({
                email,
                name,
                password,
            })

            user.save()
        })
        .then(user =>{
            res.json({msg: "added succesfully"})
        })
        .catch(err =>{
            console.log(err);
        })
})

module.exports = router