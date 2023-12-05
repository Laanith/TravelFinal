const schemas = require('../models/schemas');


// Create a user-document in TravelUsers database

const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    const userData = { username: username, email: email, password: password };
    const alreadyFoundData = await schemas.Users.find({ username: username, email: email });
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
        res.send("Username or Email is already registered");
    }
    res.end();
}



module.exports = {
    createUser
}