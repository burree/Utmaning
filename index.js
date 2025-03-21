let express = require("express"); // npm install express
let app = express();
app.listen(3000);
console.log("Servern körs på port 3000");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/dokumentation.html");
});

const mysql = require("mysql"); // npm install mysql
con = mysql.createConnection({
  host: "localhost", 
  user: "root", 
  password: "", 
  database: "webbserverprogrammering", 
});