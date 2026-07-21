# ✨ Lumio

> Production-ready AI Content Generation Platform built with React, FastAPI, PostgreSQL, JWT Authentication, and CI/CD.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?logo=fastapi)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql)
![Railway](https://img.shields.io/badge/Deployment-Railway-purple)
![Status](https://img.shields.io/badge/Status-Live-success)

---

# 🚀 Overview

Lumio is a production-ready AI SaaS platform that enables users to generate high-quality content using Large Language Models.

Rather than being a simple AI writing tool, Lumio demonstrates modern full-stack software engineering by combining secure authentication, scalable backend services, persistent data storage, and automated deployment pipelines into a complete production system.

The project showcases how AI can be integrated into a real-world web application with clean architecture, maintainable code, and an intuitive user experience.

---

# ✨ Features

- 🤖 AI-powered Content Generation
- 📝 Blog, Caption & Email Generation
- 🔐 JWT Authentication
- 👤 User Registration & Login
- 📚 Content History
- 🗑 Delete Generated Content
- 📊 Personal Dashboard
- 🛡 Protected Routes
- ⚡ FastAPI REST API
- 🚀 Automated CI/CD Pipeline
- 🌐 Production Deployment

---

# 🏗 Architecture

```text
                 User
                   │
                   ▼
           React Frontend
                   │
          JWT Authentication
                   │
                   ▼
            FastAPI Backend
                   │
        ┌──────────┼──────────┐
        │          │          │
        ▼          ▼          ▼
 PostgreSQL     Groq API   SQLAlchemy
        │
        ▼
 Generated Content Storage
        │
        ▼
     User Dashboard
```

---

# 🛠 Tech Stack

## Frontend

- React 18
- TypeScript
- Tailwind CSS

## Backend

- Python 3.11
- FastAPI

## AI

- Groq API
- Llama 3.3 70B

## Database

- PostgreSQL
- SQLAlchemy

## Authentication

- JWT Authentication

## Deployment

- Vercel
- Railway

## DevOps

- GitHub Actions
- CI/CD Pipeline

---

# 📂 Project Structure

```text
lumio/
│
├── frontend/
├── backend/
├── app/
├── api/
├── database/
├── models/
├── services/
├── .github/
│   └── workflows/
├── requirements.txt
└── README.md
```

---

# ⚙️ Installation

Clone repository

```bash
git clone https://github.com/Brandonjb123/lumio.git
```

Move into project

```bash
cd lumio
```

Frontend

```bash
cd frontend
npm install
npm run dev
```

Backend

```bash
cd backend
python -m venv venv
```

Windows

```bash
venv\Scripts\activate
```

Linux / macOS

```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run backend

```bash
uvicorn main:app --reload
```

---

# 🔑 Environment Variables

```env
DATABASE_URL=
JWT_SECRET_KEY=
GROQ_API_KEY=
```

---

# 🎯 Engineering Highlights

- Production-ready AI SaaS Architecture
- JWT Authentication & Authorization
- PostgreSQL Data Persistence
- RESTful API Design
- Modular Backend Structure
- Automated CI/CD Pipeline
- Protected Frontend Routes
- Scalable Full-stack Architecture

---

# 📊 Key Capabilities

- Secure User Authentication
- AI-powered Content Generation
- Persistent User Data
- Content Management Dashboard
- Responsive UI
- Production Deployment
- Automated Build & Deployment
- Clean API Architecture

---

# 🗺 Roadmap

## Next Version

- Content Templates
- PDF Export
- AI Analytics Dashboard
- Team Workspace
- Prompt Library
- API Access
- Usage Tracking
- Subscription System

---

# 🌐 Live Demo

Frontend

https://lumio.vercel.app

Backend

https://lumio-production.up.railway.app

---

# 💻 Repository

https://github.com/Brandonjb123/lumio

---

# 👨‍💻 Author

**Brandon Jovan Bumi**

Production AI Systems Engineer

Portfolio

https://brandon-bumi-portfolio.vercel.app

LinkedIn

https://linkedin.com/in/brandon-jovan-bumi

---
