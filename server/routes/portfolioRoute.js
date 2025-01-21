import express from "express";
import { sendEmailController } from "../api/portfolioRoute.controller.js";

export const router = express.Router();

router.post("/send-email", (req, res) => {
  sendEmailController(req, res);
});
