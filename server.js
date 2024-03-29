// dependencies
let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");

let app = express();

let PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/app/css"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

require("./app/routes/apiRoutes.js")(app);
require("./app/routes/htmlRoutes.js")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT:" + PORT);
});
