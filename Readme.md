🚀 Google Authentication using MERN Stack

This project demonstrates Google Authentication (OAuth 2.0) using the MERN stack (MongoDB, Express.js, React.js, Node.js).
Users can sign in securely using their Google account.

🛠️ Tech Stack

Frontend

React.js

Axios

React Router

Google Identity Services

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT

Google OAuth 2.0

✨ Features

Google Sign-In

JWT-based authentication

Secure backend token verification

User auto-creation in MongoDB

Protected routes

Logout functionality

📁 Project Structure
google-auth-mern/
│
├── backend/
│ ├── models/
│ │ └── User.js
│ ├── routes/
│ │ └── auth.js
│ ├── controllers/
│ │ └── authController.js
│ ├── config/
│ │ └── db.js
│ ├── server.js
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ │ └── Login.jsx
│ │ ├── context/
│ │ │ └── AuthContext.jsx
│ │ ├── App.js
│ │ └── main.jsx
│ └── .env
│
└── README.md

🔐 Google OAuth Setup

Go to Google Cloud Console

Create a new project

Enable Google Identity Services

Create OAuth Client ID

Application type: Web

Add Authorized origins:

http://localhost:5173

Copy Client ID

⚙️ Environment Variables
Backend .env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id

Frontend .env
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_API_URL=http://localhost:5000

📦 Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/yourusername/google-auth-mern.git
cd google-auth-mern

2️⃣ Backend Setup
cd backend
npm install
npm run dev

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

🔄 Authentication Flow

User clicks Sign in with Google

Google returns an ID Token

Token is sent to backend

Backend verifies token with Google

User is created/fetched from MongoDB

JWT is generated and sent to frontend

User stays logged in using JWT

🧪 API Endpoints
Google Login
POST /api/auth/google

Request Body

{
"token": "google_id_token"
}

Response

{
"token": "jwt_token",
"user": {
"name": "User Name",
"email": "user@gmail.com",
"avatar": "image_url"
}
}

🔒 Protected Routes

JWT stored in localStorage

Token sent via Authorization header

Authorization: Bearer <token>

🚪 Logout

Remove JWT from localStorage

Clear user context

Redirect to login page

🧠 Common Issues

❌ Invalid Google Client ID → Check .env

❌ CORS Error → Enable CORS in backend

❌ Token verification failed → Ensure same Client ID in frontend & backend

📌 Future Enhancements

Refresh tokens

Role-based authentication

Profile update

Email/password login support

👨‍💻 Author

ap s
MERN Stack Developer

📜 License

This project is licensed under the MIT License.
