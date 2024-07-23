import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.scss";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    return Email + Password;
    // dispatch(loginUser({email:Email,password:Password}, navigate))
  };

  return (
    <div id="login">
      <form className="form_login" onSubmit={onSubmit}>
        <h2 className="login-title">Login</h2>
        <label htmlFor="email">Email</label>
        <input
          className="input_register"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          id="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          className="input_register"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          id="password"
          required
        />
        <button className="btnlogin" type="submit">
          Login
        </button>
        <p className="signup-link">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
