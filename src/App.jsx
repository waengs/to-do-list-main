import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";
import { Profile } from "./components/Profile";
import { TodoWrapper } from "./components/TodoWrapper";
import NavBar from "./components/Navbar";  // ✅ Correct for default export
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/todo" element={<PrivateRoute><TodoWrapper /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
