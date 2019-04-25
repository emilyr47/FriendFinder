var express = require("express");
var app = express();


// port = 8004:
var PORT = process.env.PORT || 8004;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
});