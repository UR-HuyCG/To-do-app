# 🧭 Hiểu Rõ `this` và Arrow Function Trong JavaScript

## 🧩 1. `this` là gì?
`this` là **một biến đặc biệt trong JavaScript**, đại diện cho **đối tượng (object) đang gọi hàm**.

Nói cách khác:  
👉 `this` cho bạn biết “**ai đang gọi hàm này**”.

### 💡 Ví dụ cơ bản:

          ```js
          const person = {
            name: "Tú",
            sayHi: function() {
              console.log("Hi, I'm " + this.name);
            }
          };

          person.sayHi(); // 👉 "Hi, I'm Tú"
Ở đây this = person vì hàm được gọi bởi person.

⚙️ 2. this thay đổi tuỳ cách gọi hàm
Cách gọi	this trỏ tới cái gì	Ví dụ
Gọi trong object	Chính object đó	person.sayHi() → this = person
Gọi bình thường	undefined (hoặc window nếu không strict mode)	sayHi()
Trong constructor (new)	Object mới được tạo ra	new User()
Trong event DOM	Element kích hoạt event	button.onclick = function() { console.log(this) }

🧠 3. Arrow function là gì?
Arrow function (() => {}) là cú pháp viết ngắn gọn của function thường,
và nó KHÔNG có this riêng.

🔸 Ví dụ cú pháp cơ bản:
          js
          Sao chép mã
          // Function thường
          function sum(a, b) {
            return a + b;
          }

          // Arrow function
          const sum = (a, b) => a + b;

⚡ 4. Sự khác biệt lớn nhất: this
➤ Function thường có this riêng:
          js
          const person = {
            name: "Tú",
            normal: function() {
              console.log(this.name); // ✅ this = person
            }
          };

          person.normal(); // Tú
➤ Arrow function mượn this bên ngoài:
          js
          const person = {
            name: "Tú",
            arrow: () => {
              console.log(this.name); // ❌ this = undefined (vì lấy this ở ngoài toàn cục)
            }
          };

          person.arrow(); // undefined
🧩 5. Arrow function hữu ích khi dùng trong callback
Một số hàm callback (ví dụ setTimeout, map, forEach, then) thường làm mất this.
Arrow function giữ nguyên this bên ngoài nên tránh được lỗi này.

            js
            const person = {
              name: "Tú",
              sayLater: function() {
                setTimeout(function() {
                  console.log("Hi " + this.name); // ❌ undefined
                }, 1000);
              },
              sayLaterArrow: function() {
                setTimeout(() => {
                  console.log("Hi " + this.name); // ✅ "Hi Tú"
                }, 1000);
              }
            };

person.sayLater();
person.sayLaterArrow();
🧠 6. Khi nào nên và không nên dùng arrow function
Tình huống	Dùng Arrow Function	Giải thích
Callback, Promise, map/filter	✅ Nên dùng	Không cần this, ngắn gọn hơn
Hàm trong object cần this	❌ Không nên	Mất this của object
Constructor (dùng new)	❌ Không dùng được	Arrow function không có this riêng
Sự kiện DOM (onclick, ...)	⚠️ Cẩn thận	this có thể bị sai nếu dùng arrow

🧰 7. Cách viết ngắn gọn hơn với arrow function
              js
              // Nhiều tham số + nhiều dòng lệnh
              const sum = (a, b) => {
                console.log(a, b);
                return a + b;
              };

              // Một tham số
              const square = x => x * x;

              // Không tham số
              const hello = () => console.log("Hello");
✅ 8. Tóm tắt ngắn gọn
So sánh	Function thường	Arrow function
Có this riêng	✅ Có	❌ Không
this trỏ tới	Object gọi hàm	Nơi được định nghĩa
Có arguments	✅ Có	❌ Không
Dùng làm constructor	✅ Được	❌ Không được
Viết ngắn gọn	❌ Dài hơn	✅ Ngắn gọn hơn
Thích hợp cho	Object method, class	Callback, async, promise

📘 9. Ghi nhớ nhanh
this = “Ai gọi tôi?”

Arrow function không quan tâm “ai gọi”, nó chỉ dùng this của nơi nó sinh ra.

💬 Ví dụ tổng hợp
js
Sao chép mã
const user = {
  name: "Huy",
  show1: function() {
    console.log("show1:", this.name); // ✅ Huy
  },
  show2: () => {
    console.log("show2:", this.name); // ❌ undefined
  },
  show3: function() {
    setTimeout(function() {
      console.log("show3:", this.name); // ❌ undefined
    }, 1000);
  },
  show4: function() {
    setTimeout(() => {
      console.log("show4:", this.name); // ✅ Huy
    }, 1000);
  }
};

user.show1();
user.show2();
user.show3();
user.show4();

🏁 Kết luận
Dùng function thường khi bạn cần this trỏ đến object.

Dùng arrow function khi bạn cần callback gọn gàng và giữ nguyên this.

Cả hai đều là function, nhưng “tính cách” khác nhau:

Function thường: linh hoạt, có this, có arguments.

Arrow function: ngắn gọn, không có this, không có arguments.


# cấu trúc 1 hàm trong js
function sayHello() {
  console.log("Xin chào!");
}

