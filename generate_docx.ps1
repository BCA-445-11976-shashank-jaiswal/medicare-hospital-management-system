
# ============================================================
# MEDICARE - Enhanced MD Builder + DOCX Converter
# Reads existing MD, injects DFDs + image placeholders, runs Pandoc
# ============================================================

$projectDir  = "e:\FINAL-YR-PROJECT\MEDICARE"
$inputMD     = "$projectDir\MEDICARE_Project_Report.md"
$enhancedMD  = "$projectDir\MEDICARE_Enhanced.md"
$outputDocx  = "$projectDir\MEDICARE_Project_Report.docx"
$placeholder = "placeholder.png"   # relative path for pandoc

Write-Host "Reading source MD..." -ForegroundColor Cyan
$content = Get-Content $inputMD -Raw -Encoding UTF8

# ============================================================
# HELPER - Image placeholder block
# ============================================================
function ImgPlaceholder($caption) {
    return @"

![$caption]($placeholder)

**Figure: $caption**

---
"@
}

# ============================================================
# 1. Replace ASCII architecture diagram with placeholder + text
# ============================================================
$content = $content -replace '(?s)(## 5\.1 System Architecture.*?)(## 5\.2)', {
    $m = $args[0]
    $_ = $m.Groups[1].Value
    # Keep the section heading and first paragraph, replace box art
    $heading = ($_ -split "`n")[0..4] -join "`n"
    $heading + "`n`n" + (ImgPlaceholder "Fig 5.1 — Three-Tier System Architecture Diagram") + "`n`n" + $m.Groups[2].Value
}

# ============================================================
# 2. Inject DFD Image Placeholders after each DFD section heading
# ============================================================

# --- Level 0 DFD ---
$dfd0_placeholder = @"

$(ImgPlaceholder "Fig 5.2 — Context Level DFD (Level 0)")

**DFD Level 0 — Description:**
The Level 0 Context DFD shows MEDICARE as a single process rectangle interacting with three external entities — **Patient**, **Doctor**, and **Admin** — and four external systems: **Cloudinary** (image storage), **Nodemailer** (email), **Clerk Auth** (authentication), and **MongoDB Atlas** (data store).

| External Entity | Inputs to System | Outputs from System |
|---|---|---|
| Patient | Registration, Appointment request, Contact form | Confirmation email, PDF receipt, Doctor list |
| Doctor | Login credentials, Profile updates | JWT token, Appointment list, Update confirmation |
| Admin | Clerk session, Doctor/Service data | Dashboard stats, Excel report |
| Cloudinary | Image CDN URL | Uploaded image URL + publicId |
| Nodemailer | SMTP credentials | Email sent confirmation |
| Clerk Auth | OAuth token | Verified userId |
| MongoDB Atlas | CRUD queries | Persisted document data |

"@

# --- Level 1 DFD Appointment Booking ---
$dfd1a_placeholder = @"

$(ImgPlaceholder "Fig 5.3 — Level 1 DFD — Patient Appointment Booking")

**DFD Level 1 — Appointment Booking Process Breakdown:**

| Process No. | Process Name | Input Data Flow | Output Data Flow |
|---|---|---|---|
| 1.0 | Authenticate User | Patient credentials | Clerk userId/token |
| 2.0 | Select Doctor | Doctor ID from UI | Doctor document from DB |
| 3.0 | Book Appointment | Patient form data + token | Appointment in DB |
| 4.0 | Check Duplicate | doctorId + date + time | Conflict flag |
| 5.0 | Create Record | Validated appointment data | Saved appointment |
| 6.0 | Send Notification | Patient email + appointment info | Email dispatched via Nodemailer |

"@

# --- Level 1 DFD Admin ---
$dfd1b_placeholder = @"

$(ImgPlaceholder "Fig 5.4 — Level 1 DFD — Admin Operations")

**DFD Level 1 — Admin Operations Process Breakdown:**

| Process No. | Process Name | Input Data Flow | Output Data Flow |
|---|---|---|---|
| 1.0 | Clerk Authentication | Clerk session | Verified admin identity |
| 2.0 | Manage Doctors | Doctor form data + image | CRUD on doctors collection |
| 3.0 | Manage Services | Service form data + image | CRUD on services collection |
| 4.0 | View Dashboard | — | Stats from DB + Clerk API |
| 5.0 | Generate Excel | Export trigger | .xlsx file stream to browser |

