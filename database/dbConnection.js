import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "booking_trip",
    })
    .then(() => {
      console.log("Connected to database successfully!");
    })
    .catch((error) => {
      console.log(`Some error occured while connecting to database: ${error}`);
    });
};
