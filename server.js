// //process.env.NODE_ENV = process.env.NODE_ENV;// || 'development';
// var express = require('express');
// var app = express();

// app.use(express.static('public'));

// app.get("/", function (req, res) {
//    //res.sendFile( __dirname + "/" + "index.html" );
//    res.sendFile( __dirname + "/" + "index.html" );    
// })

// // app.get("/styles-normalize.css", function (req, res) {
// //       res.sendFile( __dirname + "/" + "styles/normalize.css" );    
// // })


// /*
// app.get( "/collection.html" , function (req, res) {
//       res.sendFile( __dirname + "/" + "collection.html" );    
// })

// app.get( "/album.html" , function (req, res) {
//       res.sendFile( __dirname + "/" + "album.html" );    
// })    */

// //var server = app.listen(process.env.PORT || 3000, '0.0.0.0', function () {
// var server = app.listen(process.env.PORT || 3000 , function () {
//   var host = server.address().address
//   var port = server.address().port

//   console.log("Example app listening at http://%s:%s", host, port)

// })


// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))


const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  //.set('view engine', 'ejs')
  .get('/', (req, res) => res.sendFile( __dirname + "/" + "index.html" ))
  .listen(PORT, () => console.log(`Listening on `))



















