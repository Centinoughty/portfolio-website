import mongoose from "mongoose";

let isConnected = false;

const MONGO_URL = process.env.NEXT_PUBLIC_MONGO_URL || "";

export const connectDb = async () => {
  if (isConnected) {
    console.log("db already connected");
  }

  try {
    const conn = await mongoose.connect(MONGO_URL);

    isConnected = conn.connections[0].readyState === 1;
    console.log("db connected");
  } catch (error) {
    console.log("db connection failed");
  }
};
