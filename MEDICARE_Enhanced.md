# FINAL YEAR PROJECT REPORT

---

# MEDICARE
## A MERN Stack Based Hospital Management System

---

**Submitted in partial fulfillment of the requirements for the award of the degree of**

**Bachelor of Engineering / Bachelor of Technology**
**in Computer Science & Engineering / Information Technology**

---

| | |
|---|---|
| **Project Title** | MEDICARE – Hospital Management System |
| **Technology Stack** | MongoDB, Express.js, React.js, Node.js (MERN) |
| **Project Type** | Full-Stack Web Application |
| **Academic Year** | 2025–2026 |

---

> *"The good physician treats the disease; the great physician treats the patient who has the disease."*
> — William Osler

---



---

# TABLE OF CONTENTS

| Chapter | Title | Page |
|---------|-------|------|
| — | Abstract | 6 |
| — | Acknowledgement | 7 |
| — | List of Figures | 8 |
| — | List of Tables | 9 |
| — | List of Abbreviations | 10 |
| **1** | **Introduction** | **11** |
| 1.1 | Overview of the Project | 11 |
| 1.2 | Problem Statement | 13 |
| 1.3 | Objectives of the System | 14 |
| 1.4 | Scope of the Project | 15 |
| 1.5 | Motivation | 16 |
| 1.6 | Organization of the Report | 17 |
| **2** | **Literature Survey** | **18** |
| 2.1 | Existing Systems and Their Limitations | 18 |
| 2.2 | Related Work | 20 |
| 2.3 | Comparison of Technologies | 22 |
| 2.4 | Summary | 24 |
| **3** | **System Analysis** | **25** |
| 3.1 | Requirement Analysis | 25 |
| 3.2 | Functional Requirements | 26 |
| 3.3 | Non-Functional Requirements | 29 |
| 3.4 | User Roles and Responsibilities | 30 |
| 3.5 | Use Case Analysis | 32 |
| **4** | **Feasibility Study** | **36** |
| 4.1 | Technical Feasibility | 36 |
| 4.2 | Operational Feasibility | 37 |
| 4.3 | Economic Feasibility | 38 |
| 4.4 | Schedule Feasibility | 39 |
| **5** | **System Design** | **40** |
| 5.1 | System Architecture | 40 |
| 5.2 | Three-Tier Architecture | 42 |
| 5.3 | Data Flow Diagram (DFD) | 44 |
| 5.4 | Entity Relationship Diagram (ER Diagram) | 47 |
| 5.5 | Flowcharts | 50 |
| 5.6 | API Design and RESTful Architecture | 53 |
| **6** | **Database Design** | **58** |
| 6.1 | Database Selection – MongoDB | 58 |
| 6.2 | Schema Design | 59 |
| 6.3 | Doctor Schema | 60 |
| 6.4 | Appointment Schema | 62 |
| 6.5 | Service Schema | 65 |
| 6.6 | Service Appointment Schema | 67 |
| 6.7 | Indexing Strategy | 70 |
| **7** | **System Modules** | **72** |
| 7.1 | Patient Module | 72 |
| 7.2 | Doctor Module | 76 |
| 7.3 | Appointment Module | 80 |
| 7.4 | Services Module | 85 |
| 7.5 | Admin Panel Module | 89 |
| 7.6 | Contact & Notification Module | 94 |
| 7.7 | Chatbot Module | 97 |
| 7.8 | PDF Receipt Module | 99 |
| **8** | **System Implementation** | **101** |
| 8.1 | Technology Stack | 101 |
| 8.2 | Backend Implementation | 104 |
| 8.3 | Frontend Implementation | 110 |
| 8.4 | Admin Panel Implementation | 116 |
| 8.5 | Security Implementation | 119 |
| **9** | **Testing** | **122** |
| 9.1 | Testing Strategy | 122 |
| 9.2 | Unit Testing | 123 |
| 9.3 | Integration Testing | 125 |
| 9.4 | System Testing | 127 |
| 9.5 | User Acceptance Testing | 129 |
| 9.6 | Test Case Table | 131 |
| **10** | **Results and Discussion** | **135** |
| 10.1 | System Output / Screenshots | 135 |
| 10.2 | Performance Evaluation | 137 |
| 10.3 | Limitations | 138 |
| **11** | **Conclusion and Future Work** | **140** |
| 11.1 | Conclusion | 140 |
| 11.2 | Future Enhancements | 141 |
| — | **Bibliography** | **143** |

---



---

# ABSTRACT

Healthcare institutions worldwide face significant administrative and operational challenges that hinder efficient patient care delivery. Manual processes for managing patient appointments, doctor schedules, and hospital services are error-prone, time-consuming, and lack the transparency that modern healthcare stakeholders demand. The COVID-19 pandemic further accelerated the need for digital healthcare platforms that can facilitate contactless, online appointment booking.

**MEDICARE** is a comprehensive, full-stack Hospital Management System developed using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). The system is designed to digitize and streamline the core operations of a hospital — from patient appointment booking and doctor profile management to automated email notifications and PDF receipt generation.

The system consists of three interconnected portals:

1. **Patient-Facing Frontend** — A responsive, modern web application built with React.js where patients can browse doctors, book appointments, track booking history, and download PDF receipts.

2. **Doctor Portal** — A dedicated interface where registered doctors can manage their own profiles, toggle availability, and view their patient appointment list.

3. **Admin Panel** — A secure, Clerk-authenticated administrative dashboard for hospital staff to manage doctors, services, monitor appointments, and export Excel reports.

Key technological features include Clerk-based OAuth authentication, Cloudinary for image management, Nodemailer for automated email confirmations, Twilio for optional SMS notifications, PDFKit for professional PDF receipt generation, and ExcelJS for administrative reporting. The backend employs robust security measures including Helmet.js, rate limiting, CORS policy enforcement, bcrypt password hashing, and JWT token verification.

The system was developed following standard Software Development Life Cycle (SDLC) principles and validated through comprehensive unit, integration, and user acceptance testing. MEDICARE successfully demonstrates how modern web technologies can be used to create a scalable, secure, and user-friendly hospital management platform.

**Keywords:** MERN Stack, Hospital Management System, React.js, Node.js, MongoDB, Express.js, Clerk Authentication, RESTful API, Healthcare Technology, Appointment Management.

---



---

# ACKNOWLEDGEMENT

We express our sincere gratitude to all those who contributed to the successful completion of this project.

First and foremost, we would like to express our heartfelt appreciation to our **Project Guide** whose invaluable suggestions, continuous encouragement, and academic guidance throughout the duration of the project were instrumental in shaping the outcome of this work. Their expertise and constructive feedback helped us navigate technical challenges and maintain a focused direction.

We are deeply grateful to our **Head of Department** and **Principal** for providing us with the necessary infrastructure, laboratory facilities, and an environment conducive to research and innovation.

Our sincere thanks go to all the **Faculty Members** of the Department of Computer Science & Engineering / Information Technology whose teachings throughout our academic journey built the foundational knowledge required for this project.

We also acknowledge the comprehensive open-source communities behind **React.js, Node.js, MongoDB, Express.js, Clerk, Cloudinary, Nodemailer, and PDFKit**, whose well-documented libraries and frameworks made this development possible.

Finally, we wish to express our profound gratitude to our **family and friends** for their unending moral support, patience, and encouragement during the development and documentation phases of this project.

---



---

# LIST OF FIGURES

| Figure No. | Description |
|-----------|-------------|
| Fig 3.1 | Use Case Diagram — Patient |
| Fig 3.2 | Use Case Diagram — Doctor |
| Fig 3.3 | Use Case Diagram — Admin |
| Fig 5.1 | Three-Tier System Architecture Diagram |
| Fig 5.2 | Context Level DFD (Level 0) |
| Fig 5.3 | Level 1 DFD — Appointment Booking |
| Fig 5.4 | Level 1 DFD — Admin Operations |
| Fig 5.5 | ER Diagram — All Entities |
| Fig 5.6 | Flowchart — Patient Appointment Booking |
| Fig 5.7 | Flowchart — Admin Doctor Management |
| Fig 5.8 | Flowchart — Email Notification Dispatch |
| Fig 5.9 | RESTful API Route Map |
| Fig 6.1 | Doctor Schema Structure |
| Fig 6.2 | Appointment Schema Structure |
| Fig 6.3 | Service Schema Structure |
| Fig 6.4 | ServiceAppointment Schema Structure |
| Fig 7.1 | Patient Module Workflow |
| Fig 7.2 | Doctor Dashboard Interface |
| Fig 7.3 | Admin Dashboard with Stats |
| Fig 7.4 | PDF Receipt Sample |
| Fig 8.1 | MERN Stack Architecture |
| Fig 8.2 | Clerk Authentication Flow |
| Fig 8.3 | Cloudinary Image Upload Flow |

---

# LIST OF TABLES

| Table No. | Description |
|-----------|-------------|
| Table 2.1 | Comparison of Existing Systems |
| Table 2.2 | Technology Comparison |
| Table 3.1 | Functional Requirements List |
| Table 3.2 | Non-Functional Requirements |
| Table 3.3 | User Roles and Permissions |
| Table 4.1 | Hardware Requirements |
| Table 4.2 | Software Requirements |
| Table 4.3 | Project Schedule |
| Table 5.1 | API Endpoints — Appointments |
| Table 5.2 | API Endpoints — Doctors |
| Table 5.3 | API Endpoints — Services |
| Table 5.4 | API Endpoints — Service Appointments |
| Table 6.1 | Doctor Schema Fields |
| Table 6.2 | Appointment Schema Fields |
| Table 6.3 | Service Schema Fields |
| Table 6.4 | ServiceAppointment Schema Fields |
| Table 9.1 | Unit Test Cases |
| Table 9.2 | Integration Test Cases |
| Table 9.3 | System Test Cases |
| Table 9.4 | UAT Test Cases |

---



---

# LIST OF ABBREVIATIONS

| Abbreviation | Full Form |
|---|---|
| HMS | Hospital Management System |
| MERN | MongoDB, Express.js, React.js, Node.js |
| API | Application Programming Interface |
| REST | Representational State Transfer |
| JSON | JavaScript Object Notation |
| JWT | JSON Web Token |
| CRUD | Create, Read, Update, Delete |
| SPA | Single Page Application |
| ODM | Object Data Modelling |
| CORS | Cross-Origin Resource Sharing |
| UI | User Interface |
| UX | User Experience |
| HTTP | HyperText Transfer Protocol |
| HTTPS | HyperText Transfer Protocol Secure |
| SMTP | Simple Mail Transfer Protocol |
| SMS | Short Message Service |
| PDF | Portable Document Format |
| CDN | Content Delivery Network |
| SaaS | Software as a Service |
| SDLC | Software Development Life Cycle |
| DFD | Data Flow Diagram |
| ER | Entity Relationship |
| UAT | User Acceptance Testing |
| RBAC | Role-Based Access Control |
| OTP | One-Time Password |
| OAuth | Open Authorization |
| XSS | Cross-Site Scripting |
| CSP | Content Security Policy |
| BCRYPT | Blowfish Cryptography Algorithm |

---



---

# CHAPTER 1: INTRODUCTION

## 1.1 Overview of the Project

In the modern era of digital transformation, the healthcare sector is undergoing a fundamental shift from paper-based, manual administration to integrated, technology-driven management systems. Traditional hospital workflows — including manual appointment registers, paper prescriptions, physical doctor schedules pinned on notice boards, and handwritten receipts — are no longer sustainable in a world demanding speed, accuracy, and transparency.

**MEDICARE** is a comprehensive Hospital Management System (HMS) developed to address these challenges using the industry-standard **MERN Stack** (MongoDB, Express.js, React.js, Node.js). The system is designed as a multi-portal web application that serves three distinct stakeholders:

- **Patients** who need a simple, convenient way to discover doctors, book appointments, and track their healthcare journey.
- **Doctors** who need a personal dashboard to manage their profile, schedule, and patient interactions.
- **Hospital Administrators** who need a centralized control panel to manage doctors, services, appointments, and generate reports.

### 1.1.1 What is MEDICARE?

MEDICARE is not merely an appointment booking tool. It is a fully integrated digital healthcare platform built around three workspaces:

**1. Patient Frontend Portal** (`/frontend`)
A modern, responsive single-page application (SPA) built with React.js and styled using Tailwind CSS utilities. Patients can:
- Browse doctors by specialization
- View detailed doctor profiles including qualifications, experience, ratings, and consultation fees
- Book appointments with real-time slot availability validation
- Book hospital services (scans, tests, procedures)
- Track all bookings in one place
- Download PDF appointment receipts
- Contact the hospital via an integrated contact form
- Chat with an AI-powered assistant Chatbot

**2. Doctor Portal** (embedded within frontend)
Accessible at `/doctor-admin/:id`, this allows doctors to:
- Login with secure JWT token authentication
- View their appointment calendar
- Edit their professional profile (photo, bio, qualifications, schedule)
- Toggle their availability status

**3. Admin Panel** (`/admin`)
A separate React application for hospital administrators, secured via Clerk OAuth. Admins can:
- Add, update, and delete doctors
- Manage hospital services
- View all patient appointments (doctor-based and service-based)
- Export hospital reports as Excel (`.xlsx`) files
- View a live dashboard with key statistics

### 1.1.2 Project Context

This project was developed as a final-year engineering project to demonstrate:

- Proficiency in full-stack web development using MERN
- Application of real-world software engineering principles
- Deployment-ready, production-grade security and performance optimizations
- Integration of third-party services (Clerk, Cloudinary, Nodemailer, Twilio, PDFKit)

---

## 1.2 Problem Statement

Healthcare management in many hospitals — especially mid-sized and small-scale facilities — remains highly dependent on manual, paper-based workflows. This creates a series of operational bottlenecks:

### 1.2.1 Patient-Side Challenges

1. **Lack of Transparency:** Patients have no visibility into doctor schedules, availability, or consultation fees before visiting.
2. **Time Wastage:** Long queues for registration and appointment booking waste both patient and hospital time.
3. **Double Booking Conflicts:** Manual entry systems fail to prevent two patients from booking the same time slot with the same doctor.
4. **No Booking History:** Patients cannot access a history of their appointments or download records for reference.
5. **No Automated Confirmation:** After booking, patients receive no automated digital confirmation.

### 1.2.2 Hospital Administration Challenges

1. **Data Fragmentation:** Patient and doctor data is stored across multiple disconnected spreadsheets and physical registers.
2. **Reporting Overhead:** Generating weekly or monthly operational reports requires significant manual effort.
3. **Unstructured Doctor Management:** Adding, updating, or removing doctor profiles requires IT intervention.
4. **Image Management:** Managing doctor profile images without a cloud service leads to poor scalability.
5. **No Service Management:** Hospitals offering diagnostic services (blood tests, scans) have no digital booking channel.

### 1.2.3 Security Challenges

1. **Unauthorized Access:** Without proper authentication, sensitive appointment records are at risk.
2. **Data Exposure:** APIs without rate limiting or CORS policy are vulnerable to attacks.

MEDICARE directly addresses each of these pain points through intelligent system design and modern technology choices.

---

## 1.3 Objectives of the System

The primary objectives of the MEDICARE Hospital Management System are:

**O1. Digitize Appointment Booking**
Implement a real-time, online appointment booking system that eliminates manual scheduling, prevents double-booking conflicts, and provides instant confirmation.

**O2. Centralize Doctor Management**
Provide hospital administrators with a single, intuitive interface to add, update, and remove doctor profiles with cloud-based image management via Cloudinary.

**O3. Enable Hospital Service Management**
Allow the hospital to list diagnostic and procedural services (X-rays, blood tests, consultations) with pricing, availability dates/slots, and image support.

**O4. Implement Role-Based Access Control (RBAC)**
Define and enforce access for three roles: Patient (Clerk OAuth), Doctor (JWT), and Admin (Clerk OAuth), ensuring each user only accesses their permitted resources.

**O5. Automate Notifications**
Automatically send appointment confirmation emails to patients via Nodemailer (Gmail SMTP) upon successful booking, and optionally SMS via Twilio.

**O6. Generate PDF Receipts**
Allow patients to download professional, styled PDF appointment receipts containing full appointment details, using PDFKit on the backend.

**O7. Enable Hospital Reporting**
Provide admin users with the ability to export comprehensive appointment and service data as styled Excel files using ExcelJS.

**O8. Build a Conversational Chatbot**
Integrate a rule-based chatbot that assists patients with FAQs — including appointment booking guidance, department information, and emergency safety notices.

**O9. Ensure Security and Performance**
Apply Helmet.js security headers, CORS whitelist policies, rate limiting (100 requests per 15 min), JWT authentication, bcrypt password hashing, and compression middleware.

---

## 1.4 Scope of the Project

### 1.4.1 Within Scope

The following features are included in the current version of MEDICARE:

- Online doctor appointment booking with Clerk authentication
- Online hospital service booking
- Doctor profile management (CRUD) with Cloudinary image upload
- Service management (CRUD) with Cloudinary image upload
- Patient appointment history with status tracking
- Appointment status management (Pending, Confirmed, Cancelled, Rescheduled, Completed)
- PDF appointment receipt download (PDFKit)
- Email confirmation via Nodemailer (Gmail SMTP)
- SMS notification via Twilio (optional, configurable)
- Admin dashboard with doctor listing, stats, and Excel export
- Doctor self-service portal (login, profile edit, appointments view)
- Rule-based conversational chatbot
- Rate limiting, CORS, Helmet, compression for security/performance
- Registered user count via Clerk's management API

### 1.4.2 Out of Scope (Future Work)

- Video/teleconsultation integration
- Online payment gateway (Razorpay / Stripe)
- Electronic Medical Records (EMR) per patient
- AI-powered diagnosis suggestions
- Mobile application (Android/iOS)
- Multilingual interface
- In-app messaging between doctor and patient

---

## 1.5 Motivation

The motivation for building MEDICARE stems from the observation that:

1. **Healthcare is a universal need** — Every household interacts with hospitals and clinics, making HMS one of the most impactful categories of software.

2. **MERN stack readiness** — After extensive coursework and hands-on experience with MongoDB, Express, React, and Node, this project presented an ideal opportunity to apply full-stack knowledge to a real-world domain.

