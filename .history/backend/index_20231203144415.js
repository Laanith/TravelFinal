const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const mongoose = require("mongoose");
require("dotenv").config();


const app = express();



// Database
const DBOptions = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.DB_URI, DBOptions)
  .then(() => { console.log('Database connected') })
  .catch((err)=>{console.log('Mongoose Error\n', err)})

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", (req, res) => {
  res.send("Hello, this is your Express server!");
});


app.post("/register", (req, res) => { 
    console.log(req.body.username);
    console.log(req.body.password);
    res.send("Data received");
});

// Example Axios request
// app.get("/api/data", async (req, res) => {
//   try {
//     const response = await axios.get("https://api.example.com/data");
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
