import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Aboutus from "./pages/aboutus/Aboutus";
import Dashboard from "./pages/dashboard/Dashboard";
import EditProfile from "./pages/editProfile/EditProfile";
import QuizGeneration from "./pages/quiz/QuizGeneration";

// Components
import Navbar from "./components/navbar/Navbar";

// Middlewares
import ProtectedRoute from "./middlewares/ProtectedRoute";
import RedirectIfAuthenticated from "./middlewares/RedirectIfAuthenticated";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
        <Route
          path="/signin"
          element={<RedirectIfAuthenticated element={<Signin />} />}
        />
        <Route
          path="/signup"
          element={<RedirectIfAuthenticated element={<Signup />} />}
        />
        <Route
          path="/edit-profile"
          element={<ProtectedRoute element={<EditProfile />} />}
        />
        <Route
          path="/quiz-generation"
          element={<ProtectedRoute element={<QuizGeneration />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