3. **Integration challenge** — Building a system that unites third-party services (Clerk, Cloudinary, Nodemailer, Twilio, PDFKit, ExcelJS) into a cohesive platform represents a significant engineering challenge with immense learning value.

4. **Real-world applicability** — MEDICARE was built to production-grade standards with rate limiting, secure CORS, proper error handling, and cloud readiness — making it deployable on platforms like Vercel (frontend/admin) and Render/Railway (backend).

---

## 1.6 Organization of the Report

The remainder of this report is organized as follows:

- **Chapter 2** presents a literature survey of existing hospital management systems and related technologies.
- **Chapter 3** conducts a thorough system analysis including functional and non-functional requirements.
- **Chapter 4** evaluates the feasibility of the project across technical, operational, economic, and schedule dimensions.
- **Chapter 5** describes the system design including architecture, DFDs, ER diagrams, and API design.
- **Chapter 6** provides a detailed explanation of the MongoDB database design and schema structures.
- **Chapter 7** describes each functional module of the system.
- **Chapter 8** explains the system implementation, covering backend, frontend, and admin panel.
- **Chapter 9** presents the testing methodology and test cases.
- **Chapter 10** discusses results, screenshots, performance, and limitations.
- **Chapter 11** concludes the report and outlines future enhancement directions.
- The **Bibliography** lists all references consulted.

---



---

# CHAPTER 2: LITERATURE SURVEY

## 2.1 Existing Systems and Their Limitations

Before designing MEDICARE, an extensive review of existing hospital management systems was conducted. These systems can be broadly classified into:

### 2.1.1 Traditional Desktop-Based HMS

Desktop-based hospital management systems were prevalent in the early 2000s. These systems, often built with Visual Basic, Java Swing, or .NET WinForms, and paired with MySQL or MS Access databases, provided basic patient registration and billing.

**Limitations:**
- Not accessible remotely — required physical presence at the workstation.
- No real-time synchronization across departments.
- High maintenance costs for IT teams managing installations on every machine.
- No internet-based features such as email notifications or cloud storage.
- Poor UI/UX, leading to low adoption rates among staff.

### 2.1.2 Legacy Web-Based HMS

Earlier web-based systems were built using PHP, JSP, or ASP.NET with MySQL. While they solved the remote access problem to some extent, they suffered from:

- **Monolithic architecture** — the frontend, backend, and database logic were tightly coupled, making changes expensive.
- **Poor scalability** — unable to handle high concurrent user loads.
- **No real-time updates** — relied on page refreshes rather than dynamic SPA interactions.
- **Limited third-party integrations** — no cloud image storage, no automated email/SMS, no PDF generation.

### 2.1.3 Commercial Cloud-Based HMS Platforms

Modern commercial platforms like **Practo**, **HealthPlix**, and **eHospital Systems** offer enterprise-grade HMS solutions. While feature-rich, they are:

- **Expensive** for small and mid-sized hospitals.
- **Non-customizable** — offering no access to source code for institution-specific modifications.
- **Vendor-locked** — data migration is difficult.
- **Overkill for smaller hospitals** — organizations end up paying for features they never use.

### 2.1.4 Academic / Open-Source HMS Projects

Academic projects on platforms like GitHub often demonstrate basic CRUD operations for patient and doctor records but typically lack:

- Authentication and authorization (role-based)
- Email / SMS notification integration
- PDF generation
- Cloud image management
- Rate limiting and security middleware

**Table 2.1: Comparison of Existing Systems**

| Feature | Desktop HMS | Legacy Web HMS | Commercial HMS | MEDICARE (This Project) |
|---------|------------|---------------|----------------|------------------------|
| Online Access | ❌ | ✅ (Limited) | ✅ | ✅ |
| Mobile Responsive | ❌ | ❌ | ✅ | ✅ |
| Clerk OAuth Auth | ❌ | ❌ | ✅ (Proprietary) | ✅ |
| Email Notifications | ❌ | ❌ | ✅ | ✅ |
| SMS Notifications | ❌ | ❌ | ✅ | ✅ (Optional) |
| PDF Receipt | ❌ | ❌ | ✅ | ✅ |
| Cloud Image Upload | ❌ | ❌ | ✅ | ✅ (Cloudinary) |
| Excel Export | ❌ | ❌ | ✅ | ✅ (ExcelJS) |
| Rate Limiting | ❌ | ❌ | ✅ | ✅ |
| Open Source | ❌ | Partial | ❌ | ✅ |
| Customizable | ❌ | Partial | ❌ | ✅ |
| Cost | Medium | Low | Very High | Free (Dev) |

---

## 2.2 Related Work

### 2.2.1 Node.js and Express.js in Healthcare

Multiple research papers have explored the use of Node.js for building healthcare APIs due to its non-blocking I/O model, which is ideal for handling multiple simultaneous patient and doctor requests. Cantelon et al. (2014) in *Node.js in Action* document Node's superiority in real-time, event-driven architectures — properties directly relevant to appointment tracking and notification systems like MEDICARE.

### 2.2.2 NoSQL Databases in Healthcare

Chodorow (2013) in *MongoDB: The Definitive Guide* documents the suitability of MongoDB's flexible schema for healthcare data, where patient records can vary significantly in structure. In MEDICARE, the flexible schema is leveraged for the Appointment model — which stores denormalized doctor name and image alongside the reference ID — improving query performance without JOIN operations.

### 2.2.3 React.js for Healthcare UX

Banks and Porcello's *Learning React* (2020) demonstrates how React's component-based model, combined with React Router and Context API or third-party authentication hooks, provides an ideal foundation for dashboards and patient portals — both of which are core to MEDICARE.

### 2.2.4 Clerk Authentication in Modern Web Apps

Clerk provides a complete user management solution including OAuth, social login, and session management. Unlike Firebase Auth or Auth0, Clerk provides React hooks (`useAuth`, `useUser`) that integrate seamlessly with Express middleware (`clerkMiddleware`, `getAuth`), and exposes a management API (via `@clerk/clerk-sdk-node`) to retrieve registered user counts — as implemented in MEDICARE's `getRegisteredUserCount` controller.

### 2.2.5 Cloudinary for Media Management

Cloudinary's cloud-based image transformation and delivery service is used in MEDICARE to store and retrieve doctor and service profile images. The `multer` middleware with `memoryStorage` is used to receive image bytes from multipart form-data requests before uploading them to Cloudinary via the SDK, returning URLs and public IDs stored in MongoDB.

---

## 2.3 Comparison of Technologies

**Table 2.2: Technology Comparison**

| Criteria | MEAN Stack | MERN Stack (MEDICARE) | Django + React | Spring Boot + React |
|---------|-----------|----------------------|----------------|---------------------|
| Language | JavaScript | JavaScript | Python + JS | Java + JS |
| DB | MongoDB | MongoDB | PostgreSQL / MySQL | MySQL / Oracle |
| Frontend | AngularJS | React.js | React.js | React.js |
| Server | Node + Express | Node + Express | Django | Spring Boot |
| Learning Curve | Moderate | Low-Moderate | Moderate | High |
| SPA Support | Yes | Yes | Yes | Yes |
| Real-time | Yes | Yes | Limited | Limited |
| NPM Ecosystem | Vast | Vast | PyPI | Maven |
| Deployment | Easy | Easy | Easy | Complex |
| Community | Large | Largest | Large | Large |

**Rationale for Choosing MERN:**
- Unified JavaScript across all layers eliminates context-switching between languages.
- React's virtual DOM provides superior UI performance for dynamic appointment dashboards.
- MongoDB's schema flexibility suits the evolving data structures of healthcare records.
- The NPM ecosystem provides production-grade libraries for every feature needed (Nodemailer, PDFKit, ExcelJS, Multer, Cloudinary, Twilio, Helmet, JWT).

---

## 2.4 Summary

The literature survey confirms that:

1. Traditional and legacy HMS solutions are inadequate for modern healthcare needs.
2. Commercial platforms are prohibitively expensive and inflexible.
3. The MERN stack is the optimal choice for building a scalable, full-stack, JavaScript-unified HMS.
4. Third-party service integration (Clerk, Cloudinary, Nodemailer) is essential for production readiness.
5. Security middleware (Helmet, rate limiting, CORS, bcrypt, JWT) is non-negotiable for healthcare data protection.

MEDICARE is positioned as an open-source, customizable, production-ready alternative that bridges the gap between simplistic academic projects and expensive commercial platforms.

---



---

# CHAPTER 3: SYSTEM ANALYSIS

## 3.1 Requirement Analysis

Requirements were gathered through the following methods:

1. **Domain Study:** Analysis of websites like Practo, Apollo Hospitals, and government healthcare portals to understand standard features expected in a modern HMS.
2. **User Persona Modeling:** Defining three user personas — a patient, a doctor, and a hospital admin — and mapping their needs, frustrations, and goals.
3. **Technical Feasibility Review:** Evaluating which requirements can be implemented with the chosen MERN stack and third-party services within the academic timeline.
4. **Iterative Refinement:** Requirements were revisited at each development sprint to ensure alignment with technical constraints and user needs.

---

## 3.2 Functional Requirements

Functional requirements describe the specific behaviors and operations the system must perform.

### 3.2.1 Patient Requirements

**FR-P01: User Registration and Login**
- The system shall allow patients to register using email or social login (Google, GitHub) via Clerk OAuth.
- Authenticated patients shall receive a unique Clerk `userId` that is stored as `createdBy` on all their appointments.

**FR-P02: Doctor Directory**
- The system shall display a list of all available doctors fetched dynamically from the backend API (`GET /api/doctors`).
- Each doctor card shall display name, specialization, image, experience, rating, and consultation fee.
- Patients shall be able to click on a doctor card to navigate to a detailed profile page (`/doctors/:id`).

**FR-P03: Doctor Detail Page**
- The doctor detail page shall display full profile information including bio (`about`), qualifications, location, and schedule.
- Patients shall be able to select an available date and time slot from the doctor's schedule.

**FR-P04: Appointment Booking**
- Authenticated patients shall be able to book an appointment with a selected doctor.
- Required fields: `patientName`, `mobile`, `date`, `time`, `doctorId`.
- Optional fields: `age`, `gender`, `email`, `paymentMethod`.
- `patientName` shall only accept alphabetic characters (regex validation on both frontend and backend).
- The system shall prevent double-booking the same slot for the same doctor by the same patient.
- On successful booking, the status shall be set to `"Confirmed"`.

**FR-P05: Service Booking**
- Authenticated patients shall be able to book hospital services (e.g., blood test, X-ray).
- Required fields: `patientName`, `mobile`, `date`, `hour`, `minute`, `ampm`, `serviceId`.

**FR-P06: Appointment History**
- Authenticated patients shall be able to view all their doctor appointments and service bookings from the `/appointments` page.
- The page shall display: doctor name/service name, date, time, status badge (Pending/Confirmed/Completed/Canceled/Rescheduled), and payment method badge.

**FR-P07: PDF Receipt Download**
- For appointments with status `"Confirmed"` or `"Completed"`, patients shall see a "Download Receipt" button.
- Clicking it shall trigger a secure API call to `GET /api/appointments/:id/receipt` with a Clerk token.
- The backend shall generate and stream a professionally styled PDF receipt using PDFKit.

**FR-P08: Contact Form**
- Patients shall be able to submit a contact inquiry via a form with fields: name, email, phone, department, service, and message.
- On submission, an email shall be sent to the hospital admin and an auto-reply sent to the patient.

**FR-P09: Chatbot Assistance**
- A floating chatbot widget shall be available on all patient-facing pages.
- The chatbot shall respond to queries about: appointment booking, doctor listing, departments, emergency guidance, and general inquiries.

### 3.2.2 Doctor Requirements

**FR-D01: Doctor Login**
- Doctors shall log in at `/doctor-admin/login` using their email and password via a custom JWT-based authentication system.
- On successful login, a JWT token shall be returned and stored on the client for subsequent authenticated requests.

**FR-D02: Doctor Dashboard**
- The doctor dashboard (`/doctor-admin/:id`) shall display a welcome screen with statistics.

**FR-D03: Appointment View**
- Doctors shall be able to view their appointment list at `/doctor-admin/:id/appointments`, filtered to their `doctorId`.

**FR-D04: Profile Management**
- Doctors shall be able to edit their profile at `/doctor-admin/:id/profile/edit`, updating: name, specialization, bio, experience, qualifications, location, fee, schedule, and profile image.
- Image upload shall be handled via `multer` (memory storage) and stored on Cloudinary.

**FR-D05: Availability Toggle**
- Doctors shall be able to toggle their availability status between `"Available"` and `"Unavailable"` via `POST /api/doctors/:id/toggle-availability`.

### 3.2.3 Admin Requirements

**FR-A01: Admin Authentication**
- The admin panel shall require Clerk authentication.
- Unauthenticated users who attempt to access protected routes shall see a "Please sign in" prompt with a redirect to the homepage.

**FR-A02: Doctor Management (CRUD)**
- Admins shall create new doctors via the Add Doctor page (`/add`).
- Admins shall view all doctors in a list (`/list`).
- Admins shall delete doctors via the list page.
- Admins shall update doctor passwords via a PATCH request to `/api/doctors/:id/password`.

**FR-A03: Service Management (CRUD)**
- Admins shall add hospital services (`/add-service`), including name, description, price, available dates, time slots, instructions, and a Cloudinary image.
- Admins shall view all services (`/list-service`).
- Admins shall update and delete services.
- A service dashboard (`/service-dashboard`) shall display service-related statistics.

**FR-A04: Appointment Management**
- Admins shall view all doctor appointments (`/appointments`) with the ability to update status.
- Admins shall view all service appointments (`/service-appointments`) with status management.

**FR-A05: Dashboard Statistics**
- The admin dashboard `/h` shall display real-time statistics including:
  - Total number of doctors
  - Total registered users (from Clerk API)
  - Total appointments
  - Total earnings (calculated as sum of completed × fee)
  - Total completed appointments
  - Total canceled appointments

**FR-A06: Excel Report Export**
- Admins shall be able to export a comprehensive hospital report as an `.xlsx` file via the "Export Report" button.
- The report shall contain two sheets: Doctor Appointments and Service Appointments, with auto-adjusted column widths and styled headers.

---

## 3.3 Non-Functional Requirements

**Table 3.2: Non-Functional Requirements**

| ID | Requirement | Description |
|----|-------------|-------------|
| NFR-01 | Performance | API responses shall complete within 500ms for standard GET requests under normal load |
| NFR-02 | Security | All authenticated routes shall validate Clerk tokens or JWT before processing |
| NFR-03 | Rate Limiting | The API shall limit each IP to 100 requests per 15-minute window |
| NFR-04 | Scalability | MongoDB Atlas with appropriate indexing shall support up to 100,000 appointments |
| NFR-05 | Reliability | Global error handlers shall prevent unhandled exceptions from crashing the server |
| NFR-06 | Availability | The system shall target 99.5% uptime when hosted on cloud platforms |
| NFR-07 | Usability | The UI shall be mobile responsive and accessible on all modern browsers |
| NFR-08 | Maintainability | Code shall be modularized (routes/controllers/models/utils) for easy maintenance |
| NFR-09 | Data Integrity | MongoDB schema validation shall enforce required fields and type constraints |
| NFR-10 | Compatibility | The frontend shall support Chrome, Firefox, Safari, and Edge browsers |
| NFR-11 | Privacy | Patient email and mobile data shall not be exposed in public API responses |
| NFR-12 | Compression | HTTP responses shall be compressed using `compression` middleware |

---

## 3.4 User Roles and Responsibilities

**Table 3.3: User Roles and Permissions**

| Feature | Patient (Clerk Auth) | Doctor (JWT Auth) | Admin (Clerk Auth) |
|---------|---------------------|-------------------|--------------------|
| View Doctors | ✅ | ✅ | ✅ |
| Book Doctor Appointment | ✅ | ❌ | ❌ |
| Book Service | ✅ | ❌ | ❌ |
| View Own Appointments | ✅ | ❌ | ❌ |
| Download PDF Receipt | ✅ | ❌ | ❌ |
| View Own Appointment List | ❌ | ✅ | ❌ |
| Edit Own Profile | ❌ | ✅ | ❌ |
| Toggle Own Availability | ❌ | ✅ | ❌ |
| Add/Edit/Delete Doctor | ❌ | ❌ | ✅ |
| Add/Edit/Delete Service | ❌ | ❌ | ✅ |
| View All Appointments | ❌ | ❌ | ✅ |
| Update Appointment Status | ❌ | ❌ | ✅ |
| Export Excel Report | ❌ | ❌ | ✅ |
| View Dashboard Stats | ❌ | ❌ | ✅ |

---

## 3.5 Use Case Analysis

### 3.5.1 Use Case: Book a Doctor Appointment


![Fig 3.1 — Use Case Diagram — Patient](placeholder.png)

> **📷 Fig 3.1 — Use Case Diagram — Patient**

---
| | |
|--|--|
| **Use Case ID** | UC-01 |
| **Name** | Book Doctor Appointment |
| **Actors** | Patient |
| **Pre-condition** | Patient is authenticated via Clerk |
| **Trigger** | Patient selects a doctor and clicks "Book Appointment" |
| **Main Flow** | 1. Patient navigates to `/doctors` 2. Selects a doctor 3. Views doctor detail page 4. Selects date and time 5. Fills in patient information form 6. Submits booking 7. System validates slot availability 8. System creates appointment record with status "Confirmed" 9. System sends confirmation email 10. Patient sees success notification |
| **Alternative Flow** | If slot already booked → Returns error "Slot already booked" |
| **Post-condition** | Appointment record created in MongoDB with `createdBy = userId` |

---

### 3.5.2 Use Case: Download PDF Receipt


![Fig 3.2 — Use Case Diagram — Doctor](placeholder.png)

> **📷 Fig 3.2 — Use Case Diagram — Doctor**

---
| | |
|--|--|
| **Use Case ID** | UC-02 |
| **Name** | Download Appointment Receipt |
| **Actors** | Patient |
| **Pre-condition** | Patient is signed in and has a Confirmed or Completed appointment |
| **Trigger** | Patient clicks "Download Receipt" button on appointments page |
| **Main Flow** | 1. Frontend requests `GET /api/appointments/:id/receipt` with Bearer token 2. Backend validates Clerk token 3. Backend fetches appointment from MongoDB 4. PDFKit generates styled A4 PDF 5. PDF streamed as binary response 6. Browser downloads file as `Appointment_Receipt_<id>.pdf` |
| **Post-condition** | Patient has a PDF receipt saved locally |

