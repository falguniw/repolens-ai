const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "RepoLens AI backend is running"
    });
});

app.post("/analyze", (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({
            message: "No code provided"
        });
    }

    const issues = [];

    if (code.includes("console.log")) {
        issues.push({
            type: "Code Quality",
            severity: "low",
            message: "Avoid console.log in production code."
        });
    }

    if (code.includes("eval(")) {
        issues.push({
            type: "Security",
            severity: "high",
            message: "Avoid eval(). It can execute arbitrary code."
        });
    }

    if (code.includes("TODO")) {
        issues.push({
            type: "Maintainability",
            severity: "low",
            message: "TODO comment found. Consider completing the task."
        });
    }

    res.json({
        issues_found: issues.length,
        issues: issues
    });
});

const PORT = 5000;

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected");

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:5000`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error);
    });