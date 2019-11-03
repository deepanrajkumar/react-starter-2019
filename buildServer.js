var express = require("express");
var server = express();
server.use("/", express.static(__dirname + "/dist/"));
server.listen(4000, function() {
  // eslint-disable-next-line no-console
  console.log("app listening on port http://localhost:4000/");
});
