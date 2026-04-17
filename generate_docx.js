
const fs   = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectDir   = __dirname;
const inputMD      = path.join(projectDir, 'MEDICARE_Project_Report.md');
const enhancedMD   = path.join(projectDir, 'MEDICARE_Enhanced.md');
const outputDocx   = path.join(projectDir, 'MEDICARE_Project_Report.docx');
const placeholder  = 'placeholder.png';

console.log('Reading source MD...');
let content = fs.readFileSync(inputMD, 'utf8');

// ─── Helper ────────────────────────────────────────────────
function imgBlock(caption) {
  return [
    '',
    `![${caption}](${placeholder})`,
    '',
    `> **📷 ${caption}**`,
    '',
    '---',
    ''
  ].join('\n');
}

function dfdTable(rows, headers) {
  const sep = headers.map(() => '---').join(' | ');
  const head = headers.join(' | ');
  const body = rows.map(r => r.join(' | ')).join('\n');
  return `| ${head} |\n| ${sep} |\n${rows.map(r => `| ${r.join(' | ')} |`).join('\n')}\n`;
}

// ─── DFD Level 0 block ────────────────────────────────────
const dfd0 = `
${imgBlock('Fig 5.2 — Context Level DFD (Level 0)')}

**DFD Level 0 Description:** MEDICARE is shown as a single central process interacting with external entities.

| External Entity | Data Flow INTO System | Data Flow OUT of System |
|---|---|---|
| Patient | Login, appointment/service booking request | Doctor list, booking confirmation, PDF receipt |
| Doctor | Login credentials, profile updates | JWT token, appointment list, update ACK |
| Admin | Clerk session, doctor/service form data | Dashboard stats, Excel report |
| Cloudinary | Image upload buffer | Secure image URL + publicId |
| Nodemailer SMTP | Email trigger with appointment details | Email delivery confirmation |
| Clerk Auth SaaS | OAuth token / session cookie | Verified userId |
| MongoDB Atlas | CRUD queries | Persisted JSON documents |

`;

// ─── DFD Level 1 Appointment ─────────────────────────────
const dfd1Appt = `
${imgBlock('Fig 5.3 — Level 1 DFD — Patient Appointment Booking')}

**Level 1 DFD — Appointment Booking Processes:**

| Process | Name | Input | Output |
|---|---|---|---|
| P1.0 | Authenticate User | Patient credentials | Clerk userId + token |
| P2.0 | Select Doctor | doctorId from UI | Doctor document from DB |
| P3.0 | Book Appointment | Form data + Clerk token | New appointment record |
| P4.0 | Check Duplicate Slot | doctorId + date + time | Conflict flag (yes/no) |
| P5.0 | Create Record | Validated appointment | Saved to appointments collection |
| P6.0 | Send Email Notification | Patient email + appt details | Email via Nodemailer SMTP |

**Data Stores Used:** D1 — doctors, D2 — appointments

`;

// ─── DFD Level 1 Admin ────────────────────────────────────
const dfd1Admin = `
${imgBlock('Fig 5.4 — Level 1 DFD — Admin Operations')}

**Level 1 DFD — Admin Operations Processes:**

| Process | Name | Input | Output |
|---|---|---|---|
| P1.0 | Clerk Authentication | Clerk session | Verified admin identity |
| P2.0 | Manage Doctors | Doctor form + image file | CRUD on doctors collection |
| P3.0 | Manage Services | Service form + image file | CRUD on services collection |
| P4.0 | View Dashboard Stats | API trigger | Aggregated stats from DB + Clerk |
| P5.0 | Generate Excel Report | Export trigger | .xlsx workbook streamed to browser |

**Data Stores Used:** D1 — doctors, D2 — appointments, D3 — services, D4 — serviceappointments

`;

