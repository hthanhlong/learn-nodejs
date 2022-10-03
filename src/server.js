const express = require("express");
const app = express();
const port = 5000;
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
app.use(cors());
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
app.use(require("./routes/index"));

// Error Handling Middleware called
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.listen(port, () => console.log("app listen on port ====> ", port));
