import { useState } from "react";

function SignupModal({ onClose, onSwitch }) {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSignup = () => {

    const user = {
      name,
      email,
      password
    };

    localStorage.setItem(
      "smartcode_user",
      JSON.stringify(user)
    );

    alert("Signup Successful!");

    onSwitch();
  };

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>Create Account</h2>

        <input
          placeholder="Name"
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={handleSignup}>
          Sign Up
        </button>

        <p
          className="switch-link"
          onClick={onSwitch}
        >
          Already have an account?
        </p>

        <button onClick={onClose}>
          Close
        </button>

      </div>

    </div>
  );
}

export default SignupModal;