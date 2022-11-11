const express = require("express");
const { Router } = express;
const router = Router();
const Actions = require("../Controller/controller");

// return all products
router.get("/all", (req, res) => {
  res.send(Actions.getAll());
});

// return a product by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(Actions.getOne(id));
});

// add a new product
router.post("/", (req, res) => {
  res.send(Actions.add(req.body));
});

// update a product
router.put("/:id", (req, res) => {
  const { id } = req.params
  const body = req.body
  res.send(Actions.update(id, body));
});

// delete a product
router.delete("/:id", (req, res) => {
  res.send(Actions.delete(req.params.id));
})


module.exports = router;