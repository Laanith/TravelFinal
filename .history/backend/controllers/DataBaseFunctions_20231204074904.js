const schemas = require('../models/schemas');


// Create a user-document in TravelUsers database

const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    const userData = { username: username, email: email, password: password };
    const alreadyFoundData = await schemas.Users.find({ username: username, email: email });
    if (alreadyFoundData.length == 0) {
        const saveData = new schemas.Users({ username: username, email: email, password: password });
        const savedStatus = await saveData.save();
          if (saveUserData) {
            res.send("Data added to database");
          } else {
            res.send("Data received but not sent to database");
          }
    }
}



module.exports = {
    createUser
}