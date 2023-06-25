const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");
const cors = require("cors");
const ClientError = require("./app/helpers/response/ClientError");
const successResponseMiddleware = require("./app/helpers/response/SuccessResponse");
const app = express();
require("dotenv").config;


app.use("/public", express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: ["*"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(successResponseMiddleware)
app.use("/v1", router);

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    return res.status(err.statusCode).json({
      status: "failed",
      statusCode: err.customCode,
      message: err.message,
    });
  } else {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});
app.listen(5002, () => {
  console.log("Server is running on port 5002");
});


// TODO: Handle Users Address 
// TODO: Handle Users Profile
// TODO: Handle Users Points
// TODO: Handle Users Histories