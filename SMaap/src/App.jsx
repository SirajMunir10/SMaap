import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Homee/Home";
import FAQ from "./components/FAQ/FAQ";
import AboutUs from "./components/AboutUs/AboutUs";
import SignUp from "./components/Signup/SignUp";
import Services from "./components/Servicess/Services";
import Login from "./components/Login/Login";
import Rooms from "./components/Rooms/Rooms";
import TermsCo from "./components/Terms&Co/Terms&Co";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Terms&Co" element={<TermsCo />} />
      </Routes>
      {/* Added ToastContainer here */}
      <ToastContainer />
    </Router>
  );
};

export default App;
