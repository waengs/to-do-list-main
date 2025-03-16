import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
    } catch (error) {
      alert("Error logging out: " + error.message);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3 shadow">
      <div className="container">
        {/* Logo or Brand Name */}
        <Link to="/" className="navbar-brand fw-bold">My App</Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/todo" className="nav-link">To-Do List</Link>
            </li>
            {user && (
              <>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">Profile</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger ms-3" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
