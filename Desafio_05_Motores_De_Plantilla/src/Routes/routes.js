const express = require("express");
const { Router } = express;
const router = Router();
const Actions = require("../Controller/controller");
const handlebars = require("express-handlebars");

// return all products
router.get('/all', (req, res) => {
  let datos = { "products": Actions.getAll() }

  if (datos.products.length === 0) {
    res.render("vacio")
  } else {
    res.render("products", datos)
  }
})

// return a product by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(Actions.getOne(id));
});

// add a new product
router.post("/", (req, res) => {
  Actions.add(req.body)
  res.redirect("/")
});





module.exports = router;