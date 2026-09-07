import { useState } from "react";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeCode = async () => {
    if (!code.trim()) {
      alert("Please enter some code first.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error(error);
      alert("Could not connect to the backend.");
    }

    setLoading(false);
  };

  return (
    <div className="app">

      <header className="navbar">
        <div className="logo">
          RepoLens <span>AI</span>
        </div>

        <div className="status">
          ● System Online
        </div>
      </header>

      <main className="container">

        <section className="hero">
          <h1>AI-Powered Code Review</h1>

          <p>
            Analyze your code for security issues, bugs and
            maintainability problems.
          </p>
        </section>

        <section className="review-section">

          <div className="editor-panel">

            <div className="panel-header">
              <span>Code Input</span>
              <span>JavaScript</span>
            </div>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="// Paste your code here..."
            />

            <button
              className="analyze-button"
              onClick={analyzeCode}
              disabled={loading}
            >
              {loading ? "Analyzing..." : "Analyze Code"}
            </button>

          </div>


          <div className="results-panel">

            <div className="panel-header">
              <span>Review Results</span>
            </div>

            {!results && (
              <div className="empty-state">
                <div className="empty-icon">⌘</div>

                <h3>No analysis yet</h3>

                <p>
                  Paste your code and click
                  <strong> Analyze Code </strong>
                  to begin.
                </p>
              </div>
            )}

            {results && (
              <div className="results">

                <div className="issue-count">
                  <strong>{results.issues_found}</strong>
                  <span>issues found</span>
                </div>

                {results.issues.length === 0 && (
                  <div className="success">
                    ✓ No issues detected
                  </div>
                )}

                {results.issues.map((issue, index) => (
                  <div
                    className={`issue ${issue.severity}`}
                    key={index}
                  >
                    <div className="issue-top">
                      <strong>{issue.type}</strong>

                      <span className="severity">
                        {issue.severity}
                      </span>
                    </div>

                    <p>{issue.message}</p>
                  </div>
                ))}

              </div>
            )}

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;