import mongoose from "mongoose";

let isConected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) return console.log("Mongodb is not found");
  if(isConected ) return console.log("Already conected"); 
  try {
    await mongoose.connect(process.env.MONGODB_URL)
  } catch (error) {
    isConected = true;
    console.log("Connected to Mongoodb");
  }
};

connectToDB