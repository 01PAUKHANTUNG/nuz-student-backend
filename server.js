import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import dns from "dns";
import uploadVideoRouter from "./routes/uploadVideoRoute.js";
import studentAccRouter from "./routes/studentAccRoute.js";


dns.setServers(["8.8.8.8"]);

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000; 

//middleware
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(cors());


connectDB();

//api endpoints
app.use("/api/video", uploadVideoRouter);
app.use("/api/lessons", uploadVideoRouter);
app.use("/api/lessons", uploadVideoRouter);
app.use("/api/student", studentAccRouter);
app.use("/api/student", studentAccRouter);
app.use("/api/student", studentAccRouter);

app.get("/", (req, res) => {
  res.send("API is working!");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});