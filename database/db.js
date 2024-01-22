const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/OnlineFood');
    console.log('Connected');
    const foodItems = mongoose.connection.collection('FoodItem');
    try {
    const data = await foodItems.find({}).toArray();
    console.log();
    } catch (error) {
    console.error (error);
    }
    };

module.exports = connectDB;
