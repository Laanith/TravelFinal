const schemas = require('../models/schemas');


// Create a user-document in TravelUsers database

const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    const userData = { username: username, email: email, password: password };
    const alreadyFoundData = await schemas.Users.find({ email: email });
    if (alreadyFoundData.length == 0) {
        const saveData = new schemas.Users(userData);
        const savedStatus = await saveData.save();
          if (savedStatus) {
            res.send("Data added to database");
          } else {
            res.send("Data received but not sent to database");
          }
    }
    else {
        res.send("Email is already registered");
    }
    res.end();
}


// Authenticate user
const authenticateUser = async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await schemas.Users.findOne({ username: username });
    console.log(foundUser);
    if (foundUser) {
        if (foundUser.password == password) {
            res.status(200).json(foundUser);
        }
        else {
            res.status().json({ message: "Username is found but passwords don't match" });
        }
    }
    else {
        res.status().json({ message: "User not registered" });
    }
}



module.exports = {
    createUser,
    authenticateUser
}