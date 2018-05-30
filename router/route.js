/* ====================================================================================== */
/* ======================  I want to create the  routers here only ====================== */
const main      = require('./main');
const express   = require('express');
const app       = express();

//Routers
const home      = require('./router/route.js');
const products  = require('views/pages/index.html');
const teste     = require('./views/pages/teste.pug');
const erro404   = require('404.html');