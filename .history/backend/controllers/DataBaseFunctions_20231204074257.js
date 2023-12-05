const schemas = require('../models/schemas');


// Create a user-document in TravelUsers database

const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    const userData = { username: username, email: email, password: password };
    const alreadyFoundData = await schemas.Users.find({ username: username, email: email });
    // console.log(alreadyFoundData);
    if(alreadyFoundData.empty)
    res.send("Finding Data");
}


module.exports = {
    createUser
}