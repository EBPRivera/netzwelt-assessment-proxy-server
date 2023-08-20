const express = require("express");
const needle = require("needle");

const router = express.Router();

API_BASE_URL =
  process.env.API_BASE_URL || "https://netzwelt-devtest.azurewebsites.net";

router.get("/all", async (req, res) => {
  needle.get(`${API_BASE_URL}/territories/all`, (err, response, body) => {
    if (err) {
      res.status(500).json(e);
    } else {
      res.status(200).json(body);
    }
  });
});

module.exports = router;
