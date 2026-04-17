import express from "express";
import { submitContactForm } from "../controllers/contactController.js";

const contactRouter = express.Router();

// Define Route: POST /api/contact
contactRouter.post("/", submitContactForm);

export default contactRouter;
