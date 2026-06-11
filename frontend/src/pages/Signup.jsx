import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {

    if (
      !name ||
      !email ||
      !password
    ) {
      return;
    }

    localStorage.setItem(
      "smartcode_user",
      JSON.stringify({
        name,
        email,
        password
      })
    );

    navigate("/login");
  };

  return (
    <div className="auth-container">

      <div className="auth-left">

        <h1>SMARTCODE AI</h1>

        <h2>Create Account</h2>

        <p className="auth-subtitle">
          Join SmartCode and start building
          software with AI.
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="auth-btn"
          onClick={handleSignup}
        >
          Create Account
        </button>

        <p className="auth-link">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

        <p className="auth-link">
          <Link to="/">
            ← Back To Home
          </Link>
        </p>

      </div>

      <div className="auth-right">

        <div className="assistant-glass">

          <div className="ai-avatar">
            🤖
          </div>

          <h2>
            SmartCode Assistant
          </h2>

          <p>
            Build. Learn. Accelerate.
          </p>

          <div className="assistant-items">

            <p>⚡ AI Powered Coding</p>

            <p>🤖 Fine Tuned LLM</p>

            <p>🚀 Project Acceleration</p>

            <p>📚 Smart Learning</p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Signup;