"@

# Replace DFD Level 0 section
$content = $content -replace '(### 5\.3\.1 Context Level DFD.*?\n)(```[\s\S]*?```)', {
    $m = $args[0]
    $m.Groups[1].Value + $dfd0_placeholder
}

# Replace DFD Level 1 Appointment
$content = $content -replace '(### 5\.3\.2 Level 1 DFD.*?Appointment.*?\n)(```[\s\S]*?```)', {
    $m = $args[0]
    $m.Groups[1].Value + $dfd1a_placeholder
}

# Replace DFD Level 1 Admin
$content = $content -replace '(### 5\.3\.3 Level 1 DFD.*?Admin.*?\n)(```[\s\S]*?```)', {
    $m = $args[0]
    $m.Groups[1].Value + $dfd1b_placeholder
}

# ============================================================
# 3. Inject ER Diagram placeholder after ER section heading
# ============================================================
$er_placeholder = @"

$(ImgPlaceholder "Fig 5.5 — Entity Relationship (ER) Diagram — All Entities")

**ER Diagram Description:**
The ER diagram contains four entity types: **Doctor**, **Appointment**, **Service**, and **ServiceAppointment**.
- `Doctor (1) ────── (N) Appointment` via `doctorId`
- `Service (1) ────── (N) ServiceAppointment` via `serviceId`
- `ClerkUser (1) ────── (N) Appointment` via `createdBy`
- `ClerkUser (1) ────── (N) ServiceAppointment` via `createdBy`

"@

$content = $content -replace '(### 5\.4\.2 Relationships\s*\n)(```[\s\S]*?```)', {
    $m = $args[0]
    $m.Groups[1].Value + $er_placeholder
}

# ============================================================
# 4. Flowchart Placeholders
# ============================================================
$flow1 = ImgPlaceholder "Fig 5.6 — Flowchart — Patient Appointment Booking"
$flow2 = ImgPlaceholder "Fig 5.7 — Flowchart — PDF Receipt Generation"
$flow3 = ImgPlaceholder "Fig 5.8 — Flowchart — Email Notification Dispatch"

# After each flowchart code block, the ASCII is kept — we ALSO add an image placeholder below
$content = $content -replace '(### 5\.5\.1 Patient Appointment Booking Flowchart\s*\n)(```[\s\S]*?```)', {
    $m = $args[0]
    $m.Groups[1].Value + $m.Groups[2].Value + "`n`n" + $flow1
}
$content = $content -replace '(### 5\.5\.2 PDF Receipt Generation Flowchart\s*\n)(```[\s\S]*?```)', {
    $m = $args[0]
    $m.Groups[1].Value + $m.Groups[2].Value + "`n`n" + $flow2
}

# ============================================================
# 5. Schema Structure Placeholders (Chapter 6)
# ============================================================
$schemas = @(
    @{ pattern = "(## 6\.3 Doctor Schema.*?\n)"; fig = "Fig 6.1 — Doctor Schema Structure" },
    @{ pattern = "(## 6\.4 Appointment Schema.*?\n)"; fig = "Fig 6.2 — Appointment Schema Structure" },
    @{ pattern = "(## 6\.5 Service Schema.*?\n)"; fig = "Fig 6.3 — Service Schema Structure" },
    @{ pattern = "(## 6\.6 Service Appointment Schema.*?\n)"; fig = "Fig 6.4 — ServiceAppointment Schema Structure" }
)
foreach ($s in $schemas) {
    $ph = ImgPlaceholder $s.fig
    $content = $content -replace $s.pattern, { $args[0].Groups[1].Value + "`n" + $ph + "`n" }
}

