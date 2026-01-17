import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../services/firebase.js";
import axios from "axios";
import { useState, useEffect } from "react";

export default function GoogleLogin() {
  const [user, setUser] = useState(null);

  // 🔹 Check if user already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("userData");
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (err) {
        console.error("Failed to parse user data:", err);
      }
    }
  }, []);

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;

      const token = await firebaseUser.getIdToken();

      const res = await axios.post("http://localhost:5000/api/auth/google", {
        token,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userData", JSON.stringify(res.data.user));
      setUser(res.data.user); // 🔥 update UI
    } catch (err) {
      console.log(err);
    }
  };

  // 🔹 LOGOUT
  const logout = async () => {
    await signOut(auth); // Firebase logout
    localStorage.removeItem("token"); // Remove JWT
    setUser(null); // Reset UI
  };

  return (
    <>
      <style jsx>{`
        .login-container {
          min-height: 100vh;
          background: linear-gradient(
            135deg,
            #eef2ff 0%,
            #ffffff 50%,
            #fdf2f8 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          font-family:
            -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }
        .login-card {
          width: 100%;
          max-width: 420px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.5);
          position: relative;
          overflow: hidden;
        }
        .login-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #4f46e5, #ec4899);
        }
        .welcome-title {
          font-size: 2.25rem;
          font-weight: 800;
          background: linear-gradient(135deg, #1f2937, #4b5563);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .welcome-subtitle {
          color: #6b7280;
          font-size: 1.125rem;
          text-align: center;
          margin-bottom: 2rem;
        }
        .google-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          color: #374151;
          font-weight: 500;
          font-size: 0.875rem;
          height: 3rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
        }
        .google-btn:hover {
          background: #f9fafb;
          border-color: #d1d5db;
          box-shadow: 0 20px 35px -10px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }
        .profile-img {
          width: 6rem;
          height: 6rem;
          border-radius: 50%;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          border: 4px solid #ffffff;
          box-sizing: border-box;
        }
        .profile-container {
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .user-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          margin: 1rem 0 0.25rem 0;
        }
        .user-email {
          color: #6b7280;
          font-size: 0.875rem;
        }
        .logout-btn {
          width: 100%;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          font-weight: 500;
          padding: 0.75rem 1.5rem;
          border-radius: 16px;
          border: none;
          font-size: 0.875rem;
          height: 3rem;
          cursor: pointer;
          box-shadow: 0 10px 25px -5px rgba(239, 68, 68, 0.4);
          transition: all 0.3s ease;
        }
        .logout-btn:hover {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          box-shadow: 0 20px 35px -10px rgba(239, 68, 68, 0.5);
          transform: translateY(-2px);
        }
        .google-icon {
          width: 1.25rem;
          height: 1.25rem;
          fill: currentColor;
        }
        @media (max-width: 480px) {
          .login-card {
            padding: 2rem 1.5rem;
          }
          .welcome-title {
            font-size: 1.875rem;
          }
        }
      `}</style>

      <div className="login-container">
        <div className="login-card">
          {!user ? (
            <>
              <div className="welcome-title">Welcome Back</div>
              <p className="welcome-subtitle">
                Sign in with your Google account
              </p>
              <button onClick={loginWithGoogle} className="google-btn">
                <svg className="google-icon" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </button>
            </>
          ) : (
            <>
              <div className="profile-container">
                <img src={user.photo} alt="profile" className="profile-img" />
                <h2 className="user-name">Welcome back, {user.name}</h2>
                <p className="user-email">{user.email}</p>
              </div>
              <button onClick={logout} className="logout-btn">
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
