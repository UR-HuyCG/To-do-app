import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["active","completed"],
        default:"active"
    },
    completedAt:{
        type:Date,
        default:null
    }

},{
    timestamps:true, // tự động thêm createdAt và updatedAt
});

const Task = mongoose.model("Task",taskSchema); //truyền vào tên model và schema tương ứng, mongoose sẽ tự động tạo collection tên là "tasks" trong MongoDB (số nhiều của "Task")
export default Task;    