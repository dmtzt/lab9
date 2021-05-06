const config = require("./config/config.json");
const express = require("express");
var path = require("path");

var app = express();

var port = process.env.PORT || config.node_port || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set(express.static("/public"));

var usuario = {
    nombre: "David",
    perfil: "otro"
}

app.get("/", (req, res) => {
    res.render("pages/home", {usuario});
});

app.listen(port, () => {
    console.log(`Server up in port ${port}`);
});