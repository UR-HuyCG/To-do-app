# 🧠 JS Backend Note -- Cho người biết C++

## ⚙️ 1️⃣ Khai báo biến

``` js
let x = 10;      // có thể đổi
const y = 5;     // hằng 
// không có kiểu dữ liệu tĩnh (int, float, string...)
```

## 🔁 2️⃣ Vòng lặp & điều kiện

``` js
for (let i = 0; i < 5; i++) console.log(i);
if (a === b) { ... } // dùng 3 dấu === để so sánh cả giá trị và kiểu
```
> ⚠️ `===` là so sánh chuẩn trong JS.

## 📦 3️⃣ Object (tương đương struct/map)

``` js
const user = { name: "Huy", age: 20 };
console.log(user.name);
user.city = "Hà Nội";
```

## 🔄 4️⃣ Arrow function

``` js
const add = (a, b) => a + b;
```

## 🧩 5️⃣ import / export

``` js
import express from "express";
export default myFunc;
```

> Cần `"type": "module"` trong `package.json` để dùng cú pháp này.

## ⏳ 6️⃣ async / await

``` js
const getData = async () => {
  const data = await fetch("https://api.example.com");
  console.log("Xong");
};
```

## 💾 7️⃣ File system (fs)

``` js
import fs from "fs";
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});
```

## 🌐 8️⃣ Express (framework cho nodejs) cơ bản

``` js
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => console.log("Server chạy ở cổng 3000"));
```

## 🧱 9️⃣ JSON

``` js
const user = { name: "Tú", age: 21 };
console.log(JSON.stringify(user)); // Object → JSON
console.log(JSON.parse('{"a":1}')); // JSON → Object
```

## 🧮 🔟 Khác biệt dễ quên

  JS                       C++                    Ghi nhớ
  ------------------------ ---------------------- ---------------------------
  `console.log()`          `cout <<`              In ra console
  Không có kiểu tĩnh       Có `int`, `float`      JS tự suy kiểu
  `===`                    `==`                   So sánh cả kiểu & giá trị
  `undefined` / `null`     `nullptr` / không có   Biểu diễn giá trị rỗng
  Không có con trỏ         Có pointer             JS quản lý bộ nhớ tự động
  `this` (arrow) cố định   `this` thay đổi        Cẩn thận khi dùng class

## ⚡ Bonus module phổ biến

  Tên              Mục đích
  ---------------- --------------------
  `express`        Web server
  `fs`             File system
  `dotenv`         Biến môi trường
  `nodemon`        Auto reload server
  `mongoose`       MongoDB
  `jsonwebtoken`   JWT Auth
  `bcrypt`         Hash mật khẩu

