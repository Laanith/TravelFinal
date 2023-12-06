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
  res.json(foundUser);
}


// Push user booking to database :
const appendBookingToDatabase = async (req, res) => {
  const { username, email, date, number_of_people, place, plan, price, duration, grand_total } = req.body;
  const DataToStore = {
    username: username,
    booking: {
      date: date,
      duration:duration,
      email:email,
      grand_total: grand_total,
      number_of_people: number_of_people ,
      place: place,
      plan:plan,
      price: price,
    }
  };

  const saveBooking = new schemas.UserBookings(DataToStore);
  const savedStatus = await saveBooking.save();
  if (savedStatus) {
    res.json({ saved: true });
  }
  else {
    res.json({ saved: false });
  }

  res.end();
}


const getAllUserBookings = async(req, res) => {
  const username = req.body.username;
  const allBookings = await schemas.UserBookings.find({ username: username });
  res.json(allBookings);
};


const deleteBookings = async (req, res) => {
  const bookingIds = req.body;

  try {
    // Assuming schemas.UserBookings is your Mongoose model
    // Use Mongoose's deleteMany() function to delete documents by IDs
    await schemas.UserBookings.deleteMany({ _id: { $in: bookingIds } });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete bookings" });
  }
};



module.exports = {
  createUser,
  authenticateUser,
  appendBookingToDatabase,
  getAllUserBookings,
  deleteBookings
}