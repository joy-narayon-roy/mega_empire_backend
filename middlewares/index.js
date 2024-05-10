const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const middlewares = [
  express.json(),
  express.urlencoded({ extended: true }),
  cors(),
  morgan("dev"),
];

module.exports = middlewares;
