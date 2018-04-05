// Main starting point of the application
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./router.js");
const app = express();
const mongoose = require("mongoose");

// DB Setup
const options = { keepAlive: 300000, connectTimeoutMS: 30000 };
mongoose.connect("mongodb://localhost:27017/auth", options);

// App Setup
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on:", port);
