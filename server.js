const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require ("body-parser");
const path = require("path");
const session = require('express-session');

app.use(bodyParser.json());
app.use(expree.static(__dirname + '/public'));

mongoose.connect("mongodb://localhost/maw-project");

require("./server/config/mongoose.js");
require("./server/models/model.js");
require("./server/config/routes.js")(app);
app.all("*", (req, res,next) =>{
    res.sendFile(path.resolve("./public/index.html"));
});

app.listen(8000, function(){
    console.log("Listening on port 8000");
});

