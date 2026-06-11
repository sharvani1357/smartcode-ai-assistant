import { useNavigate } from "react-router-dom";

function Welcome() {

  const navigate = useNavigate();

  return (
    <div className="welcome-container">

      <div className="welcome-left">

        <h1>
          Welcome To SmartCode AI
        </h1>

        <p>
          Your AI Coding Assistant Is Ready.
        </p>

        <div className="welcome-features">

          <div>⚡ Generate Code</div>

          <div>🛠 Debug Applications</div>

          <div>📚 Explain Concepts</div>

          <div>🚀 Accelerate Development</div>

        </div>

        <button
          className="start-btn"
          onClick={() => navigate("/dashboard")}
        >
          Launch Workspace
        </button>

      </div>

      <div className="welcome-right">

        <div className="assistant-glass">
            <div className="ai-avatar">
  🤖
</div>

          <h2>
            SmartCode Assistant
          </h2>

          <p>
            Status: 🟢 Online
          </p>

          <p>
            Ready To Help You Build Software Faster.
          </p>

          <div className="assistant-items">

            <p>⚡ AI Code Generation</p>

            <p>🛠 Intelligent Debugging</p>

            <p>📚 Technical Explanations</p>

            <p>🚀 Project Acceleration</p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Welcome;