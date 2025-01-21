import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./routes/portfolioRoute.js";

//dotenv Configuration
dotenv.config();

// rest object
const app = express();

//middleware
app.use(
  cors({
    origin: process.env.FRONT_END,
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/v1/portfolio", router);
//Route
app.get("/", (req, res) => {
  res.send("Hi Portfolio");
});
//port
const port = process.env.PORT || 5000;

//listen
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