// ─── ER Diagram block ─────────────────────────────────────
const erDiagram = `
${imgBlock('Fig 5.5 — Entity Relationship (ER) Diagram — All Entities')}

**ER Relationships Summary:**

| Relationship | Cardinality | Foreign Key |
|---|---|---|
| Doctor → Appointment | One-to-Many (1:N) | Appointment.doctorId → Doctor._id |
| Service → ServiceAppointment | One-to-Many (1:N) | ServiceAppointment.serviceId → Service._id |
| ClerkUser → Appointment | One-to-Many (1:N) | Appointment.createdBy = Clerk userId |
| ClerkUser → ServiceAppointment | One-to-Many (1:N) | ServiceAppointment.createdBy = Clerk userId |

`;

// ─── Flowchart placeholders ───────────────────────────────
const flow1 = imgBlock('Fig 5.6 — Flowchart — Patient Appointment Booking');
const flow2 = imgBlock('Fig 5.7 — Flowchart — PDF Receipt Generation');
const flow3 = imgBlock('Fig 5.8 — Flowchart — Email Notification Dispatch');

// ─── Use Case Diagram placeholders ───────────────────────
const ucPatient = imgBlock('Fig 3.1 — Use Case Diagram — Patient');
const ucDoctor  = imgBlock('Fig 3.2 — Use Case Diagram — Doctor');
const ucAdmin   = imgBlock('Fig 3.3 — Use Case Diagram — Admin');

// ─── Schema Structure placeholders ───────────────────────
const schema1 = imgBlock('Fig 6.1 — Doctor Schema Structure');
const schema2 = imgBlock('Fig 6.2 — Appointment Schema Structure');
const schema3 = imgBlock('Fig 6.3 — Service Schema Structure');
const schema4 = imgBlock('Fig 6.4 — ServiceAppointment Schema Structure');

// ─── Module Screenshot placeholders ──────────────────────
const ss1 = imgBlock('Fig 7.1 — Patient Portal Homepage Screenshot');
const ss2 = imgBlock('Fig 7.2 — Doctor Dashboard Interface Screenshot');
const ss3 = imgBlock('Fig 7.3 — Appointment Booking Page Screenshot');
const ss4 = imgBlock('Fig 7.4 — Services Listing Page Screenshot');
const ss5 = imgBlock('Fig 7.5 — Admin Dashboard with Stats Screenshot');
const ss6 = imgBlock('Fig 7.6 — Contact Form and Email Notifications Screenshot');
const ss7 = imgBlock('Fig 7.7 — Chatbot Widget Interface Screenshot');
const ss8 = imgBlock('Fig 7.8 — PDF Receipt Sample Output');
const ss9 = imgBlock('Fig 8.1 — MERN Stack Architecture Diagram');
const ss10= imgBlock('Fig 8.2 — Clerk Authentication Flow Diagram');
const ss11= imgBlock('Fig 10.1 — System Output Screenshots Gallery');

// ════════════════════════════════════════════════════════════
// INJECT ALL BLOCKS
// ════════════════════════════════════════════════════════════

// 1. Remove \newpage (not valid in docx) — use empty line, NOT dashes
content = content.replace(/\\newpage/g, '');

