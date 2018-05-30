/* ====================================================================================== */
/* ======================  I want to create with all conextion here only ====================== */

const express   =   require('express');
const route     =   express.Router();


app.set('vies engine', 'pug');

app.use(express.static('public'));
app.use(express.static('views'));

app.get('/', (req, res) => res.render('teste.pug', {}));
app.get('/404', (req,res) => res.render('./views/pages/404.html'));



//route.get('/', (req,res) => res.send('Welcome to Page test!'));



module.exports  =   route; // this line set up all the route module and prepered for any others files



