import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}  from "react-router-dom";
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Shop from './pages/Shop';
import Course from './pages/Course';
import Student from './pages/student/Student';
import StdCourses from './pages/student/StdCourses';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login action={"Log-In"} />} />
        <Route path="/signup" element={<Login action={"Sign-Up"} />} />
        <Route path="/about" element={<NotFound />} />
        <Route path="/contact" element={<NotFound />} />
        <Route path="/student/:id" element={<Student />} />
        <Route path="/student/courses/:id" element={<StdCourses />} />
        <Route path="/student/certificates/:id" element={<NotFound />} />
        <Route path="/student/invoices/:id" element={<NotFound />} />
        <Route path="/course/:id" element={<Course />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
