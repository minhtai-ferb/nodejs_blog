const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const route = require("./routes");
const db = require("./config/db");

const app = express();
const port = 3000;

// Routes init
route(app);

//Connect to db
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("combined"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resources", "views"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
