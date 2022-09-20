
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import citiesRoute from "./routes/cities.js"
import countrysRoute from "./routes/countrys.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares
app.use(cookieParser())
app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/cities", citiesRoute);
app.use("/api/countrys", countrysRoute);
app.use("/api/users", usersRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8081, () => {
  connect();
  console.log("Connected to backend.");
});