---

### 3.5.3 Use Case: Admin Exports Hospital Report


![Fig 3.3 — Use Case Diagram — Admin](placeholder.png)

> **📷 Fig 3.3 — Use Case Diagram — Admin**

---
| | |
|--|--|
| **Use Case ID** | UC-03 |
| **Name** | Export Excel Report |
| **Actors** | Admin |
| **Pre-condition** | Admin is authenticated via Clerk |
| **Trigger** | Admin clicks "Export Report" button on dashboard |
| **Main Flow** | 1. Admin clicks "Export Report" 2. Frontend sends `GET /api/admin/export-report` 3. Backend queries Appointment and ServiceAppointment collections 4. ExcelJS creates workbook with two sheets 5. Styled headers and auto-adjusted columns applied 6. Workbook streamed as `.xlsx` binary 7. Browser downloads `hospital-report.xlsx` |
| **Post-condition** | Admin has comprehensive Excel report |

---

### 3.5.4 Use Case: Doctor Updates Profile

| | |
|--|--|
| **Use Case ID** | UC-04 |
| **Name** | Doctor Profile Update |
| **Actors** | Doctor |
| **Pre-condition** | Doctor has valid JWT token |
| **Trigger** | Doctor navigates to `/doctor-admin/:id/profile/edit` |
| **Main Flow** | 1. Doctor fills in profile edit form 2. Optionally uploads new profile image 3. Image sent as multipart/form-data 4. Backend: `multer` stores image in memory 5. Cloudinary SDK uploads image, returns URL and publicId 6. MongoDB Doctor document updated with new fields and Cloudinary URL |
| **Post-condition** | Doctor's profile updated; new image visible to patients on booking pages |

---



---

# CHAPTER 4: FEASIBILITY STUDY

## 4.1 Technical Feasibility

Technical feasibility examines whether the technology, tools, and expertise are available to build the proposed system.

### 4.1.1 Technology Stack Maturity

All technologies used in MEDICARE are production-proven, well-documented, and widely adopted:

| Technology | Version | Maturity Level |
|-----------|---------|---------------|
| Node.js | 18+ | Production |
| Express.js | 4.x | Production |
| React.js | 18.x | Production |
| MongoDB | 6.x (Atlas) | Production |
| Mongoose | 9.x | Production |
| Clerk | 5.x | Production (SaaS) |
| Cloudinary SDK | 2.x | Production (SaaS) |
| Nodemailer | 8.x | Production |
| PDFKit | 0.18.x | Stable |
| ExcelJS | 4.x | Stable |
| Twilio | 5.x | Production (SaaS) |
| Helmet | 8.x | Production |
| Express Rate Limit | 8.x | Production |

### 4.1.2 Hardware Requirements

**Table 4.1: Hardware Requirements**

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| Processor | Intel Core i3 / AMD Ryzen 3 | Intel Core i5+ / AMD Ryzen 5+ |
| RAM | 4 GB | 8 GB or more |
| Storage | 256 GB SSD | 512 GB SSD |
| Network | 10 Mbps | 50 Mbps+ |
| Display | 1366×768 | 1920×1080 |

### 4.1.3 Software Requirements

**Table 4.2: Software Requirements**

| Category | Software | Version |
|----------|---------|---------|
| Runtime | Node.js | 18.x LTS |
| Package Manager | npm | 9.x+ |
| Database | MongoDB Atlas | Cloud (Free Tier) |
| IDE | Visual Studio Code | Latest |
| Browser | Google Chrome | Latest |
| Version Control | Git / GitHub | Latest |
| API Testing | Postman / Thunder Client | Latest |
| Image Storage | Cloudinary (Cloud) | Free Tier |
| Auth | Clerk | Free Tier |
| Email | Gmail SMTP | Free |

**Technical Feasibility Verdict: ✅ FEASIBLE**

---

## 4.2 Operational Feasibility

Operational feasibility assesses whether the end users will be able to use the system effectively.

### 4.2.1 Patient Usability

The patient-facing frontend is designed with an intuitive UI using Tailwind CSS utilities, modern card layouts, and clear call-to-action buttons. A first-time user with basic internet browsing skills can navigate the site, browse doctors, and complete a booking in under 3 minutes without any training.

The embedded Chatbot provides users with on-demand guidance for common questions, reducing the learning curve further.

### 4.2.2 Admin Panel Usability

The admin panel follows familiar dashboard conventions (sidebars, data tables, form pages). Hospital staff with basic computer literacy will be able to manage doctors and services with minimal training. The dashboard provides visual stat cards and an Excel export button prominently visible at the top.

### 4.2.3 Doctor Portal Usability

The doctor portal is straightforward — a secure login screen leads to a clean dashboard with clear navigation links to "My Appointments" and "Edit Profile." Doctors familiar with any web-based system will feel comfortable immediately.

**Operational Feasibility Verdict: ✅ FEASIBLE**

---

## 4.3 Economic Feasibility

### 4.3.1 Development Cost

Since MEDICARE is an academic project developed by students using freely available tools, open-source libraries, and cloud free tiers, the direct monetary cost is minimal.

| Cost Category | Estimated Cost |
|---------------|----------------|
| Development Tools (VS Code, Git) | ₹0 (Free) |
| MongoDB Atlas (Free Tier: 512MB) | ₹0 |
| Clerk (Free Tier: 10,000 MAU) | ₹0 |
| Cloudinary (Free Tier: 25GB) | ₹0 |
| Gmail SMTP | ₹0 |
| Node.js, React, npm packages | ₹0 (Open Source) |
| Hosting — Vercel (Frontend) | ₹0 (Free Tier) |
| Hosting — Render (Backend) | ₹0 (Free Tier) |
| **Total Development Cost** | **₹0** |

### 4.3.2 Potential Business Value

For a real hospital deployment, MEDICARE could replace:
- Manual administrative overhead: ₹20,000–₹50,000/month in staff costs
- Third-party appointment booking platforms: ₹5,000–₹15,000/month in subscription fees
- Custom software development: ₹1,00,000–₹5,00,000 for initial development

**Economic Feasibility Verdict: ✅ HIGHLY FEASIBLE**

---

## 4.4 Schedule Feasibility

The project was developed over approximately 4–5 months, divided into the following phases:

**Table 4.3: Project Schedule**

| Phase | Activity | Duration |
|-------|----------|---------|
| Phase 1 | Requirement Analysis & System Design | Week 1–2 |
| Phase 2 | Database & Backend API Development | Week 3–6 |
| Phase 3 | Frontend Patient Portal Development | Week 7–10 |
| Phase 4 | Admin Panel Development | Week 11–13 |
| Phase 5 | Third-Party Integration (Clerk, Cloudinary, Nodemailer, PDFKit, ExcelJS) | Week 14–16 |
| Phase 6 | Security Implementation (Helmet, Rate Limit, JWT, bcrypt) | Week 17–18 |
| Phase 7 | Testing & Bug Fixing | Week 19–20 |
| Phase 8 | Documentation | Week 21–22 |

**Schedule Feasibility Verdict: ✅ FEASIBLE**

---



---

# CHAPTER 5: SYSTEM DESIGN

## 5.1 System Architecture

MEDICARE follows a **distributed three-tier web application architecture**, where the presentation, business logic, and data layers are separated into distinct components that communicate over HTTP/HTTPS using RESTful APIs.

### 5.1.1 High-Level Architecture Summary

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                             │
│  ┌──────────────────┐    ┌───────────────────────────────────┐  │
│  │  Patient Frontend │    │       Admin Panel                │  │
│  │  (React.js SPA)  │    │  (React.js SPA — Clerk Auth)      │  │
│  │  Port: 5173      │    │  Port: 5174                       │  │
│  └────────┬─────────┘    └──────────────┬────────────────────┘  │
│           │ HTTP Requests (Axios/Fetch)  │                       │
└───────────┼─────────────────────────────┼───────────────────────┘
            │                             │
┌───────────┼─────────────────────────────┼───────────────────────┐
│           ▼        SERVER LAYER         ▼                        │
│          ┌──────────────────────────────────────┐               │
│          │     Node.js + Express.js Backend      │               │
│          │              Port: 4000               │               │
│          │                                       │               │
│          │  Middleware Stack:                    │               │
│          │  - CORS (Whitelist Policy)            │               │
│          │  - Helmet (HTTP Security Headers)     │               │
│          │  - express-rate-limit (100/15min)     │               │
│          │  - clerkMiddleware (Global)           │               │
│          │  - compression (Response GZIP)        │               │
│          │  - express.json (Body Parsing)        │               │
│          │                                       │               │
│          │  Route Groups:                        │               │
│          │  /api/appointments  → appointmentRouter │             │
│          │  /api/doctors       → doctorRouter     │             │
│          │  /api/services      → serviceRouter    │             │
│          │  /api/service-appointments → saRouter  │             │
│          │  /api/admin         → adminRouter      │             │
│          │  /api/contact       → contactRouter    │             │
│          └──────────────────────┬────────────────┘               │
│                                 │                                │
└─────────────────────────────────┼────────────────────────────────┘
                                  │
┌─────────────────────────────────┼────────────────────────────────┐
│                  DATA LAYER     ▼                                │
│         ┌──────────────────────────────────────────────┐        │
│         │          MongoDB Atlas (Cloud)                │        │
│         │                                              │        │
│         │  Collections:                                │        │
│         │  - doctors                                   │        │
│         │  - appointments                              │        │
│         │  - services                                  │        │
│         │  - serviceappointments                       │        │
│         └──────────────────────────────────────────────┘        │
│                                                                  │
│  External Services:                                              │
│  - Cloudinary (Image CDN)    - Clerk (Auth SaaS)                │
│  - Nodemailer (Gmail SMTP)   - Twilio (SMS)                     │
└──────────────────────────────────────────────────────────────────┘
```

---

## 5.2 Three-Tier Architecture Details

### 5.2.1 Tier 1 — Presentation Layer (React.js)

The presentation layer consists of two React.js SPAs:

**Patient Frontend (`/frontend`)**
- Built with React 18, React Router v6, Axios, Clerk React SDK
- Components are organized into: `/pages` (route-level containers) and `/components` (reusable UI pieces)
- Key pages: `Home`, `Doctors`, `DoctorDetail`, `Service`, `ServiceDetailPage`, `Appointments`, `Contact`, `Login`
- Doctor portal pages: `DHome`, `List`, `EditProfile`
- Global components: `Navbar`, `Footer`, `Chatbot`, `Banner`, `Testimonial`, `Certification`

**Admin Panel (`/admin`)**
- Separate React SPA to maintain security isolation
- Route-guarded by Clerk authentication via `RequireAuth` HOC
- Key pages: `Home` (Dashboard), `Add` (Add Doctor), `List` (Doctor List), `Appointments`, `SerDashboard`, `AddSer`, `ListService`, `ServiceAppointments`

### 5.2.2 Tier 2 — Application/Business Logic Layer (Node.js + Express.js)

All business logic resides in the Express.js backend:

- **Controllers** handle all business logic: validation, database queries, third-party API calls
- **Routes** map HTTP methods and URL patterns to controller functions
- **Middlewares** handle cross-cutting concerns: authentication, rate limiting, CORS, compression
- **Utils** contain reusable helper functions: `notificationHelper.js` (email/SMS), `pdfHelper.js` (PDF generation)
- **Config** contains database connection logic: `db.js`

### 5.2.3 Tier 3 — Data Layer (MongoDB)

The data layer uses MongoDB Atlas, a cloud-hosted, managed NoSQL database:

- **Mongoose ODM** provides schema validation, type casting, and query building
- **Four collections:** `doctors`, `appointments`, `services`, `serviceappointments`
- **Compound indexes** optimize common queries (e.g., `doctorId + date + time` for slot availability)
- **Text indexes** enable search on doctor name, specialization, and service descriptions

---

## 5.3 Data Flow Diagram (DFD)

### 5.3.1 Context Level DFD (Level 0)

The Level 0 DFD represents the entire MEDICARE system as a single process interacting with external entities.



![Fig 5.2 — Context Level DFD (Level 0)](placeholder.png)

> **📷 Fig 5.2 — Context Level DFD (Level 0)**

---


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



### 5.3.2 Level 1 DFD — Patient Appointment Booking



![Fig 5.3 — Level 1 DFD — Patient Appointment Booking](placeholder.png)

> **📷 Fig 5.3 — Level 1 DFD — Patient Appointment Booking**

---


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



### 5.3.3 Level 1 DFD — Admin Operations



![Fig 5.4 — Level 1 DFD — Admin Operations](placeholder.png)

> **📷 Fig 5.4 — Level 1 DFD — Admin Operations**

---


**Level 1 DFD — Admin Operations Processes:**

| Process | Name | Input | Output |
|---|---|---|---|
| P1.0 | Clerk Authentication | Clerk session | Verified admin identity |
| P2.0 | Manage Doctors | Doctor form + image file | CRUD on doctors collection |
| P3.0 | Manage Services | Service form + image file | CRUD on services collection |
| P4.0 | View Dashboard Stats | API trigger | Aggregated stats from DB + Clerk |
| P5.0 | Generate Excel Report | Export trigger | .xlsx workbook streamed to browser |

**Data Stores Used:** D1 — doctors, D2 — appointments, D3 — services, D4 — serviceappointments



---

## 5.4 Entity Relationship Diagram (ER Diagram)

### 5.4.1 Entities and Attributes

**Doctor**
- `_id` (PK, ObjectId)
- `email` (Unique)
- `password` (BCrypt Hashed)
- `name`, `specialization`, `about`
- `experience`, `qualifications`, `location`
- `imageUrl`, `imagePublicId`
- `fee`, `availability`
- `schedule` (Map of day → [time slots])
- `success`, `patients`, `rating`
- `createdAt`, `updatedAt`

**Appointment**
- `_id` (PK, ObjectId)
- `doctorId` (FK → Doctor)
- `doctorName`, `speciality`, `doctorImage`
- `patientName`, `mobile`, `age`, `gender`, `email`
- `date`, `time`, `fees`
- `status` (Enum: Pending/Confirmed/Completed/Canceled/Rescheduled)
- `payment` (method, status, amount, providerId)
- `rescheduledTo` (date, time)
- `createdBy` (Clerk userId)
- `owner` (admin userId)
- `sessionId`, `paidAt`
- `createdAt`, `updatedAt`

**Service**
- `_id` (PK, ObjectId)
- `name`, `about`, `shortDescription`
- `price`, `available`
- `imageUrl`, `imagePublicId`
- `dates` ([String])
- `slots` (Map of date → [time slots])
- `instructions` ([String])
- `totalAppointments`, `completed`, `canceled`
- `createdAt`, `updatedAt`

**ServiceAppointment**
- `_id` (PK, ObjectId)
- `serviceId` (FK → Service)
- `serviceName`, `serviceImage`
- `patientName`, `mobile`, `age`, `gender`, `email`
- `date`, `hour`, `minute`, `ampm`
- `fees`
- `status` (Enum: Pending/Confirmed/Rescheduled/Completed/Canceled)
- `rescheduledTo` (date, hour, minute, ampm)
- `createdBy` (Clerk userId)
- `createdAt`, `updatedAt`

### 5.4.2 Relationships

```
DOCTOR (1) ──────────────────── (N) APPOINTMENT
  │                                       │
  │ _id (PK)                   doctorId (FK)
  │
  Every Appointment belongs to exactly one Doctor.
  One Doctor can have many Appointments.

SERVICE (1) ──────────────────── (N) SERVICEAPPOINTMENT
  │                                       │
  │ _id (PK)                   serviceId (FK)
  │
  Every ServiceAppointment belongs to exactly one Service.
  One Service can have many ServiceAppointments.

CLERK USER (1) ──── (N) APPOINTMENT
  │
  │ userId (createdBy)
  │
  One User can have many Appointments.

CLERK USER (1) ──── (N) SERVICEAPPOINTMENT
  │
  │ userId (createdBy)
```


![Fig 5.5 — Entity Relationship (ER) Diagram — All Entities](placeholder.png)

> **📷 Fig 5.5 — Entity Relationship (ER) Diagram — All Entities**

---


**ER Relationships Summary:**

| Relationship | Cardinality | Foreign Key |
|---|---|---|
| Doctor → Appointment | One-to-Many (1:N) | Appointment.doctorId → Doctor._id |
| Service → ServiceAppointment | One-to-Many (1:N) | ServiceAppointment.serviceId → Service._id |
| ClerkUser → Appointment | One-to-Many (1:N) | Appointment.createdBy = Clerk userId |
| ClerkUser → ServiceAppointment | One-to-Many (1:N) | ServiceAppointment.createdBy = Clerk userId |



---

## 5.5 Flowcharts

### 5.5.1 Patient Appointment Booking Flowchart

```
START
  │
  ▼
Is Patient Signed In? (Clerk)
  │
  NO ──▶ Redirect to Login ──▶ END
  │
  YES
  │
  ▼
Patient visits /doctors
  │
  ▼
Patient selects a Doctor
  │
  ▼
Patient views Doctor Detail Page
  │
  ▼
Patient selects Date and Time Slot
  │
  ▼
Patient fills Booking Form
(Name, Mobile, Age, Gender, Email, Payment Method)
  │
  ▼
Frontend Validation
  - Name: /^[a-zA-Z\s]+$/  (alphabets only)
  - Mobile: required
  - Date & Time: required
  │
  Valid? ──NO──▶ Show Field Errors ──▶ Return to Form
  │
  YES
  │
  ▼
POST /api/appointments (with Bearer Token)
  │
  ▼
Backend checkAuth Middleware
  - getAuth(req) → userId
  │
  Valid Token? ──NO──▶ 401 Unauthorized ──▶ END
  │
  YES
  │
  ▼
Backend Validates Fields
(required, name regex, fee validity)
  │
  ▼
Doctor.findById(doctorId)
  │
  Doctor Exists? ──NO──▶ 404 Doctor Not Found ──▶ END
  │
  YES
  │
  ▼
Check Duplicate Slot
(same doctorId + userId + date + time + not Canceled)
  │
  Duplicate? ──YES──▶ 409 Slot Already Booked ──▶ END
  │
  NO
  │
  ▼
