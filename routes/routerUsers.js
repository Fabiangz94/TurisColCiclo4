const express = require("express");
const router = express.Router();
let userSchema = require ("../db/schemas/userSchema");


router.get("/get/:idUser", async function(req, res){
    let idUser = req.params.idUser;
    let result = await userSchema.findUserById(idUser);
    res.json (result);
});



router.put("/put/:idUser", async function(req, res){
    let idUser = req.params.idUser;
    let newUser = req.body;
    let result = await userSchema.updateUserById(idUser, newUser);
    res.json (result);
});


router.get("/all", async function(req, res){
    let result = await userSchema.getAllUser();
    res.json (result);
});

router.post("/create", async function(req, res){
    let newUser = req.body;
    let result = await userSchema.createUser(newUser);
    res.json (result);
});

router.delete("/delete/:idUser", async function(req, res){
    let idUser = req.params.idUser;
    let result = await userSchema.deleteUser(idUser);
    res.json (result);
});

module.exports = router;


