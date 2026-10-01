# 🌍 Wanderlust - Airbnb Clone

A full-stack web application built with Node.js, Express, and MongoDB that mimics core functionalities of Airbnb. Users can view, list, edit, and review travel destinations worldwide. The project is fully optimized for production deployment on platforms like Render.

### 🔗 Live Demo
Check out the live application deployed on Render here: 
👉 **[Wanderlust Live Application](https://onrender.com)**

---

## 🛠️ Features

- **MVC Architecture:** Clean and modular backend structure separating Controllers, Models, and Routes.
- **Dynamic Routing:** Fully configured web root `/` routing, fixing common deployment pathing bugs.
- **User Authentication:** Secure user signup and login flows.
- **Listing Management:** Full CRUD operations for travel listings (Create, Read, Update, Delete).
- **Review System:** Users can add and delete ratings/reviews for specific destinations.
- **Cloud Storage:** Integrated image upload configurations using Cloudinary.

## 💻 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Templating Engine:** EJS (Embedded JavaScript)
- **Cloud Configuration:** Cloudinary (for media uploads)

## 📁 Project Structure

```text
├── controllers/      # Route handlers & logic
├── models/           # Mongoose schemas (Listing, Review, User)
├── routes/           # Express routers for modular endpoints
├── views/            # EJS templates for front-end rendering
├── public/           # Static assets (CSS styles, JS, Images)
├── utils/            # Helper functions & custom ErrorHandlers
├── app.js            # Main application entry point
└── cloudConfig.js    # Cloudinary integration keys
```

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org) and [MongoDB](https://mongodb.com) installed.

### 2. Clone the Repository
```bash
git clone https://github.com/imvisheshjain/Wanderlust.git
cd Wanderlust
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Environment Variables Setup
Create a `.env` file in the root directory and add your credentials:
```env
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
ATLAS_URL=your_mongodb_connection_string
SECRET=your_session_secret
```

### 5. Run the Application
```bash
node app.js
```
Open `http://localhost:8080` (or your configured PORT) in your browser.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
