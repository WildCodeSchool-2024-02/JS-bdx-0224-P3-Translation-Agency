import "../styles/Profile.scss";
import avatarImg from "../assets/images/profile.jpg";

function ProfileCard() {
  const user = {
    prenom: "John",
    nom: "Doe",
    email: "john.doe@example.com",
    phone: "+123456789",
    address: "123 Main St, Anytown, USA",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    avatar: "https://via.placeholder.com/90", // Placeholder avatar image
  };

  return (
    <div className="App">
      <div className="profile-card">
        <img
          src={avatarImg}
          alt={`${user.prenom} ${user.nom}`}
          className="avatar"
        />
        <div className="profile-info">
          <h2>
            {user.prenom} {user.nom}
          </h2>
          <h4 className="email">{user.email}</h4>
          <h4 className="phone">{user.phone}</h4>
          <h4 className="address">{user.address}</h4>
          <h4 className="bio">{user.bio}</h4>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
