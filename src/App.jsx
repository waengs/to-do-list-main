import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";
import { Profile } from "./components/Profile";
import { TodoWrapper } from "./components/TodoWrapper";
import { NavBar } from "./components/Navbar"; // ✅ Import the NavBar
import "./App.css";


function App() {
  return (
    <Router>
      <NavBar /> {/* ✅ Now it should work */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/todo" element={<TodoWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;