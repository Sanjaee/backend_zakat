import { createServer } from "http";
import express from "express";
import cors from "cors";
import zakatRoutes from "./routes/zakatRoutes.js";
import bodyParser from "body-parser";
import adminRoutes from "./routes/adminRoutes.js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", zakatRoutes);
app.use("/api", adminRoutes);

const server = createServer(app);

server.listen(process.env.PORT || 3000, (err) => {
  if (err) throw err;
  console.log(`Server listening on port ${server.address().port}`);
});
