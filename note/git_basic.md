==============================
CÁC LỆNH GIT CƠ BẢN (Git Bash)       tracked ->add -> commit -> push
==============================       dưới đây chỉ là vài lệnh cơ bản, có thể thao tác = source control

# Cấu hình Git lần đầu
git config --global user.name "Tên của bạn"
git config --global user.email "Email của bạn"

# Khởi tạo repo trong thư mục hiện tại
git init

# Clone repo từ GitHub
git clone <url>

# Kiểm tra trạng thái thay đổi file
git status

# Thêm file vào vùng stage
git add <file>
git add .          # thêm tất cả

# Stash - chưa muốn commit
git stash
# Xóa stash
git stash clear //xóa hết

# Commit thay đổi
git commit -m "Mô tả commit"

# Xem lịch sử commit
git log
git log --oneline  # ngắn gọn

# liên kết với remote repo
git remote add origin đường_link

# Đẩy code lên GitHub
git push origin <local-branch>:<remote-branch> 

# Kéo code mới nhất từ remote
git pull origin <local-branch>:<remote-branch> c

# Tạo nhánh mới và chuyển sang nhánh đó
git checkout -b feature/ten-nhanh
or cú_pháp_mới git switch -c feature/ten-nhanh


# Chuyển về main
git checkout main

# Gộp nhánh tại local
git merge feature/ten-nhanh

# Xem danh sách nhánh
git branch
git branch -a  # hiện cả local và remote

# Xóa nhánh tại local hub
git branch -d ten-nhanh

# Hay 👍, nếu bạn lỡ git add hoặc commit 1 file rồi mà muốn ngừng theo dõi (untrack) file đó trong Git, thì có mấy cách:
1. Nếu file mới chỉ git add mà chưa commit

👉 Dùng: git reset HEAD ten-file

→ Git sẽ bỏ file đó khỏi staging area (vùng chuẩn bị commit)

2. Nếu file đã commit rồi nhưng giờ muốn Git ngừng theo dõi

👉 Dùng:    git rm --cached ten-file
             git commit -m "Ngừng theo dõi file ten-file"

--cached = chỉ bỏ khỏi Git repo, không xóa file trên máy.
Sau đó nhớ commit lại để cập nhật thay đổi này:

3. Nếu muốn bỏ hẳn file đó khỏi repo và xóa luôn trên máy

👉 Dùng:
>>>git rm ten-file
>>>git commit -m "Xóa file ten-file"

4. Nếu muốn bỏ theo dõi nhiều file/thư mục (như node_modules/)

Thêm tên file/thư mục vào .gitignore.
Rồi chạy:   git rm -r --cached ten-thu-muc
            git commit -m "Bỏ theo dõi thư mục ten-thu-muc"
