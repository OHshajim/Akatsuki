import mongoose from "mongoose";

const connection = { isConnected: 0 };

async function dbConnect() {
  if (connection.isConnected) return;

  const db = await mongoose.connect(process.env.MONGO_URI || '');

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
