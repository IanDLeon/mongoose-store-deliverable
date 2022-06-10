// import dependencies 
const mongoose = require('./connection');
const Product = require('./products');

// Seed Code
const db = mongoose.connection;

//Make sure code is not run till connected
db.on('open', () => {
  

//Write your seed code below

const newProducts = [
  {
    name: 'Beans',
    description:
      'A small pile of beans. Buy more beans for a big pile of beans.',
    img: 'https://imgur.com/LEHS8h3.png',
    price: 5,
    qty: 99,
  },
  {
    name: 'Bones',
    description: "It's just a bag of bones.",
    img: 'https://imgur.com/dalOqwk.png',
    price: 25,
    qty: 1,
  },
  {
    name: 'Bins',
    description: 'A stack of colorful bins for your beans and bones.',
    img: 'https://imgur.com/ptWDPO1.png',
    price: 7000,
    qty: 1,
  },
];
// delete all products
Product.deleteMany({})
.then((deletedProducts)=> {
  Product.create(newProducts)
  .then((newProducts)=> {
    console.log(newProducts)
    db.close()
  })
  .catch((error) => {
    console.log(error);
    db.close();
  });
})
  .catch((error) => {
    console.log(error);
    db.close();
});
// seed code above.
})
