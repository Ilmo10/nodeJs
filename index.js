const express= require('express');
let routesIndex = require('./route/index');
let routesUsers = require('./route/users');

let app = express();

app.use(routesIndex);
app.use('/users',routesUsers);


app.listen(3000, '127.0.0.1', () => {

    console.log("servidor rodando!");

});