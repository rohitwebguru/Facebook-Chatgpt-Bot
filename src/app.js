import express from "express";
import webhookRoute from "./routes/webhook.js";

import { config as env } from "dotenv";
env();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


/**
 * Logger Middleware
 *  
 */ 
// app.use((req, res, next) => {
//   console.log(`Path ${req.path} with Method ${req.method}`);
//   next();
// });


// Test Api
app.get("/", async (req, res) => {
  res.send("Api Working")
});

app.use("/webhook", webhookRoute);

// Start Server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
