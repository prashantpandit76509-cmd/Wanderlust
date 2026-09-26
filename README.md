# WanderLust 🏡

> A full-stack property listing and travel platform built with Node.js, Express.js, MongoDB, and EJS.

WanderLust is a full-stack web application designed to provide a seamless platform for discovering, viewing, and managing property listings. The application follows a structured MVC architecture and implements RESTful routing, database persistence, server-side rendering, and responsive UI development.

The project focuses on building a maintainable backend architecture while providing a simple and intuitive user experience.

---

## ✨ Key Features

* **Property Listings** — Browse and explore available properties.
* **Listing Details** — View complete information for individual properties.
* **Create Listings** — Add new properties to the platform.
* **Update Listings** — Modify existing property information.
* **Delete Listings** — Remove listings when required.
* **Dynamic Routing** — Dedicated routes for individual property resources.
* **MongoDB Integration** — Persistent storage using MongoDB and Mongoose.
* **Server-Side Rendering** — Dynamic pages rendered using EJS.
* **Responsive UI** — Responsive interface built with HTML, CSS, and Bootstrap.
* **RESTful Architecture** — Structured HTTP routes for resource management.
* **MVC Architecture** — Separation of application logic, data models, and presentation.

---

## 🏗️ System Architecture

WanderLust follows an MVC-inspired application structure to keep the codebase modular and maintainable.

```text
                    ┌──────────────────┐
                    │      Client      │
                    │  Browser / UI    │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  Express Router  │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ Application Logic│
                    │   & Middleware   │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ Mongoose Models  │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │     MongoDB      │
                    │    Database      │
                    └──────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap
* EJS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Development Tools

* Git
* GitHub
* VS Code
* npm
* Nodemon

---

## 📂 Project Structure

```text
WanderLust/
│
├── models/
│   └── listings.js
│
├── routes/
│   └── listings.js
│
├── views/
│   ├── listings/
│   │   ├── index.ejs
│   │   ├── show.ejs
│   │   ├── new.ejs
│   │   └── edit.ejs
│   │
│   └── layouts/
│
├── public/
│   ├── css/
│   └── js/
│
├── init/
│   └── data.js
│
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

> The exact folder structure may vary depending on the current implementation.

---

## 🔄 CRUD Operations

WanderLust implements the core CRUD workflow for property listings.

| Operation | HTTP Method | Purpose                    |
| --------- | ----------- | -------------------------- |
| Create    | `POST`      | Create a new listing       |
| Read      | `GET`       | Retrieve listing data      |
| Update    | `PUT`       | Update an existing listing |
| Delete    | `DELETE`    | Remove a listing           |

This provides a clean foundation for building additional platform features such as authentication, bookings, reviews, and search.

---

## 🗄️ Data Model

The application uses **Mongoose** to define and interact with MongoDB schemas.

A listing contains information such as:

```text
Listing
├── title
├── description
├── image
├── price
├── location
└── country
```

Mongoose provides schema-based data modeling and simplifies communication between the Node.js application and MongoDB.

---

## ⚙️ Local Development Setup

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* MongoDB
* Git

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd WanderLust
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure MongoDB

Make sure your MongoDB server is running and update the database connection configuration according to your local environment.

Example:

```javascript
mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
```

### 5. Start the Application

```bash
node app.js
```

For development with Nodemon:

```bash
nodemon app.js
```

### 6. Open the Application

```text
http://localhost:8080
```

---

## 🧪 Development Workflow

The project was developed using an iterative approach:

```text
Design
   ↓
Define Data Model
   ↓
Build Express Routes
   ↓
Connect MongoDB
   ↓
Implement CRUD Operations
   ↓
Create EJS Views
   ↓
Integrate Frontend
   ↓
Test & Debug
   ↓
Git Commit
   ↓
GitHub
```

---

## 🔐 Error Handling & Validation

The application is structured to support:

* Request validation
* Database validation
* Route-level error handling
* Invalid resource handling
* Server-side form processing
* Proper HTTP request methods

Additional validation and centralized error handling can be extended as the application grows.

---

## 📸 Application Screenshots

Add screenshots of the application here to give recruiters a quick overview of the UI.

### Home / Listings

```text
Add screenshot here
```

### Listing Details

```text
Add screenshot here
```

### Create Listing

```text
Add screenshot here
```

---

## 🚀 Future Enhancements

The architecture allows the platform to be extended with:

* 🔐 User authentication and authorization
* 👤 User profiles
* ⭐ Reviews and ratings
* 🔎 Search and advanced filtering
* 🗺️ Map and geolocation integration
* 📷 Cloud-based image uploads
* 📅 Property booking system
* 💳 Payment integration
* ❤️ Wishlist functionality
* 📱 Improved mobile experience
* ⚡ API optimization and caching

---

## 📈 Scalability Considerations

The current architecture provides a foundation for future scaling through:

* Modular Express routes
* Separate Mongoose models
* Reusable EJS components
* RESTful resource design
* Database indexing
* Authentication middleware
* API-level validation
* Centralized error handling

As traffic increases, the application can be further evolved using caching, optimized database queries, cloud storage, load balancing, and containerized deployment.

---

## 🧑‍💻 Developer

**Prashant Sharma**

B.Tech CSE | Software Development Enthusiast

---

## 📄 License

This project is developed for learning and portfolio purposes.

---

## ⭐ Acknowledgements

This project was developed as a hands-on full-stack web development project to understand backend architecture, RESTful APIs, database integration, server-side rendering, and modern web application development.

---

### 📌 Project Status

**Status:** 🚧 Active Development

New features and improvements may be added as the project evolves.

