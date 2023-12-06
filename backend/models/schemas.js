const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const userBookingSchema = new Schema({
  username: { type: String, required: true },
  booking: {
    date: { type: String, required: true },
    duration: { type: String, required: true },
    email: { type: String, required: true },
    grand_total: { type: Number, required: true },
    number_of_people: { type: Number, required: true },
    place: { type: String, required: true },
    plan: { type: String, required: true },
    price: { type: Number, required: true },
  },
});

const Users = mongoose.model("Users", userSchema, "TravelUsers");

const UserBookings = mongoose.model("UserBookings", userBookingSchema, "TravelBookings");

const mySchemas = { Users: Users, UserBookings : UserBookings };

module.exports = mySchemas;
