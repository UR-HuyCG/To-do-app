==============================
LỆNH CƠ BẢN TRONG TERMINAL
==============================

# Xem đường dẫn thư mục hiện tại (Print Working Directory)
pwd

# Liệt kê file/thư mục trong thư mục hiện tại
ls
ls -a        # kèm cả file ẩn (vd: .git, .env)

# Di chuyển vào thư mục
cd <tên-thư-mục>
cd.. lùi về 1 bước


# Tạo thư mục mới
mkdir <tên-thư-mục> #make directory

# Tạo file rỗng
touch <tên-file>

# Xóa file
rm <tên-file>
rm -f <tên-file>    # ép buộc, không hỏi lại  f=force

# Xóa thư mục
rm -r <tên-thư-mục>
rm -rf <tên-thư-mục>   # ép buộc + thư mục có chứa file

# Đổi tên / di chuyển file hoặc thư mục
mv <tên-cũ> <tên-mới>

# Copy file
cp <file-nguồn> <file-đích>
cp -r <thư-mục-nguồn> <thư-mục-đích>   # copy cả thư mục

# Xem nội dung file
cat <tên-file>

# Dọn màn hình
clear

# Thoát terminal
exit
