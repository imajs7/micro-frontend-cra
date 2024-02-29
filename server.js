const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 5001; // Use a different port from your React app

// Apply CORS for all responses
app.use(cors());

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, "build")));

// Start the server
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
