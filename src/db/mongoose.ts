import mongoose from "mongoose";

export const connectMongoose = async () => {
  try {
    mongoose.set("strictQuery", false);

    await mongoose.connect(
      `mongodb://${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_DATABASE_NAME}`,
      {
        autoIndex: true,
        connectTimeoutMS: 5000,
      }
    );
    console.log("connected mongodb :)");
  } catch (error) {
    throw new Error("Cannot connect to MongoDb!");
  }
};
