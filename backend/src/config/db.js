import mongoose from 'mongoose';

export const connectDB = async () => {
    // hàm bất đồng bộ phải dùng try catch 
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
        console.log("Kết nối thành công đến MongoDB");
    } catch (error) {
        console.error("Lỗi kết nối đến MongoDB:", error);
        process.exit(1); // thoát khỏi ứng dụng nếu không kết nối được
    }
}   