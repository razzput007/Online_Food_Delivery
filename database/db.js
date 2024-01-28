const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/OnlineFood');
    console.log('Connected');
    const foodItems = mongoose.connection.collection('FoodItem');
    const foodCateory=mongoose.connection.collection('FoodCategory')
    try {
    const data = await foodItems.find({}).toArray();
    const CategoryData=await foodCateory.find({}).toArray();
     global.displayData=data;
     global.displayCategoryData=CategoryData;
    // console.log(global.displayData);
    } catch (error) {
    console.error (error);
    }
    };

module.exports = connectDB;
