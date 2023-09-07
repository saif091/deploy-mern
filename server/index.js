import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import TodoModel from './model/Todo.js'

const app = express();
const mongo_uri = 'mongodb+srv://saifmalik7979:saif@cluster0.jdlx7tz.mongodb.net/?retryWrites=true&w=majority';
const port = 4000;
app.use(cors({
    origin:["https://mern-todo-lwhq.vercel.app"],
    methods:["POST","GET"],
    credentials:true
}))
app.use(express.json());
app.get('/',(req,res)=>{
    TodoModel.find()
    .then(todos=>res.json(todos))
    .catch(err=>res.json(err))
})
app.put("/update/:id",(req,res)=>{
    const id = req.params.id;
    TodoModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        discription:req.body.discription
    }).then(todo=>res.json(todo))
    .catch(err=>res.json(err))
})
app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id;
    TodoModel.findByIdAndDelete({_id:id})
    .then(response=>res.json(response))
    .catch(err=>res.json(err))
})
app.post('/create',(req,res)=>{
    TodoModel.create(req.body)
    .then(todo=>res.json(todo))
    .catch(err=>res.json(err))
})
// app.use(express.urlencoded({extended:true}))
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
    try{
        mongoose.connect(mongo_uri)
        console.log("database connected")
    }catch(e){
        console.log(e)
        console.log("unable to connect to database")
    }
})
dotenv.config();


