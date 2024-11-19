import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";
import Services from "./components/Services";
import Login from "./components/Login";
import Rooms from "./components/Rooms";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      {/* Add ToastContainer here */}
      <ToastContainer />
    </Router>
  );
};

export default App;
