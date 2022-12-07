const express = require("express");
const { Router } = require('express');
const router = Router();
const Actions = require("../Controller/controller");



// return all products
router.get('/all', async (req, res) => {
  let datos = await Actions.getAll()

  if (datos.length === 0) {

    res.render("vacio")
  } else {
    console.log(datos)
    res.render("products", { products: datos })
  }
})

router.get("/product-list", async (req, res) => {
  const datos = await Actions.getAll()

    .then((data) => {
      res.status(200).json(data)

    })
    .catch((err) => {
      res.status(400).json(err)
    })
})
// return a product by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await Actions.getOne(id)
  res.send(data);
});

// add a new product
router.post("/", (req, res) => {
  Actions.add(req.body)
  res.redirect("/")
});




module.exports = router; 