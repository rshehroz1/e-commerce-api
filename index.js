const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 5000;
const { MONGO_URI } = require("./keys");

require("./models/user")

app.use(express.json())

app.use(require("./routes/auth"))


mongoose.connect(MONGO_URI)



app.listen(port, () => console.log(`Example app listening on port ${port}!`));