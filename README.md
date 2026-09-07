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





