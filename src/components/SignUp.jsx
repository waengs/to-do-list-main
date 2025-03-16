import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User registered successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
            <h3 className="text-center mb-3">Sign Up</h3>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input 
                type="email" 
                className="form-control" 
                placeholder="Enter email" 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input 
                type="password" 
                className="form-control" 
                placeholder="Enter password" 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <button type="submit" className="btn btn-success w-100 mb-3">Sign Up</button>
            <p className="text-center">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
