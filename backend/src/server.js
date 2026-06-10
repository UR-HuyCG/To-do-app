import express from 'express';
import tasksRoute from './routes/tasksRouters.js';
import dns from 'dns';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
dns.setServers(['8.8.8.8', '8.8.4.4']);
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json()); // Middleware để parse JSON từ request body
app.use("/api/tasks",tasksRoute); // Khi có request đến /api/tasks, sẽ được xử lý bởi tasksRoute

connectDB().then (() => {
  app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
});
