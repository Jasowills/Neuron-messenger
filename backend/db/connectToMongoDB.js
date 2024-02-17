import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const Mongo = process.env.MONGO_DB_URI

const connectToMongoDB = async () => {
	console.log(Mongo)
	try {
		await mongoose.connect(Mongo, {
		  });
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
