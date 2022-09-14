import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import citiesRoute from "./routes/cities.js"
import countrysRoute from "./routes/countrys.js"
import usersRoute from "./routes/users.js"


const app = express();
dotenv.config();


try {
    await mongoose.connect(process.env.MONGO)
    console.log("Connected to MongoDB.")
  } catch (error) {
    throw error;
  }

mongoose.connection.on("disconnected",()=>{
    console.log("MongoDB disconnected.")
})
mongoose.connection.on("connected",()=>{
    console.log("MongoDB connected.")
})


//middlewares
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/cities", citiesRoute);
app.use("/api/countrys", countrysRoute);
app.use("/api/users", usersRoute);


app.listen(8081,()=>{
    console.log("connected")
})