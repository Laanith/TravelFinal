const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const mongoose = require("mongoose");
const e = require("express");
const path = require('path');
const fs = require('fs');
require("dotenv").config();
const DBF = require("./controllers/DataBaseFunctions");


const app = express();


// Database
const DBOptions = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.DB_URI, DBOptions)
  .then(() => { console.log('\nDatabase connected\n') })
  .catch((err)=>{console.log('Mongoose Error\n', err)})

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.static(path.join(__dirname, "images")));

app.get("/", (req, res) => {
  res.send("Hello, this is your Express server!");
});


app.post("/register", DBF.createUser);


app.post("/login", DBF.authenticateUser);


app.get("/destinations", (req, res) => {
  try {
    const filePath = path.resolve(__dirname, "data", "articles.json"); // Assuming the JSON file is in a 'data' folder
    const jsonData = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(jsonData);
    res.json(data); // Send the JSON data as the response
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

app.get("/iterinaries", (req, res) => {
    try {
      const filePath = path.resolve(__dirname, "data", "Iterinaries.json"); // Assuming the JSON file is in a 'data' folder
      const jsonData = fs.readFileSync(filePath, "utf8");
      const data = JSON.parse(jsonData);
      res.json(data); // Send the JSON data as the response
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
});


app.get("/trains", (req, res) => { 
      try {
        const filePath = path.resolve(__dirname, "data", "trains.json"); // Assuming the JSON file is in a 'data' folder
        const jsonData = fs.readFileSync(filePath, "utf8");
        const data = JSON.parse(jsonData);
        res.json(data); // Send the JSON data as the response
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
      }

});


app.get("/hotels", (req, res) => {
        try {
          const filePath = path.resolve(__dirname, "data", "hotels.json"); // Assuming the JSON file is in a 'data' folder
          const jsonData = fs.readFileSync(filePath, "utf8");
          const data = JSON.parse(jsonData);
          res.json(data); // Send the JSON data as the response
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Internal Server Error" });
        }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
