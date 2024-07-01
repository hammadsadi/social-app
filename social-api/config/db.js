import mongoose from "mongoose";

const connectWithMongoDB = async () => {
  try {
    const connectDb = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `mongoDB Connected Successful ${connectDb.connection.host}`.bgYellow.black
    );
  } catch (error) {
    console.log(`MongoDB Error: ${error.message}`.bgRed.black);
    process.exit(1);
  }
};

export default connectWithMongoDB;
