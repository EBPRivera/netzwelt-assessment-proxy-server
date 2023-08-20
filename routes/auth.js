const express = require("express");
const needle = require("needle");

const router = express.Router();

const API_BASE_URL =
  process.env.API_BASE_URL || "https://netzwelt-devtest.azurewebsites.net";

const options = {
  compressed: true,
  accept: "application/json",
  content_type: "application/json",
};

router.post("/signin", async (req, res) => {
  needle.post(
    `${API_BASE_URL}/account/signin`,
    req.body,
    options,
    (err, response, body) => {
      if (err) {
        res.status(500).json({ e });
      } else {
        res.status(200).json(body);
      }
    }
  );
});

module.exports = router;
