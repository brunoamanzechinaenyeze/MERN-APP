import express from "express";
import { connectDB } from "./db/connectDB.js ";
import router from "./routes/auth.route.js";
import dotenv from "dotenv";
const app = express();
const PORT = process.env.PORT || 5500;
dotenv.config();

app.use(express.json());

app.use("/api/auth", router);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on PORT ${PORT}`);
});
