/* eslint-disable react/button-has-type */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.scss";

function Register() {
  const [newemail, setemail] = useState("");
  const [newname, setname] = useState("");
  const [newpassword, setpassword] = useState("");

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    return newemail + newname + newpassword;
  };

  return (
    <div className="backH">
      <form className="form_register" onSubmit={onSubmit}>
        <h1 className="form_title">Se connecter</h1>
        <input
          className="input_register"
          type="email"
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email"
          id="email"
          required
        />

        <input
          className="input_register"
          type="text"
          onChange={(e) => setname(e.target.value)}
          placeholder="Nom d'utilisateur"
          id="username"
          required
        />

        <input
          className="input_register"
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Mot de passe"
          id="password"
          required
        />

        <button type="submit" className="btn_register">
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default Register;
