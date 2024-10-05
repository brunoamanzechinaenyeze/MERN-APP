import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("mongo_uri: ", process.env.MONGO_URI)
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${connect.connection.host}`)
  } catch (err) {
    console.log("Error Connection To MongoDB: ", err.message)
    process.exit(1) //failed
  }
};
