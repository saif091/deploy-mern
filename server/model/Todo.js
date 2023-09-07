import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const TodoModel = mongoose.model("todos",TodoSchema) 
export default TodoModel