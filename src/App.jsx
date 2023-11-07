import CourseDetails from "./Components/CourseDetails";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Courses from "./Components/Courses";
function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <NavBar />
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
