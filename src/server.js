const cors = require("cors")
const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5001;

const SQLconnection = require("./db/connection")

app.get("/health", (req,res) => res.status(200).send("API is healthy"));

app.listen(port, () => {console.log(`Server is running on port ${port}`)})