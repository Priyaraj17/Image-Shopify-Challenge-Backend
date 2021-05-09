const express = require("express");
const morgan = require("morgan");

const app = express();
const imageRouter = require("./routes/images_routes");

app.use(express.json());
app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("Hello from the middleware 👋");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes:

app.use("/api/v1/images", imageRouter);
module.exports = app;
