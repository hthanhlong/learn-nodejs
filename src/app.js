const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/connectDb");
const dotenv = require("dotenv");
dotenv.config();
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");

// connect DB
connectDB();

//middleware
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(helmet());
app.use(morgan("combined"));
// compress responses
app.use(compression());

app.use(
  express.urlencoded({
    extended: true,
  })
);

//router
app.use("/api", require("./routes/index"));

module.exports = app;
