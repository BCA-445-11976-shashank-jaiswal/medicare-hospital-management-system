// routes/adminRouter.js
import express from "express";
import { exportHospitalReport } from "../controllers/adminController.js";

const adminRouter = express.Router();

// Route for exporting hospital report to Excel
adminRouter.get("/export-report", exportHospitalReport);

export default adminRouter;
