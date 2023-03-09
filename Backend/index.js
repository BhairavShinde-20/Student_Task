const express = require("express");
const app = express();
const conn = require("./db");
const cors = require("cors");

//create a express server
app.listen(2000, () => {
    console.log("server is started");
})

app.use(cors());
app.use(express.json());
app.use("/student",require("./routes/student"));

// connection to databse
conn.connection.on("connected", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("connected to database")
    }
})