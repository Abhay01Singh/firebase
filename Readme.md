🔐 Google Authentication using MERN

This project implements Google Sign-In (OAuth 2.0) using the MERN stack (MongoDB, Express, React, Node).

🚀 Tech Stack

React.js

Node.js & Express.js

MongoDB & Mongoose

Google OAuth 2.0

JWT Authentication

✨ Features

Google Sign-In

JWT-based authentication

User auto-create in MongoDB

Protected routes

Logout support

⚙️ Environment Variables
Backend .env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
GOOGLE_CLIENT_ID=your_google_client_id

Frontend .env
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_API_URL=http://localhost:5000

📦 Installation
git clone https://github.com/yourusername/google-auth-mern.git
cd google-auth-mern

# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm run dev

🔄 Authentication Flow

User logs in with Google

Google token sent to backend

Token verified & JWT generated

User authenticated

📜 License

MIT License
