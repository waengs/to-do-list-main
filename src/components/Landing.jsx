import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <h1 className="display-4 fw-bold mb-4">Welcome to Your To-Do App</h1>
      <button 
        onClick={() => navigate("/todo")} 
        className="btn btn-primary btn-lg shadow"
      >
        Go to To-Do List
      </button>
    </div>
  );
};