# ============================================================
# 6. Module Screenshots (Chapter 7 + 10)
# ============================================================
$moduleScreenshots = @{
    "## 7\.1 Patient Module"        = "Fig 7.1 — Patient Portal Homepage Screenshot"
    "## 7\.2 Doctor Module"         = "Fig 7.2 — Doctor Dashboard Interface Screenshot"
    "## 7\.3 Appointment Module"    = "Fig 7.3 — Appointment Booking Page Screenshot"
    "## 7\.4 Services Module"       = "Fig 7.4 — Services Listing Page Screenshot"
    "## 7\.5 Admin Panel Module"    = "Fig 7.5 — Admin Dashboard with Stats Screenshot"
    "## 7\.6 Contact"               = "Fig 7.6 — Contact Form and Email Notification Screenshot"
    "## 7\.7 Chatbot Module"        = "Fig 7.7 — Chatbot Widget Interface Screenshot"
    "## 7\.8 PDF Receipt Module"    = "Fig 7.8 — PDF Receipt Sample Output"
    "## 10\.1 System Output"        = "Fig 10.1 — System Output Screenshots Gallery"
}
foreach ($kv in $moduleScreenshots.GetEnumerator()) {
    $ph = ImgPlaceholder $kv.Value
    $content = $content -replace "($($kv.Key).*?\n)", { $args[0].Groups[1].Value + "`n" + $ph + "`n" }
}

# ============================================================
# 7. MERN Architecture + Clerk Flow (Chapter 8)
# ============================================================
$content = $content -replace "(## 8\.1 Technology Stack\s*\n)", { $args[0].Groups[1].Value + "`n" + (ImgPlaceholder "Fig 8.1 — MERN Stack Architecture Overview") + "`n" }
$content = $content -replace "(### 8\.5\.5 Patient Authentication.*?\n)", { $args[0].Groups[1].Value + "`n" + (ImgPlaceholder "Fig 8.2 — Clerk Authentication Flow Diagram") + "`n" }
$content = $content -replace "(### 8\.2\.4 Doctor Controller.*?\n)", { $args[0].Groups[1].Value + "`n" + (ImgPlaceholder "Fig 8.3 — Cloudinary Image Upload Flow") + "`n" }

# ============================================================
# 8. Use Case Diagram Placeholders (Chapter 3)
# ============================================================
$ucPatient = ImgPlaceholder "Fig 3.1 — Use Case Diagram — Patient"
$ucDoctor  = ImgPlaceholder "Fig 3.2 — Use Case Diagram — Doctor"
$ucAdmin   = ImgPlaceholder "Fig 3.3 — Use Case Diagram — Admin"

$content = $content -replace "(### 3\.5\.1 Use Case: Book a Doctor Appointment\s*\n)", { $args[0].Groups[1].Value + "`n" + $ucPatient + "`n" }
$content = $content -replace "(### 3\.5\.2 Use Case: Download PDF Receipt\s*\n)", { $args[0].Groups[1].Value + "`n" + $ucDoctor + "`n" }
$content = $content -replace "(### 3\.5\.3 Use Case: Admin Exports Hospital Report\s*\n)", { $args[0].Groups[1].Value + "`n" + $ucAdmin + "`n" }

# ============================================================
# 9. Remove \newpage tokens (not valid in docx via pandoc)
# ============================================================
$content = $content -replace '\\newpage', ''

# ============================================================
# Write enhanced MD
# ============================================================
Write-Host "Writing enhanced MD..." -ForegroundColor Cyan
[System.IO.File]::WriteAllText($enhancedMD, $content, [System.Text.Encoding]::UTF8)
Write-Host "Enhanced MD written: $enhancedMD" -ForegroundColor Green

# ============================================================
# Run Pandoc: MD → DOCX
# ============================================================
Write-Host "Running Pandoc conversion..." -ForegroundColor Cyan

$pandocArgs = @(
    $enhancedMD,
    "-o", $outputDocx,
    "--from", "markdown",
    "--to", "docx",
    "--toc",
    "--toc-depth=3",
    "--highlight-style=tango",
    "--resource-path=.", 
    "-V", "geometry:margin=1in",
    "--standalone"
)

Set-Location $projectDir
$result = & pandoc @pandocArgs 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "SUCCESS! DOCX created: $outputDocx" -ForegroundColor Green
    $size = (Get-Item $outputDocx).Length / 1KB
    Write-Host "File size: $([math]::Round($size, 1)) KB" -ForegroundColor Green
} else {
    Write-Host "Pandoc error:" -ForegroundColor Red
    Write-Host $result -ForegroundColor Red
}
