const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());


const port = 5001 || proccess.env.PORT