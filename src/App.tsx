import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Aboutus from "./pages/aboutus/Aboutus";
import Dashboard from "./pages/dashboard/Dashboard";

// Components
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
