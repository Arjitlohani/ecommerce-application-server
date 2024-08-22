import mongoose from "mongoose";
import { databaseConfig } from "../config/database.js";

export const startDatabase = async () => {
    const url = databaseConfig.databaseUrl;
    mongoose.connect(url)
    .then((data) => console.log("Connected to database"))
    .catch((error) => console.log("Error connecting to database", error));
}