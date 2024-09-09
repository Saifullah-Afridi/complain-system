import logo from "../../images/logo.jpg";
import { IoIosNotifications } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const UserNavbar = ({ role }) => {
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
    <div className="user-navbar">
      <div>
        <Link to="/user_dashboard">dashboard</Link>
        <Link to="/user_complaints">User Complaints</Link>
        <Link to="/user_add_complaint">Add Complaint</Link>
        <Link to="/user_profile">Profile</Link>
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
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserNavbar;
