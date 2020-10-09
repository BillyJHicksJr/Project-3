const express = require('express')
const path = require("path");
const router = express.Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

router.post("/api/contact-form", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
