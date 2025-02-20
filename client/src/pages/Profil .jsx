import "../styles/Profile.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import avatarImg from "../assets/images/profile.jpg";

// Move Item component out of ProfileCard
function Item({ name, role }) {
  if (role && role.charAt(0) !== "T") {
    return null;
  }
  return <h4 className="langue">{name}</h4>;
}

// Adding PropTypes validation for the Item component
Item.propTypes = {
  name: PropTypes.string.isRequired, // Validate that name is a string and required
  role: PropTypes.string.isRequired, // Validate that role is a string and required
};

function ProfileCard() {
  const profileUser = localStorage.getItem("Profile_User");
  const roleUser = localStorage.getItem("Role_User");
  const user = profileUser ? JSON.parse(profileUser) : null;

  const getComplatedRole = () => {
    if (roleUser !== null && roleUser !== undefined) {
      if (roleUser === "C") {
        return "Client";
      }
      if (roleUser === "T") {
        return "Traducteur";
      }
      return "Administrateur";
    }
    return "Unknown";
  };

  if (!user) {
    return (
      <div className="profile-container">
        <div className="profile-card">
          <img src={avatarImg} alt="Default Avatar" className="avatar" />
          <div className="profile-info">
            <h2>Your session is closed. Please log in again.</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src={avatarImg}
          alt={`${user.firstName} ${user.lastName}`}
          className="avatar"
        />
        <div className="profile-info">
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <h4 className="email">{user.Email}</h4>
          <h4 className="phone">Phone Number: {user.phoneNumber}</h4>
          <h4 className="role">{getComplatedRole()}</h4>
          {/* Pass data as props to Item component */}
          <Item name={user.Language} role={roleUser} />
          <Link to="/modifProfile" className="edit-link">
            Edit My Data
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
