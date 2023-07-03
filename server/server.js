const express = require("express");
const cors = require("cors")
const cookies = require("cookie-parser");

const port = 8000;

const app = express();

app.use(cors({
    credentials: true, origin: 'http://localhost:3000'
}));

app.use(express.json())
app.use(cookies());


//require our mongoose config file and tell it about the db name
require("./config/mongoose.config")

//require our routes and tell it about our app
require("./routes/user.routes")(app)


app.listen(
    port,
    ()=> console.log("listening on port", port)
)