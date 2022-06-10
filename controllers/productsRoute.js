////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Product = require("../models/products")
const router = express.Router()

router.use((req, res, next) => {
  next()
})  


// index route
router.get('/', (req, res) => {
  // res.send('HEY THIS IS PRODUCT')
  Product.find()
    .then((product) => {
      // render the template with the data from the database
      res.render("products/index", { product });
    })
})


router.get("/new", (req, res)=> {
  res.render('products/new')
})


router.post("/", (req, res) => {
  
  // create the new product
  Product.create(req.body)
  .then((product) => {
    // redirect user to index page if successfully created item
    res.redirect("products");
  })
  // send error as json
  .catch((error) => {
    console.log(error);
    res.json({ error });
  });
});

router.get("/:id", (req, res) => {
  // get the id from params
  const id = req.params.id;

// show route

// find the particular fruit from the database
Product.findById(id)
.then((product) => {
  // render the template with the data from the database
  res.render("products/show.liquid", { product });
})
.catch((error) => {
  console.log(error);
  res.json({ error });
});
});





module.exports = router