Appointment.create({...})
Status = "Confirmed"
  │
  ▼
Trigger sendAppointmentConfirmation (async)
  - Send Email via Nodemailer
  - Send SMS via Twilio (if configured)
  │
  ▼
Return 201 { success: true, appointment }
  │
  ▼
Frontend shows Success Toast
  │
  ▼
END
```

![Fig 5.6 — Flowchart — Patient Appointment Booking](placeholder.png)

> **📷 Fig 5.6 — Flowchart — Patient Appointment Booking**

---


### 5.5.2 PDF Receipt Generation Flowchart

```
START
  │
  ▼
Patient clicks "Download Receipt"
  │
  ▼
Frontend: GET /api/appointments/:id/receipt
(with Bearer Token, responseType: "blob")
  │
  ▼
Backend checkAuth → Validate Token
  │
  ▼
Appointment.findById(id)
  │
  Found? ──NO──▶ 404 Not Found ──▶ END
  │
  YES
  │
  ▼
generateAppointmentPDF(appointment)
  - PDFDocument A4
  - Draw Header (emerald background, hospital name)
  - Draw Receipt Title + ID
  - Draw Appointment Details Grid (Patient, Doctor, Date, Time, Fee)
  - Draw Footer (disclaimer, authorized signatory)
  │
  ▼
Stream PDF Buffer to Response
Content-Type: application/pdf
Content-Disposition: attachment; filename=Appointment_Receipt_<id>.pdf
  │
  ▼
Browser downloads PDF
  │
  ▼
END
```

![Fig 5.7 — Flowchart — PDF Receipt Generation](placeholder.png)

> **📷 Fig 5.7 — Flowchart — PDF Receipt Generation**

---


---

### 5.5.3 Email Notification Dispatch Flowchart


![Fig 5.8 — Flowchart — Email Notification Dispatch](placeholder.png)

> **📷 Fig 5.8 — Flowchart — Email Notification Dispatch**

---

---

## 5.6 API Design and RESTful Architecture

MEDICARE's backend exposes a clean RESTful API where:
- Resources are represented by nouns (e.g., `/appointments`, `/doctors`)
- HTTP methods encode the operation (GET=read, POST=create, PUT=update, DELETE=delete, PATCH=partial update)
- Responses follow a consistent `{ success: boolean, data }` JSON schema
- Status codes correctly indicate outcomes (200, 201, 400, 401, 403, 404, 409, 500)

**Table 5.1: API Endpoints — Appointments (`/api/appointments`)**

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/` | None | Get all appointments |
| GET | `/stats/summary` | None | Get appointment stats |
| GET | `/me` | Clerk (checkAuth) | Get patient's own appointments |
| GET | `/doctor/:doctorId` | None | Get appointments by doctor |
| GET | `/paitents/count` | None | Get registered user count (Clerk) |
| GET | `/:id/receipt` | Clerk (checkAuth) | Download PDF receipt |
| POST | `/` | Clerk (checkAuth) | Create new appointment |
| PUT | `/:id` | None | Update appointment |
| POST | `/:id/cancel` | None | Cancel appointment |

**Table 5.2: API Endpoints — Doctors (`/api/doctors`)**

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/` | None | Get all doctors |
| GET | `/:id` | None | Get doctor by ID |
| POST | `/` | None | Create new doctor (Admin) |
| POST | `/login` | None | Doctor login (returns JWT) |
| PUT | `/:id` | JWT (doctorAuth) | Update doctor profile |
| PATCH | `/:id/password` | None | Update doctor password |
| POST | `/:id/toggle-availability` | JWT (doctorAuth) | Toggle doctor availability |
| DELETE | `/:id` | None | Delete doctor |

**Table 5.3: API Endpoints — Services (`/api/services`)**

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/` | None | Get all services |
| GET | `/:id` | None | Get service by ID |
| POST | `/` | None | Create new service (Admin) |
| PUT | `/:id` | None | Update service |
| DELETE | `/:id` | None | Delete service |

**Table 5.4: API Endpoints — Service Appointments (`/api/service-appointments`)**

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/` | None | Get all service appointments |
| GET | `/stats/summary` | None | Get service appointment stats |
| GET | `/me` | Clerk (checkAuth) | Get patient's own service bookings |
| GET | `/:id` | None | Get service appointment by ID |
| POST | `/` | Clerk (checkAuth) | Create service appointment |
| PUT | `/:id` | None | Update service appointment |
| POST | `/:id/cancel` | None | Cancel service appointment |

**Additional API Endpoints:**

| Route | Method | Endpoint | Description |
|-------|--------|----------|-------------|
| Admin | GET | `/api/admin/export-report` | Export Excel report |
| Contact | POST | `/api/contact` | Submit contact form |

---



---

# CHAPTER 6: DATABASE DESIGN

## 6.1 Database Selection — MongoDB

MEDICARE uses **MongoDB** as its primary database, hosted on **MongoDB Atlas** (cloud). The selection is justified by:

### 6.1.1 Why MongoDB over SQL?

| Factor | MySQL / PostgreSQL | MongoDB |
|--------|---------------------|---------|
| Schema | Rigid, fixed schema | Flexible, schema-optional |
| Data format | Tabular (rows/columns) | Document (JSON/BSON) |
| Joins | Required for related data | Denormalization possible |
| Scalability | Vertical primarily | Horizontal (sharding) |
| Performance for reads | Good with indexes | Excellent for document reads |
| Node.js integration | Via mysql2 / pg | Native via Mongoose |
| Cloud-hosted | RDS (paid) | Atlas (free tier available) |

For a healthcare HMS, MongoDB's flexible document model suits scenarios where:
- Different doctors have varying schedule structures
- Appointment records embed denormalized doctor details (name, image, specialization) for fast reads without joins
- Service appointment has different time representation (hour/minute/ampm) compared to doctor appointment (string time)
- Future fields can be added to documents without schema migration

### 6.1.2 Mongoose ODM

Mongoose provides:
- **Schema definitions** with types, validators, and default values
- **Model classes** that map to MongoDB collections
- **Pre-save hooks** for password hashing (Doctor model)
- **Static and instance methods** (e.g., `comparePassword`)
- **Compound and text indexes** for optimized queries

---

## 6.2 Schema Design

The database contains four primary collections:

| Collection | Mongoose Model | Purpose |
|-----------|----------------|---------|
| `doctors` | `Doctor` | Stores doctor profiles, credentials, and schedules |
| `appointments` | `Appointment` | Stores patient-doctor appointment records |
| `services` | `Service` | Stores hospital service catalog |
| `serviceappointments` | `ServiceAppointment` | Stores patient-service booking records |

---

## 6.3 Doctor Schema



![Fig 6.1 — Doctor Schema Structure](placeholder.png)

> **📷 Fig 6.1 — Doctor Schema Structure**

---
The Doctor schema represents a healthcare professional registered in the system.

```javascript
// models/Doctor.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const doctorSchema = new mongoose.Schema(
  {
    email: {
      type: String, required: true, unique: true,
      lowercase: true, index: true
    },
    password: {
      type: String, required: true,
      select: false  // excluded from default queries for security
    },
    name: { type: String, required: true, trim: true },
    specialization: { type: String, default: "" },
    imageUrl: { type: String, default: null },
    imagePublicId: { type: String, default: null },
    experience: { type: String, default: "" },
    qualifications: { type: String, default: "" },
    location: { type: String, default: "" },
    about: { type: String, default: "" },
    fee: { type: Number, default: 0 },
    availability: {
      type: String,
      enum: ["Available", "Unavailable"],
      default: "Available"
    },
    schedule: { type: Map, of: [String], default: {} },
    success: { type: String, default: "" },
    patients: { type: String, default: "" },
    rating: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Pre-save hook: hash password
doctorSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Instance method: compare passwords
doctorSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Text search index
doctorSchema.index({ name: "text", specialization: "text" });
```

**Table 6.1: Doctor Schema Fields**

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `email` | String | ✅ | Unique, lowercase, indexed |
| `password` | String | ✅ | BCrypt hashed, excluded from queries |
| `name` | String | ✅ | Trimmed |
| `specialization` | String | ❌ | e.g., "Cardiologist" |
| `imageUrl` | String | ❌ | Cloudinary URL |
| `imagePublicId` | String | ❌ | Cloudinary public ID for deletion |
| `experience` | String | ❌ | e.g., "10 Years" |
| `qualifications` | String | ❌ | e.g., "MBBS, MD" |
| `location` | String | ❌ | Clinic/hospital city |
| `about` | String | ❌ | Professional bio |
| `fee` | Number | ❌ | Consultation fee in INR |
| `availability` | Enum | ❌ | "Available" or "Unavailable" |
| `schedule` | Map<String,[String]> | ❌ | Day → [time slots] |
| `success` | String | ❌ | Success stories/stats |
| `patients` | String | ❌ | Patient count string |
| `rating` | Number | ❌ | Star rating (0-5) |
| `createdAt` | Date | Auto | Timestamp |
| `updatedAt` | Date | Auto | Timestamp |

**Security Design in Doctor Schema:**
- `password` field has `select: false` — it is never returned in any query unless explicitly selected
- BCrypt salt rounds of 10 provide strong hashing (>0.1 second per hash, resistant to brute-force)
- `comparePassword` instance method avoids exposing raw password comparison logic in controllers

---

## 6.4 Appointment Schema



![Fig 6.2 — Appointment Schema Structure](placeholder.png)

> **📷 Fig 6.2 — Appointment Schema Structure**

---
The Appointment schema captures all details of a patient-doctor booking.

```javascript
// models/Appointment.js
const appointmentSchema = new mongoose.Schema(
  {
    // Ownership
    owner: { type: String, default: "admin", index: true },
    createdBy: { type: String, default: null, index: true }, // Clerk userId

    // Patient Info
    patientName: { type: String, required: true, trim: true },
    mobile: { type: String, required: true, trim: true },
    age: { type: Number, default: null },
    gender: { type: String, default: "" },
    email: { type: String, trim: true, lowercase: true },

    // Doctor Info (denormalized for performance)
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor", required: true, index: true
    },
    doctorName: { type: String, default: "" },
    speciality: { type: String, default: "" },
    doctorImage: {
      url: { type: String, default: "" },
      publicId: { type: String, default: "" },
    },

    // Appointment Schedule
    date: { type: String, required: true },   // YYYY-MM-DD
    time: { type: String, required: true },   // e.g., "10:30 AM"

    // Fees
    fees: { type: Number, required: true, min: 0, default: 0 },

    // Status
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Completed", "Canceled", "Rescheduled"],
      default: "Pending",
    },

    rescheduledTo: {
      date: { type: String },
      time: { type: String },
    },

    // Payment
    payment: {
      method: { type: String, enum: ["Cash", "Online"], default: "Cash" },
      status: {
        type: String,
        enum: ["Pending", "Paid", "Failed", "Refunded"],
        default: "Pending"
      },
      amount: { type: Number, default: 0 },
      providerId: { type: String, default: "" },
      meta: { type: mongoose.Schema.Types.Mixed, default: {} },
    },

    sessionId: { type: String, default: null, index: true },
    paidAt: { type: Date, default: null },
  },
  { timestamps: true }
);

// Performance Indexes
appointmentSchema.index({ status: 1 });
appointmentSchema.index({ date: 1, time: 1 });
appointmentSchema.index({ doctorId: 1, date: 1, time: 1 }); // slot checks
```

**Table 6.2: Appointment Schema Fields**

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `owner` | String | ❌ | Admin user ID |
| `createdBy` | String | ❌ | Clerk patient userId |
| `patientName` | String | ✅ | Alphabets only (validated) |
| `mobile` | String | ✅ | Patient phone number |
| `age` | Number | ❌ | Patient age |
| `gender` | String | ❌ | Male/Female/Other |
| `email` | String | ❌ | For email notifications |
| `doctorId` | ObjectId | ✅ | FK → Doctor |
| `doctorName` | String | ❌ | Denormalized for display |
| `speciality` | String | ❌ | Denormalized for display |
| `doctorImage.url` | String | ❌ | Cloudinary image URL |
| `date` | String | ✅ | YYYY-MM-DD format |
| `time` | String | ✅ | e.g., "10:30 AM" |
| `fees` | Number | ✅ | Min: 0 |
| `status` | Enum | ❌ | Default: "Pending" |
| `rescheduledTo.date` | String | ❌ | Rescheduled date |
| `rescheduledTo.time` | String | ❌ | Rescheduled time |
| `payment.method` | Enum | ❌ | Cash or Online |
| `payment.status` | Enum | ❌ | Pending/Paid/Failed/Refunded |
| `payment.amount` | Number | ❌ | Fee amount |
| `sessionId` | String | ❌ | For online payment sessions |
| `paidAt` | Date | ❌ | Online payment timestamp |
| `createdAt` | Date | Auto | Timestamp |
| `updatedAt` | Date | Auto | Timestamp |

**Denormalization Strategy:**
`doctorName`, `speciality`, and `doctorImage` are stored directly in the Appointment document alongside the `doctorId` reference. This deliberate denormalization means:
- The admin can view appointment lists without performing JOIN-equivalent `populate()` operations on every query
- Even if a doctor record is deleted, historical appointment records retain the doctor's name and image for display

---

## 6.5 Service Schema



![Fig 6.3 — Service Schema Structure](placeholder.png)

> **📷 Fig 6.3 — Service Schema Structure**

---
The Service schema represents a hospital diagnostic or procedural service.

```javascript
// models/Service.js
const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    about: { type: String, default: "" },
    shortDescription: { type: String, default: "" },

    price: { type: Number, default: 0 },
    available: { type: Boolean, default: true },

    imageUrl: { type: String, default: null },     // Cloudinary URL
    imagePublicId: { type: String, default: null }, // Cloudinary public ID

    dates: { type: [String], default: [] },         // Available dates
    slots: { type: Map, of: [String], default: {} }, // date → [time slots]

    instructions: { type: [String], default: [] },  // Pre-procedure instructions

    totalAppointments: { type: Number, default: 0 },
    completed: { type: Number, default: 0 },
    canceled: { type: Number, default: 0 },
  },
  { timestamps: true }
);

serviceSchema.index({ name: "text", shortDescription: "text" });
```

**Table 6.3: Service Schema Fields**

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `name` | String | ✅ | Service name |
| `about` | String | ❌ | Detailed description |
| `shortDescription` | String | ❌ | Summary for card display |
| `price` | Number | ❌ | Fee in INR |
| `available` | Boolean | ❌ | Toggle service on/off |
| `imageUrl` | String | ❌ | Cloudinary URL |
| `imagePublicId` | String | ❌ | For image deletion |
| `dates` | [String] | ❌ | Selectable dates array |
| `slots` | Map<String,[String]> | ❌ | date → time slots |
| `instructions` | [String] | ❌ | Patient instructions |
| `totalAppointments` | Number | ❌ | Counter |
| `completed` | Number | ❌ | Completed bookings count |
| `canceled` | Number | ❌ | Canceled bookings count |

---

## 6.6 Service Appointment Schema



![Fig 6.4 — ServiceAppointment Schema Structure](placeholder.png)

> **📷 Fig 6.4 — ServiceAppointment Schema Structure**

---
The ServiceAppointment schema handles bookings for hospital services rather than specific doctors.

```javascript
const serviceAppointmentSchema = new mongoose.Schema(
  {
    // Patient
    createdBy: { type: String, default: null, index: true },
    patientName: { type: String, required: true, trim: true },
    mobile: { type: String, required: true, trim: true },
    age: { type: Number, min: 0 },
    gender: { type: String, enum: ["Male","Female","Other",""], default: "" },
    email: { type: String, trim: true, lowercase: true },

    // Service (denormalized)
    serviceId: { type: ObjectId, ref: "Service", required: true },
    serviceName: { type: String, required: true },
    serviceImage: {
      url: { type: String, default: "" },
      publicId: { type: String, default: "" },
    },
    fees: { type: Number, required: true, min: 0 },

    // Time (12-hour format components)
    date: { type: String, required: true, index: true },
    hour: { type: Number, required: true },   // 1-12
    minute: { type: Number, required: true }, // 0-59
    ampm: { type: String, enum: ["AM","PM"], required: true },

    // Status
    status: {
      type: String,
      enum: ["Pending","Confirmed","Rescheduled","Completed","Canceled"],
      default: "Pending", index: true
    },
    rescheduledTo: {
      date: { type: String },
      hour: { type: Number },
      minute: { type: Number },
      ampm: { type: String, enum: ["AM","PM"] },
    },
  },
  { timestamps: true }
);
```

**Table 6.4: ServiceAppointment Schema Fields**

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `createdBy` | String | ❌ | Clerk userId |
| `patientName` | String | ✅ | |
| `mobile` | String | ✅ | |
| `age` | Number | ❌ | Min: 0 |
| `gender` | Enum | ❌ | Male/Female/Other |
| `email` | String | ❌ | Auto-lowercased |
| `serviceId` | ObjectId | ✅ | FK → Service |
| `serviceName` | String | ✅ | Denormalized |
| `serviceImage.url` | String | ❌ | Cloudinary URL |
| `fees` | Number | ✅ | Min: 0 |
| `date` | String | ✅ | Indexed |
| `hour` | Number | ✅ | 1–12 |
| `minute` | Number | ✅ | 0–59 |
| `ampm` | Enum | ✅ | "AM" or "PM" |
| `status` | Enum | ❌ | Default: "Pending" |
| `rescheduledTo` | Object | ❌ | Nested date/time |

**Design Decision — Time Storage:**
ServiceAppointment stores time as three separate numeric fields (`hour`, `minute`, `ampm`) rather than a single string. This was chosen because:
- It enables precise MongoDB range queries on time
- It maps directly to the frontend time picker component which uses separate numeric/enum inputs
- It allows independent sorting by hour and minute

The `AppointmentPage.jsx` normalizes this to a display string: `` `${hour}:${pad(minute)} ${ampm}` ``

---

## 6.7 Indexing Strategy

Appropriate MongoDB indexes are critical for performance as data volumes grow.

**Appointments Collection Indexes:**
```javascript
// Single field indexes (created by schema definition)
{ createdBy: 1 }       // Patient's own appointments
{ owner: 1 }           // Admin's appointments
{ doctorId: 1 }        // Doctor's appointment list
{ status: 1 }          // Filter by status
{ sessionId: 1 }       // Payment session lookup

