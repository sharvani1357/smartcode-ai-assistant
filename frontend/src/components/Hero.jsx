import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AssistantCard from "./AssistantCard";

function Hero() {

  const navigate = useNavigate();

  const handleLaunch = () => {

    const loggedIn =
      localStorage.getItem("loggedIn");

    if (loggedIn) {

      navigate("/welcome");

    } else {

      navigate("/login");

    }
  };

  return (
    <div className="hero">

      <div className="hero-left">

        <motion.h1
          whileHover={{
            scale: 1.05,
            y: -5
          }}
        >
          SMARTCODE AI
        </motion.h1>

        <h3>
          Your Personal AI Coding Engineer
        </h3>

        <p>
          Build software faster with an AI-powered
          coding assistant. Generate code,
          debug applications, learn concepts,
          and accelerate development using a
          fine-tuned coding LLM.
        </p>

        <div className="hero-buttons">

          <button
            className="start-btn"
            onClick={handleLaunch}
          >
            Launch Workspace
          </button>

          <button
            className="learn-btn"
            onClick={() => navigate("/features")}
          >
            View Features
          </button>

        </div>

      </div>

      <div className="hero-right">

        <AssistantCard />

      </div>

    </div>
  );
}

export default Hero;