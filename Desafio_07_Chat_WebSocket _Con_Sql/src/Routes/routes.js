const express = require("express");
const { Router } = express;
const router = Router();
const Actions = require("../Controller/controller");
const handlebars = require("express-handlebars");


/*function renderProducts() {
  fetch('http://localhost:8080/product-list')
    .then(response => response.json())
    .then(data => {
      const html = data.map((products, index) => {
        return (
          `<tr>
            <td>${products.name}</td>
            <td>${products.price}</td>
            <td><img src="${products.thumbnail}" class="productImage" alt="${products.name}"></td>                  
          </tr>`
        )
      }).join(" ");
      document.getElementById('tbodylist').innerHTML = html;
    });
}*/
// return all products
router.get('/all', (req, res) => {
  let datos = { "products": Actions.getAll() }

  if (datos.length === 0) {
    res.render("vacio")
  } else {
    res.render("products", datos)
  }
})

router.get("/product-list", (req, res) => {
  const datos = Actions.getAll()

    .then((data) => {
      res.status(200).json(data)

    })
    .catch((err) => {
      res.status(400).json(err)
    })
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