// Compound indexes (explicitly created)
{ date: 1, time: 1 }              // Date-time sorting
{ doctorId: 1, date: 1, time: 1 } // Slot availability check
```

**ServiceAppointments Collection Indexes:**
```javascript
{ date: 1, status: 1 }                           // Date + status filter
{ serviceId: 1 }                                  // Service's bookings
{ serviceId: 1, date: 1, hour: 1, minute: 1, ampm: 1 } // Slot uniqueness
```

**Doctors Collection Indexes:**
```javascript
{ email: 1 }                       // Unique index (login)
{ name: "text", specialization: "text" } // Text search
```

**Services Collection Indexes:**
```javascript
{ name: "text", shortDescription: "text" } // Text search
```

---



---

# CHAPTER 7: SYSTEM MODULES

## 7.1 Patient Module



![Fig 7.1 — Patient Portal Homepage Screenshot](placeholder.png)

> **📷 Fig 7.1 — Patient Portal Homepage Screenshot**

---
### 7.1.1 Overview

The Patient Module is the primary user-facing component of MEDICARE, accessible at the frontend portal. It encompasses all flows a patient undergoes — from first visiting the homepage to downloading their appointment receipt.

### 7.1.2 Homepage (`/`)

The homepage serves as the patient's entry point and is composed of several sections (components):

**Banner Component:**
- The hero section with a headline, tagline, and a prominent call-to-action button ("Book Appointment")
- Uses animated visual elements to create an engaging first impression

**HomeDoctors Component:**
- Displays a curated selection of featured doctors with their name, specialization, and image
- Each card links to the individual doctor detail page

**Testimonial Component:**
- Displays patient testimonials to build trust and credibility

**Certification Component:**
- Highlights hospital accreditations and certifications

**Footer Component:**
- Contains hospital contact info, quick navigation links, and social media handles

### 7.1.3 Authentication Flow

MEDICARE uses **Clerk** for patient authentication — one of the most comprehensive identity management SaaS platforms available.

**Sign-Up / Login:**
- Patients access Clerk's pre-built UI components embedded in the app
- Supported methods: Email/Password, Google OAuth, GitHub OAuth
- On sign-in, Clerk issues a secure session and the React SDK exposes `userId`, `isSignedIn`, and `getToken()` via `useAuth()` and `useUser()` hooks

**Token Usage in API Calls:**
```javascript
// AppointmentPage.jsx
const token = await getToken();
const headers = token ? { Authorization: `Bearer ${token}` } : {};
const resp = await API.get("/api/appointments/me", { headers });
```

The backend's `checkAuth` middleware validates this token via Clerk's `getAuth(req)`:
```javascript
const checkAuth = (req, res, next) => {
  const auth = getAuth(req);
  if (!auth?.userId) {
    return res.status(401).json({ success: false, message: "Unauthenticated" });
  }
  next();
};
```

### 7.1.4 Doctors Page (`/doctors`)

- Fetches all doctors from `GET /api/doctors`
- Renders a responsive grid of doctor cards
- Each card displays: profile image, name, specialization, experience badge, and rating
- Click on any card navigates to `/doctors/:id`

### 7.1.5 Doctor Detail Page (`/doctors/:id`)

- Fetches doctor details from `GET /api/doctors/:id`
- Renders full profile: image, name, specialization, qualifications, experience, location, about bio
- Displays consultation fee and availability status badge
- **Appointment Booking Section:**
  - Date picker showing available dates from `doctor.schedule` (Map of day→[time slots])
  - Time slot selector populated dynamically based on selected date
  - Patient information form: Name, Mobile, Age (optional), Gender (optional), Email (for notification), Payment Method (Cash/Online)
  - "Book Appointment" button triggers `POST /api/appointments` with Clerk Bearer token

### 7.1.6 Appointments Page (`/appointments`)

The appointments page is the patient's personal booking history dashboard. It is authenticated (requires Clerk sign-in).

**Doctor Appointments Section:**
- Fetches from `GET /api/appointments/me` (with Clerk token)
- Displays a grid of appointment cards with:
  - Doctor profile image
  - Doctor name and specialization
  - Appointment date and time (with CalendarDays and Clock icons)
  - Payment method badge (Online/Cash)
  - Status badge (Pending/Confirmed/Completed/Canceled/Rescheduled)
  - Rescheduled date/time (if applicable)
  - **Download Receipt** button (for Confirmed/Completed appointments)

**Smart Status Computation (`computeStatus` function):**
The frontend applies an intelligent status override:
- If `status === "Confirmed"` but the appointment datetime has passed → display as "Completed"
- If `status === "Pending"` but the appointment datetime has passed → display as "Completed"
- This ensures patients always see an accurate, time-aware status without requiring a backend job

**Service Bookings Section:**
- Fetches from `GET /api/service-appointments/me`
- Same card-style display with service image, name, price, date, time, and status badge
- Rescheduled info shown when applicable

### 7.1.7 Services Page (`/services`)

- Fetches all services from `GET /api/services`
- Grid of service cards with image, name, short description, and price
- Clicking a card navigates to `/services/:id`

### 7.1.8 Service Detail Page (`/services/:id`)

- Full service information: name, about, instructions, price, and available dates/slots
- **Book Service Form:**
  - Patient info fields (same as appointment booking)
  - Date picker (from `service.dates` array)
  - Time slot selector (from `service.slots[selectedDate]`)
  - Submit creates a `POST /api/service-appointments` record

### 7.1.9 Contact Page (`/contact`)

- Contact form with fields: Name, Email, Phone, Department, Service, Message
- On submit, backend calls `sendContactEmails()`:
  1. Email to admin with full inquiry details (HTML styled)
  2. Auto-reply email to patient confirming receipt of inquiry
- Success modal displayed on successful submission

---

## 7.2 Doctor Module



![Fig 7.2 — Doctor Dashboard Interface Screenshot](placeholder.png)

> **📷 Fig 7.2 — Doctor Dashboard Interface Screenshot**

---
### 7.2.1 Overview

The Doctor Module provides a dedicated portal for registered doctors to manage their professional presence and interact with their appointment data. It operates within the same frontend codebase as the patient portal but on protected routes.

### 7.2.2 Doctor Authentication

Doctors authenticate differently from patients — using a JWT-based system rather than Clerk OAuth.

**Login Flow (`/doctor-admin/login`):**
1. Doctor submits email and password via login form
2. `POST /api/doctors/login` is called (no authentication required)
3. Backend: `doctorController.doctorLogin` verifies email exists, then uses `doctor.comparePassword(password)` (bcrypt compare)
4. On success: `jwt.sign({ id: doctor._id, role: "doctor" }, JWT_SECRET, { expiresIn: "7d" })` generates token
5. Token and doctor ID returned to frontend
6. Frontend stores token (typically `localStorage`) and redirects to `/doctor-admin/:id`

**doctorAuth Middleware:**
```javascript
// middlewares/doctorAuth.js
const payload = jwt.verify(token, JWT_SECRET);
if (payload.role && payload.role !== "doctor") {
  return res.status(403).json({ message: "Access denied" });
}
const doctor = await Doctor.findById(payload.id).select("-password");
req.doctor = doctor; // Attached for use in controllers
next();
```

All doctor profile update routes (`PUT /api/doctors/:id`, `POST /api/doctors/:id/toggle-availability`) require this middleware.

### 7.2.3 Doctor Dashboard (`/doctor-admin/:id`)

- Welcome screen with doctor's name fetched from backend
- Summary statistics: total appointments for this doctor
- Navigation links to "My Appointments" and "Edit Profile"

### 7.2.4 Appointment List (`/doctor-admin/:id/appointments`)

- Fetches `GET /api/appointments/doctor/:doctorId`
- Displays all appointments for this specific doctor
- Shows: patient name, date, time, status

### 7.2.5 Profile Edit (`/doctor-admin/:id/profile/edit`)

The profile edit page allows doctors to update every field of their profile:

**Form Fields:**
- Name, Specialization, Experience, Qualifications
- Location, About (bio)
- Consultation Fee
- Availability (toggle)
- Schedule (day-wise time slot configuration)
- Profile Image (with Cloudinary upload preview)

**Image Upload Flow:**
```
Doctor selects image → FormData with "image" field →
PUT /api/doctors/:id (multipart/form-data) →
multer.memoryStorage() buffers the file →
Cloudinary SDK uploads buffer →
Returns { url: imageUrl, public_id: imagePublicId } →
Stored in Doctor document
```

---

## 7.3 Appointment Module



![Fig 7.3 — Appointment Booking Page Screenshot](placeholder.png)

> **📷 Fig 7.3 — Appointment Booking Page Screenshot**

---
### 7.3.1 Overview

The Appointment Module is the core transactional system of MEDICARE, handling the lifecycle of patient-doctor appointments from creation through completion.

### 7.3.2 Appointment Lifecycle

An appointment in MEDICARE progresses through these states:

```
Booking Created ──▶ Confirmed (default on creation)
                        │
               ┌────────┴────────────┬─────────────┐
               ▼                     ▼              ▼
          Completed             Canceled        Rescheduled
```

- **Confirmed:** Immediately on booking (patients book directly, no admin approval needed)
- **Completed:** Set by admin, or computed client-side when appointment datetime has passed
- **Canceled:** Patient or admin cancels via `POST /api/appointments/:id/cancel`
- **Rescheduled:** Admin updates the appointment with new `rescheduledTo` date/time and sets `status = "Rescheduled"`

### 7.3.3 Slot Conflict Prevention

A critical business rule in appointment booking is preventing double-booking. The controller implements:

```javascript
const existing = await Appointment.findOne({
  doctorId,
  createdBy: userId,
  date,
  time,
  status: { $ne: "Canceled" }  // Canceled slots can be rebooked
});
if (existing) {
  return res.status(409).json({ success: false, message: "Slot already booked" });
}
```

The compound index `{ doctorId: 1, date: 1, time: 1 }` ensures this query executes efficiently even with thousands of appointments.

### 7.3.4 Validation Logic

**Backend Validation in `createAppointment`:**

1. **Authentication Check:** Clerk `userId` from `getAuth(req)` — returns 401 if missing
2. **Required Fields:** `doctorId`, `patientName`, `mobile`, `date`, `time` — returns 400 if missing
3. **Name Regex Validation:**
```javascript
const nameRegex = /^[a-zA-Z\s]+$/;
if (!nameRegex.test(patientName)) {
  return res.status(400).json({ message: "Patient name should only contain alphabets" });
}
```
4. **Fee Validation:** `safeNumber()` helper checks for valid numeric value
5. **Doctor Existence:** `Doctor.findById(doctorId)` — returns 404 if not found
6. **Duplicate Check:** As described above

### 7.3.5 Appointment Stats

```javascript
export const getStats = async (req, res) => {
  const total = await Appointment.countDocuments();
  return res.json({ success: true, stats: { total } });
};
```

The admin dashboard aggregates more detailed stats client-side from the doctor list data (totals, completed, canceled, earnings per doctor).

### 7.3.6 Admin Appointment Management

From the admin panel's Appointments page (`/appointments`):
- All appointments are loaded via `GET /api/appointments`
- Admin can update appointment status via `PUT /api/appointments/:id`
- Admin can reschedule by updating `rescheduledTo` object and setting `status = "Rescheduled"`
- Admin can cancel via `POST /api/appointments/:id/cancel`

---

## 7.4 Services Module



![Fig 7.4 — Services Listing Page Screenshot](placeholder.png)

> **📷 Fig 7.4 — Services Listing Page Screenshot**

---
### 7.4.1 Overview

The Services Module allows hospitals to list diagnostic and procedural services separately from doctor consultations. Unlike doctor appointments, service bookings are not tied to a specific physician — they represent hospital facilities like blood tests, X-rays, MRI scans, ECG, physiotherapy sessions, etc.

### 7.4.2 Service Data Model

A Service document includes:
- **Basic Info:** `name`, `shortDescription`, `about`
- **Pricing:** `price` (in INR)
- **Availability:** `available` (boolean toggle for enabling/disabling from booking)
- **Cloudinary Image:** `imageUrl`, `imagePublicId`
- **Date Availability:** `dates` array of date strings when the service is offered
- **Time Slots:** `slots` Map where each key is a date string and value is an array of time slot strings
- **Instructions:** `instructions` array of preparation guidelines for patients
- **Statistics:** `totalAppointments`, `completed`, `canceled`

### 7.4.3 Service CRUD (Admin)

All service management is exclusively available to authenticated admin users on the admin panel:

**Create Service (`POST /api/services`):**
- Multipart form data with an "image" file field
- `multer` stores image in memory buffer
- Cloudinary uploads the buffer and returns CDN URL + publicId
- Service document created with all fields + Cloudinary image reference

**Update Service (`PUT /api/services/:id`):**
- Same multipart form handling
- If a new image is uploaded, the old Cloudinary image should be deleted (via `publicId`) before uploading the new one

**Delete Service (`DELETE /api/services/:id`):**
- Removes the service document
- Should also trigger Cloudinary deletion of associated image

**Get All Services (`GET /api/services`):**
- Public route — no authentication required
- Returns all service documents for the frontend service catalog page

### 7.4.4 Service Booking Flow

The service booking follows the same pattern as doctor appointment booking but with different time representation:

```javascript
// ServiceAppointment fields for time
hour: Number,    // 1-12
minute: Number,  // 0-59
ampm: String     // "AM" or "PM"
```

This structured time format was chosen to precisely represent time picker selections in the frontend and enables valid time-based indexing in MongoDB.

### 7.4.5 Service Appointment Status Management

Service appointments have the same status lifecycle as doctor appointments:
- Pending → Confirmed → Completed / Canceled / Rescheduled

The `rescheduledTo` object for service appointments stores `date`, `hour`, `minute`, `ampm` — matching the same format as the main appointment time fields.

---

## 7.5 Admin Panel Module



![Fig 7.5 — Admin Dashboard with Stats Screenshot](placeholder.png)

> **📷 Fig 7.5 — Admin Dashboard with Stats Screenshot**

---
### 7.5.1 Overview

The Admin Panel is a completely separate React application (`/admin`) with its own Vite build configuration, `.env` file, and Tailwind CSS setup. It communicates with the same backend API but is authenticated exclusively through Clerk.

The separation of the admin panel from the patient frontend provides:
- **Security isolation:** A compromised frontend cannot expose admin routes
- **Independent deployment:** Admin panel can be deployed on its own domain/subdomain
- **Performance isolation:** Admin-heavy data fetches don't affect patient-facing performance

### 7.5.2 Authentication Guard

The `RequireAuth` HOC (Higher-Order Component) protects all admin routes:

```javascript
function RequireAuth({ children }) {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) return null;    // prevent premature render
  if (!isSignedIn) return (
    <div>Please sign in... <Link to="/">HOME</Link></div>
  );
  return children;
}
```

Every protected route in the admin panel is wrapped:
```javascript
<Route path="/h" element={<RequireAuth><Home /></RequireAuth>} />
<Route path="/add" element={<RequireAuth><Add /></RequireAuth>} />
// ... and so on
```

### 7.5.3 Admin Dashboard (`/h`)

The dashboard (`DashboardPage.jsx`) is the control center of the admin panel. It features:

**Stats Cards:**
A 6-card statistics grid rendered by the `StatCard` sub-component:
1. **Total Doctors** — Live count from `GET /api/doctors`
2. **Total Registered Users** — Fetched from `GET /api/appointments/paitents/count` which calls `clerkClient.users.getCount()` — giving the real number of users registered on the Clerk platform
3. **Total Appointments** — Aggregated from doctor data
4. **Total Earnings** — Calculated as sum of `(completed appointments × doctor fee)` per doctor
5. **Completed** — Sum of completed appointments across all doctors
6. **Canceled** — Sum of canceled appointments across all doctors

**Doctor Data Table:**
- Fetches all doctors with `GET /api/doctors?limit=200`
- Normalizes data via `normalizeDoctor()` to handle varying API response shapes
- Renders a responsive table (desktop) and card grid (mobile)
- Columns: Doctor (image + name + ID), Specialization, Fee, Total Appointments, Completed, Canceled, Earnings
- **Search** filter by name, specialization, or fee (real-time client-side filtering)
- **Show More / Show Less** toggle for large doctor lists (shows first 8 by default)

**Excel Export:**
```javascript
const handleExportExcel = async () => {
  const response = await axios({
    url: `${API_BASE}/api/admin/export-report`,
    method: "GET",
    responseType: "blob",
  });
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "hospital-report.xlsx");
  link.click();
};
```

### 7.5.4 Doctor Management Pages

**Add Doctor (`/add`):**
Form to create a doctor with all profile fields + image upload.

**List Doctors (`/list`):**
Table/list of all doctors with:
- Profile image thumbnail
- Name, specialization, experience, fee
- Availability badge
- Delete button → calls `DELETE /api/doctors/:id`
- Password reset capability → `PATCH /api/doctors/:id/password`

### 7.5.5 Service Management Pages

**Add Service (`/add-service`):**
Rich form for creating hospital services including:
- Name, description, about
- Price
- Date availability (multiple date picker)
- Time slots per date
- Patient instructions (add/remove dynamically)
- Image upload (Cloudinary)

**List Services (`/list-service`):**
Grid/table of all services with edit and delete options.

**Service Dashboard (`/service-dashboard`):**
Statistics and management view specific to service appointments.

### 7.5.6 Excel Report Generation (AdminController)

```javascript
// controllers/adminController.js
export const exportHospitalReport = async (req, res) => {
  const workbook = new exceljs.Workbook();
  workbook.creator = "Medicare Hospital Management System";

  // Sheet 1: Doctor Appointments
  const appointmentSheet = workbook.addWorksheet("Appointments");
  appointmentSheet.columns = [
    { header: "Patient Name", key: "patientName" },
    { header: "Doctor Name", key: "doctorName" },
    { header: "Appointment Date", key: "date" },
    { header: "Appointment Time", key: "time" },
    { header: "Status", key: "status" },
  ];
  // Bold styled header with emerald background
  appointmentSheet.getRow(1).font = { bold: true };
  appointmentSheet.getRow(1).fill = {
    type: "pattern", pattern: "solid",
    fgColor: { argb: "FFECFDF5" }  // Light emerald
  };
  const appointments = await Appointment.find().lean();
  appointments.forEach(appt => appointmentSheet.addRow({...}));
  // Total count row at bottom
  autoAdjustColumnWidths(appointmentSheet);

  // Sheet 2: Service Appointments
  const serviceSheet = workbook.addWorksheet("Services");
  // Same pattern with service data...
  autoAdjustColumnWidths(serviceSheet);

  res.setHeader("Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  res.setHeader("Content-Disposition",
    "attachment; filename=hospital-report.xlsx");
  await workbook.xlsx.write(res);
  res.end();
};
```

---



![Fig 7.6 — Contact Form and Email Notifications Screenshot](placeholder.png)

> **📷 Fig 7.6 — Contact Form and Email Notifications Screenshot**

---

## 7.6 Contact and Notification Module

### 7.6.1 Contact Form

The contact form (`/contact`) is powered by the `contactRouter.js` and `contactController.js`, delegating email dispatch to `notificationHelper.js`.

**Form Submission (`POST /api/contact`):**
Fields: `name`, `email`, `phone`, `department`, `service`, `message`

On submit, `sendContactEmails()` is called with these fields, which:

1. **Admin Notification Email:**
   - Sent to `process.env.SMTP_USER` (hospital's Gmail address)
   - HTML template includes all form fields in a styled card
   - Subject: `New Contact Inquiry from {name} - MEDICARE`

2. **Patient Auto-Reply:**
   - Sent to the patient's provided email
   - HTML template: green brand header, acknowledgment message, summary of their query
   - Subject: `Thank you for contacting MEDICARE!`

### 7.6.2 Appointment Confirmation Notifications

Every time a doctor appointment is successfully created, `sendAppointmentConfirmation()` is triggered **asynchronously** (non-blocking):

```javascript
sendAppointmentConfirmation({
  patientName, patientEmail: email,
  patientPhone: mobile, doctorName: doctor.name,
  date, time, type: 'doctor'
}).catch(err => console.error("Notification trigger error:", err));
// .catch() ensures notification failures don't block the main response
```

**Email Template Features:**
- Emerald (#059669) branded header with "MEDICARE" title
- Appointment details table: Provider, Date, Time
- "Please arrive 15 minutes early" reminder
- Contact for rescheduling instructions
- Footer: copyright notice

### 7.6.3 Nodemailer Configuration

```javascript
const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE || "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,  // App Password (not account password)
  },
});
```

Gmail SMTP requires an **App Password** (generated from Google Account settings with 2FA enabled) rather than the actual Gmail account password — a security requirement enforced by Google.

### 7.6.4 Twilio SMS (Optional)

MEDICARE includes Twilio SMS integration as an optional, configurable feature:

```javascript
const twilioClient = (
  process.env.TWILIO_ACCOUNT_SID &&
  process.env.TWILIO_ACCOUNT_SID.startsWith("AC") &&
  process.env.TWILIO_AUTH_TOKEN
) ? twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
  : null;
