# TaskManagerApp

## Overview
TaskManagerApp is a full-stack web application designed to manage and track tasks. This project is built using **React** for the frontend and **Spring Boot** for the backend. The frontend provides a user-friendly interface, while the backend handles data processing and management.

## Project Structure

```
TaskManagerApp/
├── backend/       (Spring Boot backend API)
├── frontend/      (React frontend app)
├── node_modules/  (Installed npm dependencies)
├── package.json   (Frontend project dependencies and configurations)
├── package-lock.json
├── README.md      (Project overview and instructions)
```

## Features

- **Frontend (React)**: 
  - Task management interface.
  - User-friendly design for easy task tracking.
  
- **Backend (Spring Boot)**:
  - RESTful APIs to handle task-related operations.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (for React development)  
  Download and install from [Node.js Official Website](https://nodejs.org/).
  
- **Java 17** (for Spring Boot)
  Download and install from [Oracle's Java Downloads](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html).
  
- **Gradle** (for building the Spring Boot project)
  Install Maven from [Gradle](https://gradle.org/install/).

## Installation

### 1. Clone the Repository
Clone the project from GitHub to your local machine:
```bash
git clone <(https://github.com/Nobodybean/TaskManagementApp.git)>
cd TaskManagerApp
```

### 2. Install Frontend Dependencies
Navigate to the `frontend` folder and install the dependencies:
```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies
If necessary, navigate to the `backend` folder and use Maven to install dependencies:
```bash
cd backend
gradle.build install
```

### 4. Run the Application

## No Deployment Made
Currently, the project is still under development, and there has been **no deployment** made. 


## Technologies Used
- **Frontend**: React, JavaScript, HTML5, CSS3
- **Backend**: Spring Boot, Java
- **Build Tools**: Gradle (for Spring Boot), npm (for React)
- **Database**: H2
