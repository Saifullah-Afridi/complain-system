import React, { useEffect, useState } from "react";

import logo from "../../images/logo.jpg";
import "./Navbar.css";
import { IoIosNotifications } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Navbar = ({ role }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openNotifi, setOpenNotifi] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setOpenNotifi(false);
  };
  const dropdownNotification = () => {
    setOpenNotifi(!openNotifi);
    setIsOpen(false);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    navigate("login");
  };
  useEffect(() => {
    if (!role) {
      navigate("login");
    }
    if (user.role === "User") {
      navigate("/login");
    }
  }, [role]);
  return (
    <div className="nav_wrapper">
      <div className="nav_container">
        <div className="nav_log">
          <img src={logo} alt="" />

          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <span>CMS</span>
          </Link>
        </div>
        {/* end of the navbar logo */}
        <div className="nav_menu">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <span> Dashboard</span>
          </Link>

          <Link to="/users" style={{ textDecoration: "none", color: "black" }}>
            <span>Users</span>
          </Link>
          <Link
            to="/workers"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>Employee</span>
          </Link>
          <Link
            to="/complaints"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>Complaints</span>
          </Link>
          <Link
            to="/registration"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>Registration</span>
          </Link>
          <Link
            to="/feedbacks"
            style={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            <span>Feedbacks</span>
          </Link>

          <span onClick={dropdownNotification}>
            <IoIosNotifications
              style={{
                width: 25,
                height: 25,
                alignItems: "center",
                marginTop: 10,
              }}
            />

            {openNotifi && (
              <div className="dropdown-notification">
                <div className="notification_head">
                  <div className="notification_title">
                    <h3>street light problem</h3>
                  </div>
                  {/* end of the notification title */}
                  <div className="notification_time">
                    <p>12/03/2024</p>
                    <p>10.56pm</p>
                  </div>
                  {/* end of the notification time and date  */}
                </div>
                {/* end of notification head */}
                <div className="notification_description">
                  <p>
                    this is the some general description about the notification
                    side to learn that is it work properly
                  </p>
                </div>
                {/* end of description */}
              </div>
            )}
          </span>
        </div>
        {/* end of the navbar menu */}
        <div className="profile">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
          />
          <span
            onClick={toggleDropdown}
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            username{" "}
            <FaChevronDown
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "5px",
                fontWeight: "100",
              }}
            />
          </span>
          {isOpen && (
            <div className="dropdown-menu">
              <div className="profile-info">
                <Link
                  to="/profile"
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  <img
                    onClick={handleClick}
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt="Profile"
                    className="profile-img-large"
                  />
                </Link>

                <Link
                  to="/profile"
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  <span onClick={handleClick}>username</span>
                </Link>
              </div>
              <ul>
                <Link
                  to="/edit_profile"
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  <li onClick={handleClick}>Edit Profile</li>
                </Link>
                <Link
                  to="/help_and_support"
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  <li onClick={handleClick}>Help & Support</li>
                </Link>
                {/* <Link
                  to="/display_and_Accessibility"
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  <li onClick={handleClick}>Display & Accessibility</li>
                </Link> */}

                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  <li onClick={handleLogout}>Logout</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
