// utils/pdfHelper.js
import PDFDocument from 'pdfkit';

/**
 * Generates a professional PDF receipt for an appointment
 * @param {Object} appointment - The appointment document from MongoDB
 * @returns {Promise<Buffer>} - The generated PDF as a buffer
 */
export const generateAppointmentPDF = (appointment) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50, size: 'A4' });
    const chunks = [];

    doc.on('data', (chunk) => chunks.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', (err) => reject(err));

    // --- Header Section ---
    // Background accent (Light emerald-ish)
    doc.rect(0, 0, doc.page.width, 160).fill('#ecfdf5');

    // 3D-effect Hospital Name (Shadow + Text)
    const hospitalName = "MEDICARE HOSPITAL";
    doc.font('Helvetica-Bold');
    
    // Shadow
    doc.fillColor('#d1fae5').fontSize(40).text(hospitalName, 52, 52);
    // Main Text
    doc.fillColor('#065f46').fontSize(40).text(hospitalName, 50, 50);

    // Tagline
    doc.fillColor('#047857').fontSize(12).font('Helvetica-Oblique').text("Advanced Healthcare for a Better Life", 50, 95);

    // Hospital Contact (Right side of header)
    doc.fillColor('#065f46').font('Helvetica').fontSize(10);
    doc.text("Email: info@medicare.com", 400, 55, { align: 'right' });
    doc.text("Phone: +91 12345 67890", 400, 70, { align: 'right' });
    doc.text("Website: www.medicare.com", 400, 85, { align: 'right' });

    doc.moveDown(4);

    // --- Receipt Title & ID ---
    doc.rect(50, 180, 500, 2).fill('#059669'); // Divider
    
    doc.fillColor('#111827').font('Helvetica-Bold').fontSize(22).text("APPOINTMENT RECEIPT", 50, 200);
    
    doc.fontSize(10).font('Helvetica').fillColor('#6b7280');
    doc.text(`Receipt ID: ${appointment._id.toString().toUpperCase()}`, 50, 230);
    doc.text(`Date of Issue: ${new Date().toLocaleDateString()}`, 50, 245);

    // --- Appointment Details Grid ---
    doc.moveDown(2);
    
    const startY = 280;
    const rowHeight = 35;

    // Table Header Background
    doc.rect(50, startY, 500, rowHeight).fill('#f9fafb');
    doc.fillColor('#374151').font('Helvetica-Bold').fontSize(12);
    doc.text("Description", 70, startY + 12);
    doc.text("Details", 250, startY + 12);

    // Grid Rows
    const drawRow = (label, value, y) => {
      doc.rect(50, y, 500, rowHeight).stroke('#e5e7eb');
      doc.fillColor('#4b5563').font('Helvetica-Bold').fontSize(10).text(label, 70, y + 12);
      doc.fillColor('#111827').font('Helvetica').fontSize(10).text(String(value), 250, y + 12);
    };

    let currentY = startY + rowHeight;
    drawRow("Patient Name", appointment.patientName, currentY);
    currentY += rowHeight;
    drawRow("Doctor Name", `Dr. ${appointment.doctorName}`, currentY);
    currentY += rowHeight;
    drawRow("Specialization", appointment.speciality || "General", currentY);
    currentY += rowHeight;
    drawRow("Appointment Date", appointment.date, currentY);
    currentY += rowHeight;
    drawRow("Appointment Time", appointment.time, currentY);
    currentY += rowHeight;
    drawRow("Booking Status", appointment.status.toUpperCase(), currentY);
    currentY += rowHeight;
    
    // Fee Row (Highlighted)
    doc.rect(50, currentY, 500, rowHeight).fill('#f0fdf4');
    doc.fillColor('#065f46').font('Helvetica-Bold').fontSize(12).text("Consultation Fee", 70, currentY + 12);
    doc.text(`INR ${appointment.fees || 0}.00`, 250, currentY + 12, { align: 'left' });
    doc.rect(50, currentY, 500, rowHeight).stroke('#059669');

    // --- Footer Section ---
    const footerY = 700;
    doc.rect(50, footerY, 500, 1).fill('#e5e7eb');
    
    doc.fillColor('#9ca3af').fontSize(10).font('Helvetica-Oblique').text("This is a computer-generated receipt and does not require a physical signature.", 50, footerY + 15, { align: 'center', width: 500 });

    doc.moveDown(2);
    doc.fillColor('#065f46').font('Helvetica-Bold').fontSize(12).text("Authorized Signatory", 400, footerY + 50, { align: 'right' });
    doc.fontSize(8).fillColor('#9ca3af').text("Medicare Hospital Management System V1.0", 50, 780, { align: 'center' });

    doc.end();
  });
};
