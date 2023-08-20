const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();

// Enable cors
app.use(cors());

// parse requests of content type - application/json
app.use(express.json());

// Routes
const authRouter = require("./routes/auth");

// Routing
app.use("/account", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
