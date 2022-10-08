const app = require("./src/app");
const port = 5000;

// Error Handling Middleware called
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.listen(port, () => console.log("app listen on port ====> ", port));
