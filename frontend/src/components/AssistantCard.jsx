import { TypeAnimation } from "react-type-animation";

function AssistantCard() {
  return (
    <div className="assistant-card">

      <div className="status">
        🟢 Active
      </div>

      <div className="bot-image">
        🤖
      </div>

      <h2>SmartCode Assistant</h2>

      <TypeAnimation
        sequence={[
            "SmartCode AI Online",
                2000,
            "Ready to generate production code.",
                2000,
            "Ready to solve complex problems.",
                2000,
            "Ready to assist your development workflow.",
                2000
]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />

      <div className="features">
  <p>⚡ Code Generation</p>
  <p>🔍 Intelligent Debugging</p>
  <p>📚 Technical Explanations</p>
  <p>🚀 Project Acceleration</p>
</div>

    </div>
  );
}

export default AssistantCard;