const express = require("express");
const cors = require("cors");
const zakatRoutes = require("./routes/zakatRoutes.js");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/adminRoutes.js");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(zakatRoutes);
app.use(adminRoutes);

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
