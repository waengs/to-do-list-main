import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./Landing";
import { Profile } from "./Profile";
import { TodoWrapper } from "./TodoWrapper";
import { NavBar } from "./NavBar"; // Import NavBar

function App() {
  return (
    <Router>
      <NavBar /> {/* Add the navigation bar */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/todo" element={<TodoWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;