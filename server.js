/* ================================================================ */
// ================================================================
// get all the tools we need
// ================================================================
/* ======== I want to set up all the variables here only  ========= */

const express = require('express');
const port = process.env.PORT ||3000;
const app = express();
//const router = express.Router();
//const path = require('path');


    // == SET UP the engine PUG ==
    app.set('view engine', 'pug');


    // ===== SET UP the folders =====
    app.use(express.static('public'));
    app.use(express.static('views'));


    // =============== GET a Home Page ===============
    app.get('/', (req, res) => res.status(200).render('pages/index', {title: 'Malima Car - Automotive Company'}));


    // =============== GET a teste Page ===============
    app.get('/hours', (req, res) => res.status(200).render('pages/hours', {title: 'Malima Car - Automotive Company'}));

    // =============== GET a 404 Page ===============
    app.get('/404', (req, res) => res.status(200).render('pages/error404'))

    app.get('/form', (req,res) => res.status(200).render('pages/formconfirm'))

const getProductsFromDB = () => {
    const products = [
      { stock: 'R17106', year: 2017, make: 'Ford', model: 'Fusion SE', price: 27.900, bodystyle:'Sedan', image: 'R17106_1.jpg' },
      { stock: '17005', year: 2017, make: 'Dodge', model: 'Ram 1500 SLT', price: 59.135, bodystyle:'Truck Crew Cab', image: '17005_1.jpg' },
      { stock: 'R17159', year: 2017, make: 'Ford', model: 'Mustang GT Premium', price: 46.134, bodystyle:'Convertible', image: 'R17159_1.jpg'  }
    ];
  
    return products;
  }
// this is express getting the request at /about
app.get('/products', (request, response) => {
    const products = getProductsFromDB();
  
    const content = {
      title: 'Products',
      mainTitle: 'Products',
      productCollection: products,
      imagesFolder: 'img/'
    };
  
    response.render('pages/products', content);
  });

    
    // =============== Listening on the port if OK show this msg ===============
    app.listen(3000, () => console.log(`listening on port ${port}!`));

    // =============== GET a Page off line by server side ===============
    app.get('/products', (req, res) => res.status(500).send('Server error, please try it later'));


//module.exports = router;
