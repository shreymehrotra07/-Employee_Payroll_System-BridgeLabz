# 📊 Employee Payroll System – BridgeLabz

A full-stack **Employee Payroll Management System** built using **Node.js, Express.js, and EJS**.
This application enables users to manage employee records efficiently with full **CRUD (Create, Read, Update, Delete)** functionality through a clean and user-friendly interface.

The project showcases backend fundamentals like **file handling, server-side rendering, and MVC-like architecture**.

---

## 🚀 Features

* ➕ Add new employees
* 📋 View all employees
* ✏️ Edit employee details
* ❌ Delete employee records
* 💾 Persistent data storage using a JSON file
* 🎨 Clean and simple UI with EJS templates
* ⚡ Fast server-side rendering

---

## 🛠️ Tech Stack

**Backend:**

* Node.js
* Express.js

**Frontend:**

* EJS (Embedded JavaScript Templates)
* CSS

**Storage:**

* JSON file (File-based database)

**Other:**

* Node.js File System Module (`fs`)

---

## 📂 Project Structure

```
Employee_Payroll_System-BridgeLabz/
│
├── modules/
│   └── fileHandler.js        # Handles file read/write operations
│
├── public/
│   └── style.css             # Styling for UI
│
├── views/
│   ├── index.ejs             # Employee list page
│   ├── add.ejs               # Add employee page
│   └── edit.ejs              # Edit employee page
│
├── employees.json            # Stores employee data
├── server.js                 # Main server file
├── package.json              # Project dependencies
├── package-lock.json
└── README.md
```
