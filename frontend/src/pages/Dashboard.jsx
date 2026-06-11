import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Dashboard.css";

function Dashboard() {

  const navigate = useNavigate();

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const outputRef = useRef(null);

  useEffect(() => {

    const loggedIn =
      localStorage.getItem("loggedIn");

    if (!loggedIn) {

      navigate("/login");

    }

  }, [navigate]);

  useEffect(() => {

    const savedHistory =
      JSON.parse(
        localStorage.getItem("promptHistory")
      ) || [];

    setHistory(savedHistory);

  }, []);

  const generateCode = async () => {

    if (!prompt.trim()) return;

    try {

      setLoading(true);

      const res = await axios.post(
        "http://127.0.0.1:8000/ask",
        {
          prompt: prompt
        }
      );

      setResponse(
        res.data.response
      );

      const updatedHistory = [
        prompt,
        ...history
      ].slice(0, 5);

      setHistory(updatedHistory);

      localStorage.setItem(
        "promptHistory",
        JSON.stringify(updatedHistory)
      );

      setTimeout(() => {

        outputRef.current?.scrollIntoView({
          behavior: "smooth"
        });

      }, 200);

    } catch (error) {

      console.error(error);

      setResponse(
        "Failed to connect to SmartCode API."
      );

    } finally {

      setLoading(false);

    }

  };

  const copyCode = () => {

    navigator.clipboard.writeText(
      response
    );

    alert("Code Copied!");

  };

  const downloadCode = () => {

    const element =
      document.createElement("a");

    const file =
      new Blob(
        [response],
        {
          type: "text/plain"
        }
      );

    element.href =
      URL.createObjectURL(file);

    element.download =
      "generated_code.txt";

    document.body.appendChild(
      element
    );

    element.click();

  };

  const logout = () => {

    localStorage.removeItem(
      "loggedIn"
    );

    navigate("/");

  };

  return (

    <div className="dashboard">

      {/* Sidebar */}

      <div className="sidebar">

        <h2 className="sidebar-logo">
          SmartCode AI
        </h2>

        <ul>

          <li>🏠 Dashboard</li>

          <li>💻 Code Generator</li>

          <li>📂 Saved Projects</li>

          <li>📊 Analytics</li>

          <li>⚙ Settings</li>

        </ul>

        <h3
          style={{
            marginTop: "30px",
            marginBottom: "15px"
          }}
        >
          Recent Prompts
        </h3>

        {
          history.map(
            (item, index) => (

              <li
                key={index}
                style={{
                  listStyle: "none",
                  marginBottom: "10px",
                  cursor: "pointer",
                  color: "#cbd5e1"
                }}
                onClick={() =>
                  setPrompt(item)
                }
              >
                {item}
              </li>

            )
          )
        }

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

      {/* Workspace */}

      <div className="workspace">

        <h1>
          Ask SmartCode
        </h1>

        <p className="workspace-subtitle">
          Generate production-ready code
          using your fine-tuned LLM.
        </p>

        <textarea
          value={prompt}
          onChange={(e) =>
            setPrompt(e.target.value)
          }
          placeholder="Example: Build a Python Binary Search Program..."
        />

        <button
          className="generate-btn"
          onClick={generateCode}
        >
          {
            loading
              ? "Generating..."
              : "Generate Code"
          }
        </button>

        <div
          className="output-box"
          ref={outputRef}
        >

          <h3>
            Generated Output
          </h3>

          <pre>
            {response}
          </pre>

          {
            response && (

              <>
                <button
                  className="copy-btn"
                  onClick={copyCode}
                >
                  Copy Code
                </button>

                <button
                  className="download-btn"
                  onClick={downloadCode}
                >
                  Download Code
                </button>
              </>
            )
          }

        </div>

      </div>

      {/* Assistant Panel */}

      <div className="assistant-panel">
        <div className="ai-avatar">
                🤖
        </div>

        <h3>
          SmartCode Assistant
        </h3>

        <div className="assistant-status">
          🟢 Active
        </div>

        <div className="assistant-info">

          <p>
            Model: TinyLlama
          </p>

          <p>
            Status: Online
          </p>

          <p>
            API: Connected
          </p>

        </div>

        <div className="assistant-tips">

          <h4>
            Capabilities
          </h4>

          <p>
            ⚡ Code Generation
          </p>

          <p>
            🛠 Intelligent Debugging
          </p>

          <p>
            📚 Technical Explanations
          </p>

          <p>
            🚀 Project Acceleration
          </p>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;