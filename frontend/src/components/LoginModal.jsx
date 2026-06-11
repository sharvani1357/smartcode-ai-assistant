import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginModal({ onClose, onSwitch }) {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = () => {

    const user = JSON.parse(
      localStorage.getItem("smartcode_user")
    );

    if(
      user &&
      user.email === email &&
      user.password === password
    ){

      localStorage.setItem(
        "loggedIn",
        "true"
      );

      navigate("/welcome");

    }else{

      alert("Invalid Credentials");

    }

  };

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>Login</h2>

        <input
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <p
          className="switch-link"
          onClick={onSwitch}
        >
          Create New Account
        </p>

        <button onClick={onClose}>
          Close
        </button>

      </div>

    </div>
  );
}

export default LoginModal;