import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {

    const user = JSON.parse(
      localStorage.getItem("smartcode_user")
    );

    if (
      user &&
      user.email === email &&
      user.password === password
    ) {

      localStorage.setItem(
        "loggedIn",
        "true"
      );

      navigate("/welcome");

    } else {

      setError(
        "Invalid Email or Password"
      );

    }
  };

  return (
    <div className="auth-container">

      <div className="auth-left">

        <h1>SMARTCODE AI</h1>

        <h2>Welcome Back</h2>

        <p className="auth-subtitle">
          Login to continue your AI coding journey.
        </p>

        {error && (
          <div className="error-box">
            {error}
          </div>
        )}

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
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="auth-link">
          Don't have an account?{" "}
          <Link to="/signup">
            Sign Up
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
            Engineering Intelligence
            At Your Fingertips
          </p>

          <div className="assistant-items">

            <p>⚡ Generate Production Code</p>

            <p>🛠 Debug Applications</p>

            <p>📚 Explain Concepts</p>

            <p>🚀 Accelerate Development</p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;