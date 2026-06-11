import { useNavigate } from "react-router-dom";

function Features() {

  const navigate = useNavigate();

  const features = [
    {
      title: "AI Code Generation",
      desc: "Generate production-ready code instantly."
    },
    {
      title: "Multi Language Support",
      desc: "Python, Java, C++, JavaScript and more."
    },
    {
      title: "Intelligent Debugging",
      desc: "Find and fix bugs quickly."
    },
    {
      title: "Technical Explanations",
      desc: "Learn concepts with AI assistance."
    },
    {
      title: "Project Acceleration",
      desc: "Build software faster."
    },
    {
      title: "Fine Tuned Coding LLM",
      desc: "Custom TinyLlama coding model."
    }
  ];

  return (
    <div className="features-container">

      <h1>
        SMARTCODE FEATURES
      </h1>

      <p className="features-subtitle">
        Everything you need to code smarter,
        faster and more efficiently.
      </p>

      <div className="features-grid">

        {
          features.map(
            (feature,index) => (

              <div
                key={index}
                className="feature-card"
              >

                <h2>
                  {feature.title}
                </h2>

                <p>
                  {feature.desc}
                </p>

              </div>

            )
          )
        }

      </div>

      <button
        className="back-btn"
        onClick={() => navigate("/")}
      >
        Back To Home
      </button>

    </div>
  );
}

export default Features;