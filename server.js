const express = require("express");
const app = express();
const flash = require('express-flash');
app.use(express.json());
app.use(flash());

app.use(express.static( __dirname + '/public/dist/public' ));


require("./routes")(app);


app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));