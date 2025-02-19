import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateComplain from "./Components/CreateComplain/CreateComplain";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ComplaintData from "./Components/Complaints/ComplaintData";
import UserData from "./Components/UserForm/UserData.jsx";
import UserRegistrationForm from "./Components/UserRegistration/UserRegistration.jsx";
import FeedbackList from "./Components/Feedbacks/FeedbackList.jsx";
import WorkerData from "./Components/Worker/WorkerData.jsx";
import WorkerRegistration from "./Components/Worker/WorkerRegistration.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import EditProfile from "./Components/Profile/EditProfile.jsx";
import HelpAndSupport from "./Components/Profile/HelpAndSupport.jsx";
import DisplayAndAccessibility from "./Components/Profile/DisplayAndAccessibility.jsx";
import UserDashboard from "./Components/UserDashboard/UserDashboard.jsx";
import UserComplaints from "./Components/UserComplaints/UserComplaints.jsx";
import LoginForm from "./Components/auth/Login.jsx";
import { useState } from "react";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard.jsx";
import UserNavbar from "./Components/UserNavbar/UserNavbar.jsx";

function App() {
  const [role, setRole] = useState(
    JSON.parse(localStorage.getItem("userRole")) || ""
  );
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<Navbar role={role} />}>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/complaints" element={<ComplaintData />} />
            <Route path="/registration" element={<UserRegistrationForm />} />
            <Route path="/users" element={<UserData />} />
            <Route path="/workers" element={<WorkerData />} />
            <Route path="/register_employee" element={<WorkerRegistration />} />
            <Route path="/add_complaint" element={<CreateComplain />} />
            <Route path="/feedbacks" element={<FeedbackList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit_profile" element={<EditProfile />} />
            <Route path="/help_and_support" element={<HelpAndSupport />} />
            <Route
              path="/display_and_accessibility"
              element={<DisplayAndAccessibility />}
            />
            <Route path="/admin_dashboard" element={<AdminDashboard />} />
          </Route>
          <Route element={<UserNavbar role={role} />}>
            <Route path="/feedbacks" element={<FeedbackList />} />
            <Route path="/user_add_complaint" element={<CreateComplain />} />

            <Route path="/edit_profile" element={<EditProfile />} />
            <Route path="/user_profile" element={<Profile />} />
            <Route path="/user_dashboard" element={<UserDashboard />} />
            <Route
              path="/user_complaints"
              element={<UserComplaints userId={10} />}
            />
          </Route>
          <Route path="/login" element={<LoginForm setRole={setRole} />} />
          <Route index element={<LoginForm />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
