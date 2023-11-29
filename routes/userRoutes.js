const express=require('express');
const userroutes=express.Router();
const Controller=require('../controller/userController')
const isadminAuth = require("../middleware/adminauth");

userroutes.post('/login',Controller.login);
userroutes.get('/logout',Controller.logout);
userroutes.post('/register',Controller.register);
userroutes.post('/checkUser',isadminAuth,Controller.checkUser)
userroutes.get('/users',Controller.getallusers)
userroutes.put('/')
module.exports=userroutes;