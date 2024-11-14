const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://vardhan:2350512@clusterone.irfet.mongodb.net/App-store?retryWrites=true&w=majority&appName=ClusterOne`, {
    });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
   // console.error(error.message);
    //process.exit(1);
  }
}

module.exports = connectDB;