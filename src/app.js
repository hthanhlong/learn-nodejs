const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/connectDb");
const dotenv = require("dotenv");
dotenv.config();
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
const createError = require("http-errors");

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

// handle - Not Found
app.use((req, res, next) => {
  res.status(404).json({
    status: 404,
    message: " Not Found",
  });
});

// handle error from server
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message || "",
  });
});

module.exports = app;
