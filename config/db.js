const dotenv = require("dotenv");

dotenv.config();

const mongoose = require('mongoose');

exports.connectMongoose =()=>{
    // mongoose.set("strictQuery", false);
    mongoose.connect('mongodb://127.0.0.1:27017/habit-tracker', { useNewUrlParser: true })
    .then((e)=>console.log("Connected to Mongodb => Habit-Tracker"))
    .catch((e)=>console.log("Not Connect Mongodb", e));
}