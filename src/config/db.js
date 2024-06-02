import dotenv from "dotenv";
import { connect } from "mongoose";
dotenv.config();

async function connectDB() {
  try {
    const conn = await connect(process.env.MONGO_URI);
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}
export default connectDB;
