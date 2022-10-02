const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const connectDB = require("./src/config/connectDb");
const dotenv = require("dotenv");
dotenv.config();

// connect DB
connectDB();

//middleware
app.use(cors());
app.use(express.json());

app.listen(port, () => console.log("app listen on port ====> ", port));
