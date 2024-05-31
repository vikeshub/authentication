const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI,
      
      {
        dbName: "user-auth-mern",
      }
    );
    console.log("Connected to mongodb");
  } catch (error) {
    console.log("Failed to connect to mongodb");
  }
};
module.exports = dbConnect;
