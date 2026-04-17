// controllers/adminController.js
import exceljs from "exceljs";
import Appointment from "../models/Appointment.js";
import ServiceAppointment from "../models/serviceAppointment.js";

/**
 * Helper to auto-adjust column widths based on cell content
 */
const autoAdjustColumnWidths = (worksheet) => {
  worksheet.columns.forEach((column) => {
    let maxColumnLength = 0;
    column.eachCell({ includeEmpty: true }, (cell) => {
      const cellValue = cell.value ? cell.value.toString() : "";
      maxColumnLength = Math.max(maxColumnLength, cellValue.length);
    });
    // Add some padding and set min/max constraints
    column.width = Math.min(Math.max(maxColumnLength + 5, 15), 50);
  });
};

export const exportHospitalReport = async (req, res) => {
  try {
    const workbook = new exceljs.Workbook();
    workbook.creator = "Medicare Hospital Management System";
    workbook.lastModifiedBy = "Admin";
    workbook.created = new Date();

    // --- 1. Appointments Sheet ---
    const appointmentSheet = workbook.addWorksheet("Appointments");
    appointmentSheet.columns = [
      { header: "Patient Name", key: "patientName" },
      { header: "Doctor Name", key: "doctorName" },
      { header: "Appointment Date", key: "date" },
      { header: "Appointment Time", key: "time" },
      { header: "Status", key: "status" },
    ];

    // Bold Headers
    appointmentSheet.getRow(1).font = { bold: true };
    appointmentSheet.getRow(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFECFDF5" } // Light emerald background
    };

    const appointments = await Appointment.find().lean();
    
    if (appointments.length === 0) {
      appointmentSheet.addRow({ patientName: "No data found" }).font = { italic: true, color: { argb: "FF9CA3AF" } };
      appointmentSheet.mergeCells(2, 1, 2, 5); // Merge "No data found" across columns
    } else {
      appointments.forEach((appt) => {
        appointmentSheet.addRow({
          patientName: appt.patientName || "N/A",
          doctorName: appt.doctorName || "N/A",
          date: appt.date || "N/A",
          time: appt.time || "N/A",
          status: appt.status || "N/A",
        });
      });
    }

    // Total Count row at the end
    appointmentSheet.addRow({});
    appointmentSheet.addRow({ 
      patientName: "Total Appointments:", 
      doctorName: appointments.length 
    });
    appointmentSheet.lastRow.font = { bold: true };
    appointmentSheet.lastRow.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFF9FAFB" }
    };

    // Auto-adjust widths for Appointments
    autoAdjustColumnWidths(appointmentSheet);

    // --- 2. Services Sheet ---
    const serviceSheet = workbook.addWorksheet("Services");
    serviceSheet.columns = [
      { header: "Patient Name", key: "patientName" },
      { header: "Service Name", key: "serviceName" },
      { header: "Service Type", key: "serviceType" },
      { header: "Date", key: "date" },
      { header: "Price", key: "price" },
    ];

    // Bold Headers
    serviceSheet.getRow(1).font = { bold: true };
    serviceSheet.getRow(1).fill = {
      type: "pattern", pattern: "solid", fgColor: { argb: "FFF0FDFA" } // Light teal background
    };

    const serviceAppts = await ServiceAppointment.find().lean();
    
    if (serviceAppts.length === 0) {
      serviceSheet.addRow({ patientName: "No data found" }).font = { italic: true, color: { argb: "FF9CA3AF" } };
      serviceSheet.mergeCells(2, 1, 2, 5); // Merge "No data found" across columns
    } else {
      serviceAppts.forEach((sAppt) => {
        // Extract type if possible, or use a default
        let serviceType = "General Service";
        const nameLower = (sAppt.serviceName || "").toLowerCase();
        if (nameLower.includes("blood")) serviceType = "Blood Test";
        else if (nameLower.includes("eye") || nameLower.includes("checkup")) serviceType = "Eye Checkup";
        else if (nameLower.includes("scan") || nameLower.includes("x-ray")) serviceType = "Radiology";
        else if (nameLower.includes("consult")) serviceType = "Consultation";

        serviceSheet.addRow({
          patientName: sAppt.patientName || "N/A",
          serviceName: sAppt.serviceName || "N/A",
          serviceType: serviceType,
          date: sAppt.date || "N/A",
          price: (sAppt.fees || 0).toLocaleString("en-IN", { style: "currency", currency: "INR" }),
        });
      });
    }

    // Total Count row at the end
    serviceSheet.addRow({});
    serviceSheet.addRow({ 
      patientName: "Total Services:", 
      serviceName: serviceAppts.length 
    });
    serviceSheet.lastRow.font = { bold: true };
    serviceSheet.lastRow.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFF9FAFB" }
    };

    // Auto-adjust widths for Services
    autoAdjustColumnWidths(serviceSheet);

    // --- Response ---
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=hospital-report.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    console.error("Export Report Error:", err);
    res.status(500).json({ success: false, message: "Error generating Excel report" });
  }
};