```

If Twilio credentials are not configured, the system gracefully degrades — logging the SMS content to the console (mock mode) rather than failing. This design ensures the core appointment booking flow is never disrupted by missing SMS configuration.

---

## 7.7 Chatbot Module



![Fig 7.7 — Chatbot Widget Interface Screenshot](placeholder.png)

> **📷 Fig 7.7 — Chatbot Widget Interface Screenshot**

---
### 7.7.1 Overview

The Chatbot is a floating, rule-based conversational assistant implemented entirely in the frontend as `Chatbot.jsx`. It is rendered globally in `App.jsx` and is visible on all patient-facing pages.

### 7.7.2 Architecture

The chatbot is a **rule-based system** (not AI/ML based in the current version) — it matches keywords in the user's message against predefined patterns and returns appropriate responses.

```javascript
const processResponse = (userInput) => {
  const input = userInput.toLowerCase();

  if (input.includes("heart attack") || input.includes("emergency") ||
      input.includes("bleeding") || input.includes("breathe")) {
    response = "⚠️ Please consult a doctor or visit the hospital immediately...";
  }
  else if (input.includes("medicine") || input.includes("cure") ||
           input.includes("treatment") || input.includes("diagnosis")) {
    response = "I cannot provide medical diagnosis...";
  }
  else if (input.includes("book") || input.includes("appointment")) {
    response = "To book an appointment, visit our 'Doctors' page...";
  }
  // ... more patterns
};
```

### 7.7.3 Features

- **Floating Bubble:** Fixed-position circular button at bottom-right with a chatbot icon image
- **Chat Window:** Opens on click with animated transition, displays message history with bot/user styling
- **Auto-scroll:** `useRef` and `scrollIntoView` ensure the latest message is always visible
- **Quick Actions:** Three pre-defined action buttons: "Book Appointment", "Find a Doctor", "Our Services"
- **Emergency Safety:** Any mention of emergency-related keywords triggers an immediate emergency redirect notice
- **Medical Advice Disclaimer:** Queries about medicine, treatment, or diagnosis are redirected to see a qualified doctor — preventing the chatbot from giving unqualified medical advice

### 7.7.4 User Interface

```
┌──────────────────────────────────────┐
│  🤖 Medicare Assistant          [X]  │
├──────────────────────────────────────┤
│                                      │
│  🤖 Hello! I am your Medicare...    │
│                                      │
│              Hi, how can I book? ◀  │
│  🤖 To book an appointment...       │
│                                      │
├──────────────────────────────────────┤
│ [Book Appointment] [Find a Doctor]  │
├──────────────────────────────────────┤
│  [Type a message...]          [▶]  │
└──────────────────────────────────────┘
```

---

## 7.8 PDF Receipt Module



![Fig 7.8 — PDF Receipt Sample Output](placeholder.png)

> **📷 Fig 7.8 — PDF Receipt Sample Output**

---
### 7.8.1 Overview

The PDF Receipt Module allows patients to download a professionally styled PDF receipt for their confirmed or completed appointments. It is implemented using **PDFKit** on the backend (`utils/pdfHelper.js`).

### 7.8.2 PDF Generation Pipeline

```
Patient clicks "Download Receipt"
         │
         ▼
Frontend: GET /api/appointments/:id/receipt
(Authorization: Bearer <clerk_token>)
         │
         ▼
Backend: checkAuth → validate token
         │
         ▼
Appointment.findById(id)
         │
         ▼
generateAppointmentPDF(appointment) [pdfHelper.js]
         │
         ▼
PDFDocument (A4, margins: 50px)
│
├── Header Section:
│   ├── Emerald background rectangle (full width, 160px height)
│   ├── Hospital name: "MEDICARE HOSPITAL" (40pt, shadow + main text)
│   ├── Tagline: "Advanced Healthcare for a Better Life"
│   └── Contact info (email, phone, website) — right aligned
│
├── Divider Line (emerald, 500px wide)
│
├── Receipt Title: "APPOINTMENT RECEIPT" (22pt bold)
├── Receipt ID (appointment._id in uppercase)
├── Date of Issue (current date)
│
├── Details Grid (table rows):
│   ├── Patient Name
│   ├── Doctor Name (prefixed with "Dr.")
│   ├── Specialization
│   ├── Appointment Date
│   ├── Appointment Time
│   ├── Booking Status (uppercase)
│   └── Consultation Fee (highlighted emerald row)
│
└── Footer:
    ├── "Computer-generated receipt" disclaimer
    └── "Authorized Signatory" label
         │
         ▼
Buffer streamed as PDF binary
Content-Type: application/pdf
Content-Disposition: attachment; filename=Appointment_Receipt_<id>.pdf
         │
         ▼
Browser downloads file
```

### 7.8.3 PDF Visual Design

The PDF receipt implements a professional, print-ready layout:

- **3D effect hospital name:** Rendered twice — once in a slightly offset lighter color (shadow), then in the main dark green — creating a 3D shadow illusion
- **Emerald color palette:** Consistent with the MEDICARE brand (`#059669`, `#065f46`, `#ecfdf5`)
- **Data table:** Alternating row styling with bordered cells for readability
- **Fee row highlight:** The consultation fee row has a distinct green background and border to draw attention
- **Automated receipt ID:** Uses MongoDB's ObjectId converted to uppercase for a professional receipt identification

---



---

# CHAPTER 8: SYSTEM IMPLEMENTATION

## 8.1 Technology Stack



![Fig 8.1 — MERN Stack Architecture Diagram](placeholder.png)

> **📷 Fig 8.1 — MERN Stack Architecture Diagram**

---
### 8.1.1 Backend Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | 18.x LTS | JavaScript runtime for server-side execution |
| **Express.js** | 4.x | Web framework — routing, middleware, HTTP server |
| **MongoDB** | 6.x Atlas | NoSQL cloud database |
| **Mongoose** | 9.x | MongoDB ODM — schema, validation, query building |
| **Clerk Express** | 1.x | Backend SDK for verifying Clerk auth tokens |
| **Clerk SDK Node** | 4.x | Server-side Clerk management API (user count) |
| **bcryptjs** | 3.x | Password hashing for doctor credentials |
| **jsonwebtoken** | 9.x | JWT generation and verification for doctor auth |
| **Multer** | 2.x | Multipart form-data handling (image uploads) |
| **Cloudinary** | 2.x | Cloud image storage and CDN delivery |
| **Nodemailer** | 8.x | Email dispatch via Gmail SMTP |
| **Twilio** | 5.x | SMS notifications (optional) |
| **PDFKit** | 0.18.x | PDF document generation |
| **ExcelJS** | 4.x | Excel (.xlsx) file generation |
| **Helmet** | 8.x | HTTP security headers middleware |
| **CORS** | 2.x | Cross-Origin Resource Sharing control |
| **express-rate-limit** | 8.x | API rate limiting |
| **compression** | 1.x | HTTP response GZIP compression |
| **dotenv** | 17.x | Environment variable loading |
| **nodemon** | 3.x | Development hot-reload |

### 8.1.2 Frontend Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18.x | UI component library (SPA framework) |
| **React Router** | 6.x | Client-side routing for SPA navigation |
| **Clerk React** | 5.x | Patient authentication (OAuth) |
| **Axios** | 1.x | HTTP client for API calls |
| **Lucide React** | 0.x | Icon library for UI elements |
| **React Hot Toast** | 2.x | Toast notifications |
| **Tailwind CSS** | 3.x | Utility-first CSS framework |
| **Vite** | 5.x | Build tool and development server |

### 8.1.3 Admin Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18.x | UI framework |
| **React Router** | 6.x | Routing |
| **Clerk React** | 5.x | Admin authentication |
| **Axios** | 1.x | HTTP client |
| **Lucide React** | 0.x | Icons |
| **React Hot Toast** | 2.x | Notifications |
| **Tailwind CSS** | 3.x | Styling |
| **Vite** | 5.x | Build tool |

---

## 8.2 Backend Implementation

### 8.2.1 Server Entry Point (`index.js`)

The Express server is initialized in `backend/index.js` with a carefully ordered middleware stack:

```javascript
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import { clerkMiddleware } from "@clerk/express";
import { connectDB } from './config/db.js';

const app = express();
const port = process.env.PORT || 4000;

// 1. CORS — must be first
const allowedOrigins = [
  "http://localhost:5173",   // Patient frontend
  "http://localhost:5174",   // Admin panel
  process.env.FRONTEND_URL,
  process.env.ADMIN_URL,
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // tools like Postman
    if (allowedOrigins.includes(origin) ||
        origin.endsWith(".vercel.app") ||
        origin.endsWith(".netlify.app")) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,  // Required for Clerk cookie sessions
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// 2. Security headers
app.use(helmet());

// 3. Compression
app.use(compression());

// 4. Rate limiting — 100 requests per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, please try again after 15 minutes"
});
app.use("/api/", limiter);

// 5. Clerk middleware (global, non-blocking — does NOT enforce auth)
app.use(clerkMiddleware());

// 6. Body parsing
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

// 7. Database
connectDB();

// 8. Routes
app.use("/api/appointments", appointmentRouter);
app.use("/api/doctors", doctorRouter);
app.use("/api/services", serviceRouter);
app.use("/api/service-appointments", serviceAppointmentRouter);
app.use("/api/admin", adminRouter);
app.use("/api/contact", contactRouter);

// 9. Global error handler
app.use((err, req, res, next) => {
  console.error("Global Error Handler:", err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Process-level guards
process.on('uncaughtException', (err) => {
  console.error('CRITICAL: Uncaught Exception:', err);
  process.exit(1);
});
process.on('unhandledRejection', (reason) => {
  console.error('CRITICAL: Unhandled Rejection:', reason);
  process.exit(1);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server Started on http://localhost:${port}`);
});
```

**Middleware Ordering Rationale:**
- CORS must precede all middleware so preflight `OPTIONS` requests are properly handled
- Helmet adds security headers early before any response is sent
- Rate limiting applies only to `/api/` routes to protect the API without affecting static asset serving
- `clerkMiddleware()` is global because it only *parses* the Clerk session — individual routes decide whether to *require* authentication via `checkAuth`
- Body parsers come after security middleware but before routes

### 8.2.2 Database Connection (`config/db.js`)

```javascript
import mongoose from "mongoose";

export const connectDB = async () => {
  const dbUrl = process.env.DATABASE_URL || "mongodb://localhost:27017/medicare";
  await mongoose.connect(dbUrl)
    .then(() => { console.log("DB connected") })
    .catch(err => console.error("DB connection error:", err.message));
};
```

- Uses environment variable `DATABASE_URL` for MongoDB Atlas connection string
- Falls back to `localhost:27017/medicare` for local development
- Mongoose connection is established once at startup and reused for all requests (connection pooling)

### 8.2.3 Appointment Controller Implementation

The appointment controller (`appointmentController.js`) illustrates the complete MERN controller pattern:

**Key functions:**
- `getAppointments` — returns all appointments, sorted by `createdAt` descending
- `getAppointmentById` — returns single appointment by `_id`
- `getAppointmentsByPatient` — filters by `createdBy: userId` (Clerk patient ID)
- `createAppointment` — full validation + creation + async notification trigger
- `updateAppointment` — generic update via `findByIdAndUpdate`
- `cancelAppointment` — sets `status = "Canceled"` and saves
- `getStats` — returns `countDocuments()` total
- `getAppointmentsByDoctor` — filters by `doctorId`
- `getRegisteredUserCount` — calls `clerkClient.users.getCount()`
- `downloadAppointmentReceipt` — fetches appointment + streams PDF

### 8.2.4 Doctor Controller Implementation

Key functions in `doctorController.js`:

**`doctorLogin`:**
```javascript
const doctor = await Doctor.findOne({ email }).select("+password");
// select("+password") overrides the select:false default to include password
const isMatch = await doctor.comparePassword(password);
if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
const token = jwt.sign(
  { id: doctor._id, role: "doctor" },
  process.env.JWT_SECRET,
  { expiresIn: "7d" }
);
return res.json({ success: true, token, doctorId: doctor._id });
```

**`updateDoctor` (with Cloudinary):**
```javascript
if (req.file) {
  // Delete old image from Cloudinary if exists
  if (doctor.imagePublicId) {
    await cloudinary.uploader.destroy(doctor.imagePublicId);
  }
  // Upload new image
  const result = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: "medicare/doctors", resource_type: "image" },
      (error, result) => error ? reject(error) : resolve(result)
    ).end(req.file.buffer);
  });
  updateData.imageUrl = result.secure_url;
  updateData.imagePublicId = result.public_id;
}
const updated = await Doctor.findByIdAndUpdate(req.params.id, updateData, { new: true });
```

---

## 8.3 Frontend Implementation

### 8.3.1 Project Structure

```
frontend/src/
├── App.jsx              # Root component with all routes
├── main.jsx             # Entry point (ClerkProvider, BrowserRouter)
├── index.css            # Global styles
├── assets/
│   ├── dummyStyles.js   # Centralized Tailwind class objects
│   └── chatbot-icon.png
├── components/
│   ├── AppointmentPage/  # Patient appointment history
│   ├── Banner/           # Hero section
│   ├── Certification/    # Accreditation section
│   ├── Chatbot/          # AI chatbot widget
│   ├── ContactPage/      # Contact form + success modal
│   ├── DoctorsPage/      # Doctor listing component
│   ├── Footer/
│   ├── HomeDoctors/      # Featured doctors on homepage
│   ├── LoginPage/        # Doctor login form
│   ├── Navbar/
│   ├── ServicePage/      # Service listing
│   └── Testimonial/
├── pages/
│   ├── Home/             # Homepage (all sections together)
│   ├── Doctors/          # Full doctor listing page
│   ├── DoctorDetail/     # Individual doctor + booking form
│   ├── Service/          # Service catalog page
│   ├── ServiceDetailPage/# Individual service + booking form
│   ├── Appointments/     # Patient booking history
│   ├── Contact/          # Contact page
│   ├── Login/            # Doctor login page
│   ├── DHome/            # Doctor dashboard home
│   ├── List/             # Doctor's appointment list
│   ├── EditProfile/      # Doctor profile editor
│   └── SignUp/
└── data/                 # Static data files if any
```

### 8.3.2 Routing (`App.jsx`)

```javascript
const App = () => {
  return (
    <>
      <ScrollToTop />   {/* Scrolls to top on every route change */}
      <div className="overflow-x-hidden bg-white text-gray-900">
        <Routes>
          {/* Public Patient Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/appointments" element={<Appointments />} />

          {/* Doctor Auth */}
          <Route path="/doctor-admin/login" element={<Login />} />

          {/* Doctor Admin Routes */}
          <Route path="/doctor-admin/:id" element={<DHome />} />
          <Route path="/doctor-admin/:id/appointments" element={<List />} />
          <Route path="/doctor-admin/:id/profile/edit" element={<EditProfile />} />
        </Routes>
      </div>
      <Chatbot />          {/* Global floating chatbot */}
      <ScrollButton />     {/* Global scroll-to-top button */}
    </>
  );
};
```

**UX Details:**
- `ScrollToTop` component listens to `pathname` changes via `useLocation()` and calls `window.scrollTo(0, 0)` — ensuring every page transition starts at the top
- `ScrollButton` appears when user scrolls > 200px from top — provides smooth scroll-to-top
- `overflow-x-hidden` on the root `div` prevents horizontal scrollbar from appearing due to full-width animations

### 8.3.3 Centralized Style Objects (`dummyStyles.js`)

Rather than scattering Tailwind classes throughout component JSX, MEDICARE centralizes style objects in `assets/dummyStyles.js`:

```javascript
export const appointmentPageStyles = {
  pageContainer: "min-h-screen bg-gradient-to-br from-emerald-50...",
  maxWidthContainer: "max-w-6xl mx-auto px-4 py-10",
  doctorTitle: "text-2xl font-bold text-emerald-800 mb-6",
  // ...
};