// 2. DFD Level 0 — replace entire ASCII code block under 5.3.1
content = content.replace(
  /(### 5\.3\.1 Context Level DFD[\s\S]*?\n)(```[\s\S]*?```)/,
  (_, heading, _block) => heading + dfd0
);

// 3. DFD Level 1 Appointment
content = content.replace(
  /(### 5\.3\.2 Level 1 DFD[\s\S]*?\n)(```[\s\S]*?```)/,
  (_, heading, _block) => heading + dfd1Appt
);

// 4. DFD Level 1 Admin
content = content.replace(
  /(### 5\.3\.3 Level 1 DFD[\s\S]*?\n)(```[\s\S]*?```)/,
  (_, heading, _block) => heading + dfd1Admin
);

// 5. ER Diagram — append placeholder after relationship code block
content = content.replace(
  /(### 5\.4\.2 Relationships\s*\n)(```[\s\S]*?```)/,
  (_, heading, block) => heading + block + '\n' + erDiagram
);

// 6. Flowchart placeholders — append AFTER existing ASCII blocks
content = content.replace(
  /(### 5\.5\.1 Patient Appointment Booking Flowchart\s*\n)(```[\s\S]*?```)/,
  (_, heading, block) => heading + block + '\n' + flow1
);
content = content.replace(
  /(### 5\.5\.2 PDF Receipt Generation Flowchart\s*\n)(```[\s\S]*?```)/,
  (_, heading, block) => heading + block + '\n' + flow2
);

// 7. Email notification flowchart (insert before api design)
content = content.replace(
  /(## 5\.6 API Design)/,
  (_) => '### 5.5.3 Email Notification Dispatch Flowchart\n\n' + flow3 + '\n---\n\n' + _
);

// 8. Use Case placeholders
content = content.replace(/(### 3\.5\.1 Use Case: Book a Doctor Appointment\s*\n)/,   (m) => m + ucPatient);
content = content.replace(/(### 3\.5\.2 Use Case: Download PDF Receipt\s*\n)/,         (m) => m + ucDoctor);
content = content.replace(/(### 3\.5\.3 Use Case: Admin Exports Hospital Report\s*\n)/, (m) => m + ucAdmin);

// 9. Schema structure placeholders
content = content.replace(/(## 6\.3 Doctor Schema\s*\n)/,            (m) => m + '\n' + schema1);
content = content.replace(/(## 6\.4 Appointment Schema\s*\n)/,       (m) => m + '\n' + schema2);
content = content.replace(/(## 6\.5 Service Schema\s*\n)/,           (m) => m + '\n' + schema3);
content = content.replace(/(## 6\.6 Service Appointment Schema\s*\n)/,(m) => m + '\n' + schema4);

// 10. Module screenshots
content = content.replace(/(## 7\.1 Patient Module\s*\n)/,    (m) => m + '\n' + ss1);
content = content.replace(/(## 7\.2 Doctor Module\s*\n)/,     (m) => m + '\n' + ss2);
content = content.replace(/(## 7\.3 Appointment Module\s*\n)/,(m) => m + '\n' + ss3);
content = content.replace(/(## 7\.4 Services Module\s*\n)/,   (m) => m + '\n' + ss4);
content = content.replace(/(## 7\.5 Admin Panel Module\s*\n)/,(m) => m + '\n' + ss5);
content = content.replace(/(## 7\.6 Contact)/,                (m) => m.replace(/^/, '\n' + ss6 + '\n'));
content = content.replace(/(## 7\.7 Chatbot Module\s*\n)/,    (m) => m + '\n' + ss7);
content = content.replace(/(## 7\.8 PDF Receipt Module\s*\n)/,(m) => m + '\n' + ss8);

// 11. Implementation diagrams
content = content.replace(/(## 8\.1 Technology Stack\s*\n)/, (m) => m + '\n' + ss9);
content = content.replace(/(### 8\.5\.5 Patient Authentication)/,(m) => '\n' + ss10 + '\n\n' + m);

// 12. Results screenshots
content = content.replace(/(## 10\.1 System Output)/,(m) => m + '\n\n' + ss11);

// ─── Write enhanced MD ────────────────────────────────────
fs.writeFileSync(enhancedMD, content, 'utf8');
console.log('Enhanced MD written:', enhancedMD);

// ─── Run Pandoc ───────────────────────────────────────────
console.log('Running Pandoc...');
const cmd = [
  'pandoc',
  `"${enhancedMD}"`,
  `-o "${outputDocx}"`,
  '--from markdown-yaml_metadata_block',
  '--to docx',
  '--toc',
  '--toc-depth=3',
  `--resource-path="${projectDir}"`,
  '--standalone'
].join(' ');

try {
  execSync(cmd, { cwd: projectDir, stdio: 'inherit' });
  const size = (fs.statSync(outputDocx).size / 1024).toFixed(1);
  console.log(`\nSUCCESS! DOCX created: ${outputDocx}`);
  console.log(`File size: ${size} KB`);
} catch (e) {
  console.error('Pandoc failed:', e.message);
  process.exit(1);
}
