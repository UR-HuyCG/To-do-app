import express from 'express';
import tasksRoute from './routes/tasksRouters.js';
import dns from 'dns';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

const __dirname = path.resolve(); // Lấy đường dẫn thư mục gốc của dự án

dotenv.config();
dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express();
const PORT = process.env.PORT || 5001;

// app.use để đăng ký middleware

app.use(express.json()); // Middleware để parse JSON từ request body
app.use("/api/tasks",tasksRoute); // Khi có request đến /api/tasks, sẽ được xử lý bởi tasksRoute

if (process.env.NODE_ENV !== 'production') {
  app.use(cors({ origin: 'http://localhost:5173' })); // Chỉ cho phép truy cập từ localhost:5173 trong môi trường phát triển
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "../frontend/dist"))); // Express cho phép trình duyệt truy cập trực tiếp các file trong thư mục frontend/dist.

  app.get ('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  } ); // app.get() dùng để định nghĩa route xử lý HTTP GET request. Cú pháp là: app.get(path, callback);

  /* Khi React build production:
  npm run build
  nó tạo ra:

  frontend/build/

  hoặc với Vite:

  frontend/dist/

  bên trong chứa:

  index.html
  assets/

  ==> Backend Express cần phục vụ những file đó để người dùng mở website. 

  Bên trong Express làm gì?
  Khi có request: GET /logo.png

  middleware express.static('public') sẽ:

  Tìm file public/logo.png
  Nếu tìm thấy: → gửi file về trình duyệt
  Nếu không tìm thấy: → chuyển cho middleware tiếp theo

  (tương tự gọi next())

  */

};

connectDB().then (() => {
  app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
});
