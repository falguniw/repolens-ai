# RepoLens AI 🔍

RepoLens AI is a full-stack code review platform designed to help developers identify common problems in their source code. Instead of manually checking code for simple issues, users can submit their code through a web-based dashboard and receive an automated review highlighting security, code-quality, and maintainability concerns.

The project is built using React for the frontend and Node.js with Express for the backend. The frontend communicates with the backend through a REST API, while MongoDB Atlas is used for database connectivity and future data persistence.

## How It Works

Users enter their source code in the RepoLens AI dashboard and click **Analyze Code**. The React frontend sends the code to the Express backend, where it is checked for predefined issues. The detected problems are categorized by type and severity and then returned to the frontend, where they are displayed in an easy-to-read review panel.

```text
User
  ↓
React Frontend
  ↓
Express REST API
  ↓
Code Analysis
  ↓
Review Results
  ↓
React Dashboard
```

# Features
Interactive code review dashboard
Automated source-code analysis
Detection of common security issues
Detection of code-quality issues
Maintainability checks
Severity-based issue classification
REST API for code analysis
MongoDB Atlas integration
Environment-based database configuration
Tech Stack
Frontend: React, Vite, JavaScript, CSS
Backend: Node.js, Express.js
Database: MongoDB Atlas, Mongoose
Tools: Git, GitHub, VS Code

# How to Run
1. Clone the Repository
   ```text
git clone https://github.com/falguniw/repolens-ai.git
cd repolens-ai
```
3. Start the Backend
```text
cd backend
npm install
```

Create a .env file inside the backend folder:
```text
MONGODB_URI=your_mongodb_connection_string
```

Start the server:
```text
node server.js
```

The backend runs on:

http://localhost:5000
3. Start the Frontend

Open a new terminal:
```text
cd frontend
npm install
npm run dev
```

Open the local URL provided by Vite, usually:

http://localhost:5173

Current Status

RepoLens AI is currently a working prototype focused on the core full-stack code-review workflow. The current version provides basic automated code analysis and establishes the foundation for more advanced static analysis and AI-assisted code review.




