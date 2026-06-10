==============================
CÁC LỆNH NODE.JS & NPM
==============================
npm: down về node module
npx: dùng 1 lần rồi bỏ, down hẳn về máy thì nặng lắm
ví dụ npx create-vite
# Kiểm tra version
node -v
npm -v

# Khởi tạo project Node.js
npm init -y // tạo 1 tệp package.json

# Cài thư viện
npm install (cài tất cả thư viện dựa trên file json)
npm install <tên-thư-viện>
npm install express

# Cài thư viện chỉ dùng cho dev
npm install --save-dev nodemon

# Chạy file server.js trực tiếp bằng Node.js, KHÔNG cần đến package JSON
node server.js //

# Chạy script trong package.json
npm run dev  //thường cấu hình file dev để chạy nodemon server.js., tuy nhiên phải npm install nodemon -D (cài làm dev dependencis,   không cần khi deploy)
             //nodemon khác Node.js ở chỗ: mỗi khi bạn sửa file .js, server tự restart, 
             //không cần gõ lại lệnh->tiện hơn khi lập trình.
             //npm chạy "dev": "node server.js" trong package.json
ctrl c để tắt server
ctrl i để dùng ai

npm start //mở server bằng Node.js., muốn restart phải tắt rồi chạy lại
          //tiêu chuẩn chung khi làm dự án, dùng khi deploy
          // npm sẽ chạy start (là 1 script trong package JSON), có thể đổi start thành bất cứ lệnh nào

==============================
CÁC LỆNH LIÊN QUAN FULLSTACK
==============================

# Frontend (React, Vue, Angular)
npx create-react-app myapp
npm create vite@latest myapp
cd myapp
npm install
npm run dev

# Backend (Express)
npm install express
npm install mongoose      # thư viện MongoDB cho ndoe js
npm install cors dotenv   # CORS + biến môi trường
npm run dev
