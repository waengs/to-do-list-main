import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

export const Landing = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <h1 className="display-4 fw-bold mb-4">Welcome to Your To-Do App</h1>
      <p className="lead mb-4">
        {user ? "You're already signed in!" : "Sign up or log in to use the To-Do List!"}
      </p>

      {!user && (
        <div className="d-flex gap-3">
          <button onClick={() => navigate("/signup")} className="btn btn-success btn-lg shadow">
            Sign Up
          </button>

          <button onClick={() => navigate("/login")} className="btn btn-outline-primary btn-lg shadow">
            Log In
          </button>
        </div>
      )}

      {user && (
        <button onClick={() => navigate("/todo")} className="btn btn-primary btn-lg shadow mt-3">
          Go to To-Do List
        </button>
      )}
    </div>
  );
};