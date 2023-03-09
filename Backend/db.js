const mongoose = require("mongoose");

// database path and name localhost:27017/maindata
mongoose.connect("mongodb://localhost:27017/maindata")


// export mongoose
module.exports = mongoose;