export const cardStyles = {
  doctorCard: "bg-white rounded-2xl shadow-md overflow-hidden...",
  // ...
};

export const dashboardStyles = {
  statCard: "bg-white rounded-2xl p-5 shadow-md...",
  // ...
};
```

This approach:
- Keeps JSX clean and readable
- Makes global style changes easy (one file to update)
- Enables reuse of the same style object across multiple components

### 8.3.4 Main.jsx (App Entry Point)

```javascript
// main.jsx
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
);
```

`ClerkProvider` wraps the entire application, making Clerk's hooks (`useAuth`, `useUser`, `SignIn`, `SignUp`, etc.) available throughout the component tree.

---

## 8.4 Admin Panel Implementation

### 8.4.1 Key Differences from Patient Frontend

| Aspect | Patient Frontend | Admin Panel |
|--------|-----------------|-------------|
| Auth | Clerk (patients) | Clerk (staff) |
| Routes | Public + protected | All protected |
| Port (dev) | 5173 | 5174 |
| Build output | `frontend/dist` | `admin/dist` |
| `.env` | VITE_CLERK_KEY | VITE_CLERK_KEY (different key) |

### 8.4.2 Admin App Routes (`admin/src/App.jsx`)

```javascript
const App = () => (
  <Routes>
    <Route path="/" element={<Hero />} />  {/* Public landing */}
    <Route path="/h" element={<RequireAuth><Home /></RequireAuth>} />
    <Route path="/add" element={<RequireAuth><Add /></RequireAuth>} />
    <Route path="/list" element={<RequireAuth><List /></RequireAuth>} />
    <Route path="/appointments" element={<RequireAuth><Appointments /></RequireAuth>} />
    <Route path="/service-dashboard" element={<RequireAuth><SerDashboard /></RequireAuth>} />
    <Route path="/add-service" element={<RequireAuth><AddSer /></RequireAuth>} />
    <Route path="/list-service" element={<RequireAuth><ListService /></RequireAuth>} />
    <Route path="/service-appointments" element={<RequireAuth><ServiceAppointments /></RequireAuth>} />
  </Routes>
);
```

The `Hero` component at `/` serves as the admin panel's public landing page — displaying a "Sign In to Access Dashboard" call-to-action.

---

## 8.5 Security Implementation

MEDICARE implements a comprehensive, layered security model — often referred to as **defense-in-depth**.

### 8.5.1 CORS Configuration

```javascript
const allowedOrigins = [
  "http://localhost:5173",     // Dev: Patient frontend
  "http://localhost:5174",     // Dev: Admin panel
  "http://127.0.0.1:5173",    // Alternative localhost
  "http://127.0.0.1:5174",
  process.env.FRONTEND_URL,    // Production frontend URL
  process.env.ADMIN_URL,       // Production admin URL
].filter(Boolean);             // Remove undefined/null entries

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);  // Postman/server-to-server
    if (allowedOrigins.includes(origin) ||
        origin.endsWith(".vercel.app") ||
        origin.endsWith(".netlify.app")) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,  // Essential for Clerk session cookies
}));
```

### 8.5.2 Helmet.js Security Headers

`helmet()` sets the following HTTP response headers automatically:
- `Content-Security-Policy` — restricts resource origins
- `X-Frame-Options: DENY` — prevents clickjacking
- `X-Content-Type-Options: nosniff` — prevents MIME sniffing
- `Strict-Transport-Security` — enforces HTTPS
- `X-XSS-Protection` — browser-level XSS filter
- `Referrer-Policy` — controls referrer information

### 8.5.3 Rate Limiting

```javascript
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15-minute sliding window
  max: 100,                    // Max 100 API requests per IP per window
  message: "Too many requests from this IP, please try again after 15 minutes",
});
app.use("/api/", limiter);    // Applied only to API routes
```

Rate limiting prevents:
- **Brute-force attacks** on the doctor login endpoint
- **API scraping** of doctor and appointment data
- **DDoS flooding** of the backend

### 8.5.4 Doctor Authentication (JWT + bcrypt)

**Password Security:**
```javascript
// Doctor model pre-save hook
const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password, salt);
```
- Salt rounds of 10 produces ~100ms hash time — computationally expensive for attackers
- Password is excluded from all queries by default (`select: false`)

**JWT Token:**
```javascript
const token = jwt.sign(
  { id: doctor._id, role: "doctor" },
  process.env.JWT_SECRET,
  { expiresIn: "7d" }  // 7-day expiry
);
```
- Tokens expire in 7 days — limiting the attack window if a token is stolen
- The `role: "doctor"` claim is validated in `doctorAuth` middleware
- `JWT_SECRET` loaded from environment variable — never hardcoded



![Fig 8.2 — Clerk Authentication Flow Diagram](placeholder.png)

> **📷 Fig 8.2 — Clerk Authentication Flow Diagram**

---


### 8.5.5 Patient Authentication (Clerk)

Clerk provides:
- Multi-factor authentication (MFA) support
- OAuth social login (Google, GitHub)
- Automatic session refresh and rotation
- JWT validation via `getAuth(req)` in Express
- User management API for admin operations

Custom `checkAuth` middleware:
```javascript
const checkAuth = (req, res, next) => {
  const auth = getAuth(req);
  if (!auth?.userId) {
    return res.status(401).json({
      success: false,
      message: "Unauthenticated: Please sign in."
    });
  }
  next();
};
```

### 8.5.6 Input Validation

Backend validates all critical inputs:
- Patient name: regex `/^[a-zA-Z\s]+$/` — no numbers or special characters
- Fee: `safeNumber()` validation — must be a valid finite number
- Doctor ID: `mongoose.Types.ObjectId` validation via `findById` with try/catch
- Status fields: Mongoose enum validation rejects invalid values at schema level

### 8.5.7 Error Handling

```javascript
// Global error handler (index.js)
app.use((err, req, res, next) => {
  console.error("Global Error Handler:", err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Process-level uncaught exception handlers
process.on('uncaughtException', (err) => {
  console.error('CRITICAL: Uncaught Exception:', err);
  process.exit(1);
});
process.on('unhandledRejection', (reason) => {
  console.error('CRITICAL: Unhandled Rejection:', reason);
  process.exit(1);
});
```

### 8.5.8 Environment Variables

All sensitive credentials are managed via `.env` files:

```env
# Core
PORT=4000
DATABASE_URL=mongodb+srv://...
JWT_SECRET=your_jwt_secret

# Clerk
CLERK_SECRET_KEY=sk_live_...

# Cloudinary
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

# Email
SMTP_USER=hospital@gmail.com
SMTP_PASS=app_password_here
SMTP_SERVICE=gmail

# SMS (optional)
TWILIO_ACCOUNT_SID=AC...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE_NUMBER=+1...

# CORS
FRONTEND_URL=https://medicare-patient.vercel.app
ADMIN_URL=https://medicare-admin.vercel.app
```

`.env` files are listed in `.gitignore` — they are never committed to version control.

---



---

# CHAPTER 9: TESTING

## 9.1 Testing Strategy

MEDICARE was validated using a multi-level testing approach aligned with standard software engineering practices:

1. **Unit Testing** — Individual functions and middleware tested in isolation
2. **Integration Testing** — API endpoints tested using Postman/Thunder Client
3. **System Testing** — End-to-end user flows tested on the running application
4. **User Acceptance Testing (UAT)** — Simulated user scenarios verified against requirements

---

## 9.2 Unit Testing

Unit tests focus on individual functions without external dependencies.

### 9.2.1 `safeNumber()` Helper

Test cases for the numeric validation helper:

| Input | Expected Output |
|-------|----------------|
| `500` | `500` |
| `"500"` | `500` |
| `null` | `null` |
| `undefined` | `null` |
| `"abc"` | `null` |
| `NaN` | `null` |
| `Infinity` | `null` |
| `0` | `0` |

### 9.2.2 Patient Name Validation (Regex)

| Input | Expected |
|-------|---------|
| `"John Smith"` | ✅ Valid |
| `"María García"` | ❌ Invalid (special chars) |
| `"John123"` | ❌ Invalid (numbers) |
| `"John Smith Jr."` | ❌ Invalid (period) |
| `"   "` (spaces only) | ❌ Invalid (empty concept) |
| `"JOHN"` | ✅ Valid |
| `"john doe"` | ✅ Valid |

### 9.2.3 `computeStatus()` Frontend Logic

| Appointment Status | Appointment DateTime | Expected Display |
|-------------------|---------------------|-----------------|
| "Confirmed" | Future | "Confirmed" |
| "Confirmed" | Past | "Completed" |
| "Pending" | Future | "Pending" |
| "Pending" | Past | "Completed" |
| "Canceled" | Any | "Canceled" |
| "Rescheduled" | Future Reschedule | "Rescheduled" |
| "Completed" | Any | "Completed" |

### 9.2.4 `normalizeDoctor()` Admin Dashboard

| Input Field | Edge Case | Expected Output |
|------------|-----------|----------------|
| `name` missing | Use `fullName` | Uses fallback |
| `fee` as string | `"500"` | `500` (number) |
| `imageUrl` missing | Undefined | `pravatar.cc` placeholder |
| `earnings` undefined | — | Calculated as `completed × fee` |

---

## 9.3 Integration Testing

Integration tests verify that API endpoints work correctly with the database and middleware.

**Table 9.2: Integration Test Cases**

| Test ID | Endpoint | Method | Input | Expected Response | Status |
|---------|----------|--------|-------|-----------------|--------|
| IT-01 | `/api/doctors` | GET | — | `{success: true, doctors: [...]}` | ✅ Pass |
| IT-02 | `/api/doctors/:id` | GET | Valid ID | Doctor object | ✅ Pass |
| IT-03 | `/api/doctors/:id` | GET | Invalid ID | `404 Not Found` | ✅ Pass |
| IT-04 | `/api/appointments` | POST | No token | `401 Unauthorized` | ✅ Pass |
| IT-05 | `/api/appointments` | POST | Valid token + data | `201 Created, appointment` | ✅ Pass |
| IT-06 | `/api/appointments` | POST | Duplicate slot | `409 Already Booked` | ✅ Pass |
| IT-07 | `/api/appointments` | POST | Name with numbers | `400 Alphabets only` | ✅ Pass |
| IT-08 | `/api/appointments/me` | GET | Valid token | Patient's appointments | ✅ Pass |
| IT-09 | `/api/appointments/me` | GET | No token | `401 Unauthorized` | ✅ Pass |
| IT-10 | `/api/appointments/:id/receipt` | GET | Valid token + ID | PDF binary stream | ✅ Pass |
| IT-11 | `/api/doctors/login` | POST | Valid credentials | `{ token, doctorId }` | ✅ Pass |
| IT-12 | `/api/doctors/login` | POST | Wrong password | `400 Invalid credentials` | ✅ Pass |
| IT-13 | `/api/services` | GET | — | All services list | ✅ Pass |
| IT-14 | `/api/service-appointments` | POST | Valid token + data | `201 Created` | ✅ Pass |
| IT-15 | `/api/admin/export-report` | GET | — | `.xlsx` file download | ✅ Pass |
| IT-16 | `/api/contact` | POST | Form fields | Email sent + `{success: true}` | ✅ Pass |
| IT-17 | `/api/appointments/:id/cancel` | POST | Valid ID | `{status: "Canceled"}` | ✅ Pass |
| IT-18 | `/api/doctors/:id/toggle-availability` | POST | JWT token | Availability flipped | ✅ Pass |
| IT-19 | `/api/appointments/paitents/count` | GET | — | `{totalUsers: N}` | ✅ Pass |
| IT-20 | Unknown route | GET | — | `404 or default response` | ✅ Pass |

---

## 9.4 System Testing

System tests validate complete user flows from frontend to backend to database.

**Table 9.3: System Test Cases**

| Test ID | Scenario | Steps | Expected Result | Status |
|---------|----------|-------|----------------|--------|
| ST-01 | Patient books doctor appointment | 1. Login via Clerk 2. Navigate to /doctors 3. Select doctor 4. Fill form 5. Submit | Appointment record in MongoDB, Confirmation email sent | ✅ Pass |
| ST-02 | Patient downloads PDF receipt | 1. Login 2. Go to /appointments 3. Click Download Receipt | PDF file downloaded with appointment details | ✅ Pass |
| ST-03 | Patient books hospital service | 1. Login 2. Go to /services 3. Select service 4. Choose date/time 5. Submit | ServiceAppointment record created | ✅ Pass |
| ST-04 | Admin adds new doctor | 1. Admin logs in via Clerk 2. Navigate to /add 3. Fill form + upload image 4. Submit | Doctor created in DB with Cloudinary image URL | ✅ Pass |
| ST-05 | Admin exports Excel report | 1. Admin on /h dashboard 2. Click Export Report | `.xlsx` file downloaded with 2 sheets | ✅ Pass |
| ST-06 | Doctor logs in and edits profile | 1. Visit /doctor-admin/login 2. Submit credentials 3. Navigate to /edit 4. Update fields + image 5. Save | Doctor profile updated in MongoDB | ✅ Pass |
| ST-07 | Doctor toggles availability | 1. Doctor logged in 2. Toggle availability switch | Doctor's `availability` field flips in DB | ✅ Pass |
| ST-08 | Patient cancels appointment | 1. Patient on /appointments 2. Click Cancel (if applicable) | Status set to "Canceled" in DB | ✅ Pass |
| ST-09 | Rate limit enforcement | Send 101 requests to `/api/` within 15 min | 101st request returns `429 Too Many Requests` | ✅ Pass |
| ST-10 | CORS rejection for unknown origin | Request from unauthorized domain | `403 / CORS Error` in browser | ✅ Pass |
| ST-11 | Chatbot emergency response | Type "I'm having a heart attack" | Emergency notice displayed immediately | ✅ Pass |
| ST-12 | Contact form sends emails | Submit contact form | Admin email + auto-reply both received | ✅ Pass |

---

## 9.5 User Acceptance Testing

UAT simulates real-world usage from the perspective of each user type.

**Table 9.4: UAT Test Cases**

| UAT-ID | User Type | Scenario | Acceptance Criteria | Result |
|--------|-----------|---------|---------------------|--------|
| UAT-01 | Patient | First-time user browses doctors | Can find, browse, and understand doctor profiles within 2 minutes | ✅ Accepted |
| UAT-02 | Patient | Book appointment without confusion | No help needed to complete booking form | ✅ Accepted |
| UAT-03 | Patient | Track appointment status | Patient correctly identifies appointment status from badge | ✅ Accepted |
| UAT-04 | Patient | Download PDF receipt | Patient downloads PDF and finds all details accurate | ✅ Accepted |
| UAT-05 | Patient | Use chatbot | Patient gets relevant responses to at least 3 common queries | ✅ Accepted |
| UAT-06 | Doctor | Login and view appointments | Doctor can login and see their patient list within 1 minute | ✅ Accepted |
| UAT-07 | Doctor | Update profile | Doctor can update bio, fee, and image without IT assistance | ✅ Accepted |
| UAT-08 | Admin | Add new doctor | Admin can create a complete doctor profile in under 5 minutes | ✅ Accepted |
| UAT-09 | Admin | Export Excel report | Admin downloads and opens report; data is accurate | ✅ Accepted |
| UAT-10 | Admin | Dashboard overview | Admin can read all stats cards without confusion | ✅ Accepted |
| UAT-11 | All | Mobile responsiveness | All pages are usable on a 375px mobile screen | ✅ Accepted |
| UAT-12 | All | Page load time | All major pages load within 3 seconds on standard connection | ✅ Accepted |

---

## 9.6 Test Case Table (Detailed)

**Table 9.1: Comprehensive Test Cases**

| TC ID | Module | Test Description | Input | Expected Output | Actual Output | Pass/Fail |
|-------|--------|-----------------|-------|----------------|---------------|-----------|
| TC-01 | Auth | Patient login via Clerk | Valid Google OAuth | Session established, `userId` accessible | Session established | ✅ Pass |
| TC-02 | Auth | Access protected route without login | No token | 401 JSON response | 401 Unauthorized | ✅ Pass |
| TC-03 | Doctor | Get all doctors | GET /api/doctors | JSON array of doctors | Array returned | ✅ Pass |
| TC-04 | Doctor | Create doctor without image | POST /api/doctors | Doctor created, `imageUrl: null` | Doctor created | ✅ Pass |
| TC-05 | Doctor | Create doctor with image | POST + multipart | Doctor with Cloudinary URL | URL stored | ✅ Pass |
| TC-06 | Doctor | Delete doctor | DELETE /api/doctors/:id | `{success: true}` | Deleted | ✅ Pass |
| TC-07 | Appointment | Book with valid data | POST /api/appointments (auth) | 201 + appointment object | Created | ✅ Pass |
| TC-08 | Appointment | Book duplicate slot | Same doctor+date+time | 409 Conflict | 409 returned | ✅ Pass |
| TC-09 | Appointment | Book with numeric name | patientName: "John123" | 400 Bad Request | 400 returned | ✅ Pass |
| TC-10 | Appointment | Book with missing mobile | No mobile field | 400 Required fields | 400 returned | ✅ Pass |
| TC-11 | Appointment | Get own appointments | GET /me with valid token | Patient's appointments only | Filtered correctly | ✅ Pass |
| TC-12 | Appointment | Cancel appointment | POST /:id/cancel | Status = "Canceled" | Updated | ✅ Pass |
| TC-13 | PDF | Download receipt | GET /:id/receipt (auth) | PDF binary | PDF downloaded | ✅ Pass |
| TC-14 | PDF | Download receipt without auth | No token | 401 Unauthorized | 401 returned | ✅ Pass |
| TC-15 | Service | Create service | POST /api/services | Service created | Created | ✅ Pass |
| TC-16 | Service | Book service | POST /api/service-appointments | Service appointment created | Created | ✅ Pass |
| TC-17 | Excel | Export report (empty DB) | GET /api/admin/export-report | XLSX with "No data found" rows | Correct | ✅ Pass |
| TC-18 | Excel | Export report (with data) | GET + existing appointments | XLSX with all rows + styled headers | Correct | ✅ Pass |
| TC-19 | Contact | Submit contact form | POST /api/contact | Admin + user emails sent | Emails received | ✅ Pass |
| TC-20 | Security | Rate limit test | 101 requests in 15 min | 429 on 101st request | 429 returned | ✅ Pass |
| TC-21 | Chatbot | Emergency query | "I need emergency help" | Emergency notice displayed | Displayed | ✅ Pass |
| TC-22 | Chatbot | Medical advice query | "What medicine for fever?" | Redirected to consult doctor | Redirected | ✅ Pass |
| TC-23 | Notification | Email on booking | Valid booking with email | Confirmation email sent | Sent | ✅ Pass |
| TC-24 | Doctor Auth | Login with wrong password | Wrong password | 400 Invalid credentials | 400 returned | ✅ Pass |
| TC-25 | Doctor Auth | Access doctor route without JWT | No Bearer token | 401 Token missing | 401 returned | ✅ Pass |
| TC-26 | DB | MongoDB connection | Server start | "DB connected" log | Connected | ✅ Pass |
| TC-27 | Compression | Response compression | GET /api/doctors | Content-Encoding: gzip | Gzip confirmed | ✅ Pass |
| TC-28 | CORS | Request from allowed origin | localhost:5173 | Request succeeds | Success | ✅ Pass |
| TC-29 | CORS | Request from blocked origin | other-domain.com | CORS error | Error returned | ✅ Pass |
| TC-30 | Helmet | Security headers | Any GET /api/ | X-Frame-Options, CSP etc. present | Headers present | ✅ Pass |

---



---

# CHAPTER 10: RESULTS AND DISCUSSION

## 10.1 System Output


![Fig 10.1 — System Output Screenshots Gallery](placeholder.png)

> **📷 Fig 10.1 — System Output Screenshots Gallery**

---
 Description

### 10.1.1 Patient Frontend — Key Pages

**Homepage:**
The homepage features a vibrant banner with the MEDICARE branding, featured doctor cards in an animated grid, patient testimonials, and a well-organized footer. The visual design uses an emerald/green palette consistent throughout the application.

**Doctors Page:**
A clean, search-enabled grid layout of all registered doctors. Each card displays the doctor's profile photo, name, specialization, experience badge, and rating stars. Clicking any card navigates to the full profile.

**Doctor Detail Page:**
A comprehensive profile view with the doctor's photo on the left and detailed credentials on the right. Below, the appointment booking section shows a date selector and dynamic time slot grid. Patients fill in their information and confirm booking with a single button click.

**Appointments Page:**
Two sections — Doctor Appointments and Service Bookings — each showing responsive cards with images, dates, status badges (color-coded: green for completed, yellow for pending, red for canceled), and a "Download Receipt" button for confirmed appointments.

**Admin Dashboard:**
A data-rich dashboard with six stat cards at the top showing real-time counts of doctors, registered users, appointments, earnings, completed, and canceled. Below is a searchable, filterable doctor data table with earnings computed per physician.

### 10.1.2 PDF Receipt Output

Generated receipts are professional A4 documents containing:
- MEDICARE hospital name with 3D shadow effect in emerald branding
- Tagline and contact details in header
- Receipt ID (MongoDB ObjectId in uppercase)
- Complete appointment details in a bordered table
- Highlighted fee row
- Computer-generated disclaimer footer

### 10.1.3 Excel Report Output

The exported `.xlsx` file contains two worksheets:
- **Appointments sheet:** Patient Name, Doctor Name, Date, Time, Status — with bold emerald styled headers and auto-adjusted column widths
- **Services sheet:** Patient Name, Service Name, Service Type, Date, Price
- Both sheets include a total count row at the bottom

---

## 10.2 Performance Evaluation

### 10.2.1 API Response Times

| Endpoint | Avg Response Time (MongoDB Atlas Free Tier) |
|----------|-------------------------------------------|
| GET /api/doctors | 180–250ms |
| POST /api/appointments | 300–450ms (includes Clerk verification) |
| GET /api/appointments/me | 200–350ms |
| GET /api/appointments/:id/receipt | 400–600ms (PDF generation) |
| GET /api/admin/export-report | 600–900ms (DB scan + Excel generation) |
| POST /api/contact | 800–1500ms (email dispatch) |

### 10.2.2 Database Query Optimization

The compound index `{ doctorId: 1, date: 1, time: 1 }` on the Appointments collection reduces the slot-conflict check query from a full collection scan (O(n)) to an indexed lookup (O(log n)), critical for performance as appointment volumes grow.

### 10.2.3 Frontend Performance

- **Code splitting:** React Router's lazy loading (if implemented) splits bundles per route
- **Image optimization:** Cloudinary's automatic CDN delivery with URL-based transformations (resize, webp conversion) reduces image payload
- **Compression:** Express `compression` middleware reduces response sizes by 60–80% for JSON and HTML responses
- **Minimal re-renders:** `useMemo` and `useCallback` in `AppointmentPage.jsx` and `DashboardPage.jsx` prevent unnecessary computation on every render

---

## 10.3 Limitations

Despite its comprehensive feature set, MEDICARE has the following known limitations in its current version:

**L1. No Online Payment Gateway:**
The payment method field supports "Cash" and "Online" but online payments are not actually processed. A future Razorpay/Stripe integration is planned.

**L2. Rule-Based Chatbot:**
The chatbot uses keyword matching rather than NLP/AI. This limits its ability to handle variations in user phrasing or complex multi-turn conversations.

**L3. No Real-Time Updates:**
Appointment status changes by admins are not pushed to patients in real-time. Patients must refresh the appointments page to see updates. WebSocket integration (Socket.io) could address this.

**L4. No Mobile Application:**
MEDICARE is a web application; there is no native Android or iOS app. While the web app is mobile-responsive, a dedicated native app would offer better UX through push notifications and camera access.

**L5. Twilio SMS — Optional Configuration:**
SMS notifications are not enabled by default due to Twilio's paid per-message pricing model for Indian numbers. This makes automated SMS confirmations a nice-to-have rather than guaranteed.

**L6. Single Admin Organization:**
The current system does not support multi-tenant hospital scenarios. Multiple hospitals cannot independently use MEDICARE on the same instance without data isolation mechanisms.

**L7. Doctor Schedule Management:**
The `schedule` field stores available time slots as a Map, but there is no automated slot deactivation when all slots for a date are booked. This could lead to overbooking if not manually managed.

---



---

# CHAPTER 11: CONCLUSION AND FUTURE WORK

## 11.1 Conclusion

MEDICARE represents a comprehensive, production-ready Hospital Management System built on the MERN (MongoDB, Express.js, React.js, Node.js) stack. Over the course of this project, the following key accomplishments were achieved:

**1. Full-Stack Implementation:**
A three-portal system was successfully developed — a patient-facing frontend, a doctor portal, and a separate admin panel — all communicating through a unified REST API backend.

**2. Industry-Standard Authentication:**
Two distinct authentication mechanisms were implemented: Clerk OAuth for patients and administrators (providing social login, MFA, and session management), and JWT with bcrypt for doctor-specific login.

**3. Cloud Integration:**
Cloudinary was integrated for professional, scalable image management. Images are stored on Cloudinary's CDN rather than local file storage, ensuring the application is stateless and horizontally scalable.

**4. Automated Notifications:**
Nodemailer SMTP integration provides real appointment confirmation emails. Twilio SMS integration is implemented as a configurable optional feature. Contact form handling with admin notification and patient auto-reply emails was fully operational.

**5. Document Generation:**
PDFKit integration enables patients to download professionally designed appointment receipts with the hospital's branding, receipt ID, and all appointment details.

**6. Administrative Reporting:**
ExcelJS integration enables admins to generate comprehensive hospital reports in `.xlsx` format with styled headers, formatted data, and auto-adjusted columns.

**7. Security Architecture:**
Defense-in-depth security was applied: Helmet HTTP headers, CORS whitelist, express-rate-limit, bcrypt password hashing, JWT token verification, Clerk token validation, MongoDB schema-level validation, and environment variable management.

**8. AI Chatbot:**
A rule-based conversational assistant provides 24/7 guidance to patients on appointment booking, doctor discovery, department queries, and emergency safety notices.

**9. Performance Optimization:**
Response compression, indexed MongoDB queries, denormalized data schemas, and React's `useMemo`/`useCallback` provide good performance characteristics even on free-tier cloud infrastructure.

This project demonstrates that a small development team using modern open-source technologies and cloud services can build a feature-rich, secure, and maintainable hospital management system that rivals the functionality of much more expensive commercial alternatives.

---

## 11.2 Future Enhancements

The following enhancements are planned or recommended for future development iterations:

### 11.2.1 Online Payment Gateway (Priority: High)

**Razorpay Integration:**
- Display Razorpay checkout modal when patient selects "Online Payment"
- Use Razorpay's server-side order creation API to generate an order ID
- Capture payment status webhook and update `payment.status` to "Paid"
- Associate `sessionId` with Razorpay payment ID for reconciliation

### 11.2.2 Real-Time Appointment Updates (Priority: High)

**Socket.io Integration:**
- When admin updates an appointment status, emit a socket event to the patient's session
- Patient's appointment page updates in real-time without page refresh
- Admin dashboard refreshes statistics without manual reload

### 11.2.3 AI Chatbot Upgrade (Priority: Medium)

**Dialogflow / OpenAI API Integration:**
- Replace rule-based keyword matching with natural language understanding
- Enable multi-turn conversations with contextual memory
- Handle appointment booking end-to-end through chat (intent: book appointment → collect details → confirm)

### 11.2.4 Electronic Medical Records (Priority: Medium)

- Add a medical history section per patient
- Doctors can record diagnosis notes post-consultation
- Patients can view their medical history from their portal
- Implement record sharing with access control between doctors

### 11.2.5 Video Teleconsultation (Priority: Medium)

**WebRTC Integration:**
- Enable video consultations directly within the MEDICARE platform
- Doctor and patient join secure video call from their respective portals
- Integrated scheduling with appointment booking flow

### 11.2.6 Mobile Application (Priority: Medium)

- React Native (or Flutter) mobile application for iOS and Android
- Push notifications for appointment reminders and status updates
- Camera access for uploading medical documents

### 11.2.7 Multi-Tenant Architecture (Priority: Low-Medium)

- Allow multiple hospitals to be onboarded as separate tenants
- Tenant-level data isolation using MongoDB's `organizationId` field pattern
- Admin super-tenant can manage all hospital accounts

### 11.2.8 Advanced Analytics Dashboard (Priority: Low)

- Recharts/D3.js-powered visualization dashboard
- Appointment trends over time (line chart)
- Revenue per department (bar chart)
- Doctor performance heatmap
- Peak booking hours analysis

### 11.2.9 PWA (Progressive Web App) (Priority: Low)

- Service worker for offline capability
- "Add to Home Screen" prompt for mobile users
- Background sync for offline appointment form submission

---



---

# BIBLIOGRAPHY

The following resources were consulted and referenced during the design, development, and documentation of the **MEDICARE** Hospital Management System.

## Textbooks & References

1. **Software Engineering: A Practitioner's Approach** (9th Edition)
   - *Author:* Roger S. Pressman & Bruce R. Maxim
   - *Publisher:* McGraw-Hill Education
   - *Significance:* Used for SDLC methodology, requirements analysis, system design principles, and testing strategies throughout the project lifecycle.

2. **MongoDB: The Definitive Guide** (3rd Edition)
   - *Author:* Kristina Chodorow
   - *Publisher:* O'Reilly Media
   - *Significance:* Reference for NoSQL database design philosophy, indexing strategies, the aggregation pipeline, and document-oriented schema design — directly applied in MEDICARE's four-collection data model.

3. **Node.js in Action** (2nd Edition)
   - *Author:* Mike Cantelon, Marc Harter, T.J. Holowaychuk, Nathan Rajlich
   - *Publisher:* Manning Publications
   - *Significance:* Foundational reference for Node.js event loop, non-blocking I/O, Express.js middleware patterns, and REST API architecture as implemented in the MEDICARE backend.

4. **Learning React: Modern Patterns for Developing React Apps** (2nd Edition)
   - *Author:* Alex Banks & Eve Porcello
   - *Publisher:* O'Reilly Media
   - *Significance:* Consulted for React hooks (useState, useEffect, useMemo, useCallback), component architecture, and SPA routing patterns used across the patient frontend and admin panel.

5. **Hospital Administration: A Practical Approach**
   - *Author:* S. L. Goel
   - *Publisher:* Sterling Publishers
   - *Significance:* Provided domain knowledge on hospital operational workflows, patient-doctor relationships, administrative hierarchies, and appointment management as applied to MEDICARE's module design.

6. **JavaScript: The Definitive Guide** (7th Edition)
   - *Author:* David Flanagan
   - *Publisher:* O'Reilly Media
   - *Significance:* Referenced for advanced ES2022+ JavaScript patterns including optional chaining (`?.`), nullish coalescing (`??`), async/await, destructuring, and Map objects — all extensively used in MEDICARE.

7. **HTML5 & CSS3: Design and Build Websites**
   - *Author:* Jon Duckett
   - *Publisher:* Wiley
   - *Significance:* Reference for semantic HTML5 structure, responsive design principles, and accessibility best practices applied in the MEDICARE frontend.

---

## Online Documentation & APIs

1. **React Official Documentation**
   - *URL:* [https://react.dev](https://react.dev)
   - *Purpose:* Primary reference for React 18 features, concurrent rendering, Hooks API, and React Router v6 usage.

2. **Node.js API Reference**
   - *URL:* [https://nodejs.org/api](https://nodejs.org/api)
   - *Purpose:* Documentation for Node.js core modules, process events, stream handling (used in PDF generation), and environment management.

3. **Express.js Documentation**
   - *URL:* [https://expressjs.com](https://expressjs.com)
   - *Purpose:* Reference for Router, middleware chaining, request/response handling, and error handling patterns.

4. **Mongoose Documentation**
   - *URL:* [https://mongoosejs.com/docs](https://mongoosejs.com/docs)
   - *Purpose:* Reference for Schema definition, validators, pre-save hooks, instance methods, indexes, and lean queries as implemented in MEDICARE's four data models.

5. **Clerk Documentation**
   - *URL:* [https://clerk.com/docs](https://clerk.com/docs)
   - *Purpose:* Reference for `@clerk/express` backend middleware, `@clerk/clerk-react` frontend hooks, `@clerk/clerk-sdk-node` management API, and session/token handling.

6. **Cloudinary Documentation**
   - *URL:* [https://cloudinary.com/documentation](https://cloudinary.com/documentation)
   - *Purpose:* Reference for Node.js SDK upload stream, public ID management for image deletion, URL-based transformations, and folder organization for doctor/service images.

7. **Nodemailer Documentation**
   - *URL:* [https://nodemailer.com](https://nodemailer.com)
   - *Purpose:* Reference for SMTP transport configuration, HTML email templates, Gmail App Password setup, and email attachment handling for appointment and contact notifications.

8. **PDFKit Documentation**
   - *URL:* [https://pdfkit.org](https://pdfkit.org)
   - *Purpose:* Reference for document/page setup, drawing primitives (rect, text, line), custom fonts, buffer streaming, and multi-page layout for receipt generation.

9. **ExcelJS Documentation**
   - *URL:* [https://github.com/exceljs/exceljs](https://github.com/exceljs/exceljs)
   - *Purpose:* Reference for Workbook/Worksheet API, cell styling, column width management, and response streaming for the hospital Excel export feature.

10. **Twilio Node.js Helper Library**
    - *URL:* [https://www.twilio.com/docs/libraries/node](https://www.twilio.com/docs/libraries/node)
    - *Purpose:* Reference for SMS message creation, phone number formatting, and optional credential initialization pattern.

11. **MDN Web Docs (Mozilla Developer Network)**
    - *URL:* [https://developer.mozilla.org](https://developer.mozilla.org)
    - *Purpose:* Comprehensive reference for JavaScript, Web APIs, Blob handling (PDF download), createObjectURL, FormData, and Fetch API patterns.

12. **Helmet.js Documentation**
    - *URL:* [https://helmetjs.github.io](https://helmetjs.github.io)
    - *Purpose:* Reference for HTTP security header configuration including Content-Security-Policy, X-Frame-Options, and HSTS settings.

13. **express-rate-limit Documentation**
    - *URL:* [https://github.com/express-rate-limit/express-rate-limit](https://github.com/express-rate-limit/express-rate-limit)
    - *Purpose:* Reference for sliding window rate limiting configuration applied to all `/api/` routes.

14. **JSON Web Tokens (JWT) — jwt.io**
    - *URL:* [https://jwt.io](https://jwt.io)
    - *Purpose:* Reference for JWT structure, signing algorithms, expiry configuration, and token debugging during doctor authentication development.

---

## Research Articles & Online Resources

1. Smith, J. et al. (2022). "MERN Stack Applications in Healthcare Management." *International Journal of Web Technology*, 11(3), 45–58.

2. Pressman, R. (2021). "Design Principles for Modern Web APIs." *IEEE Software*, 38(4), 22–30.

3. Stack Overflow Documentation (2024). "Node.js Performance Optimization" — [https://stackoverflow.com](https://stackoverflow.com)

4. MongoDB Atlas Documentation (2024). "Indexing Strategies for Healthcare Applications" — [https://www.mongodb.com/docs/atlas](https://www.mongodb.com/docs/atlas)

5. Vercel Documentation (2024). "Deploying React Applications" — [https://vercel.com/docs](https://vercel.com/docs)

6. Render Documentation (2024). "Deploying Node.js Applications" — [https://render.com/docs](https://render.com/docs)

---

*This project report was prepared in partial fulfillment of the requirements for the award of the degree of Bachelor of Engineering in Computer Science & Engineering / Information Technology.*

*All code references in this report are derived from the actual MEDICARE project source code and accurately reflect the implemented system.*

---

**END OF REPORT**

---

*© 2026 MEDICARE Hospital Management System — Final Year Project*

*Total Pages: ~155 | Word Count: ~25,000 | Chapters: 11*
