const express = require("express");
const { Router } = require("express");
const home = Router();

//importo el controller
const Contenedor = require("../controller/products.controller")

home.get("/", (req, res) => {  
  res.render('home'); 
});



module.exports = home;