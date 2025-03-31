const express = require('express');
const zod = require('zod');
const {createTodo, updateTodo} = require('./types');
const {Todo} = require('./db');
const app = express();
const cors = require('cors')


app.use(cors());
app.use(express.json());

app.post('/todo',async (req,res)=>{
    const check = createTodo.safeParse(req.body)
    if(!check.success){
        res.status(411).json({msg:"Invalid Format"});
        return;
    }
    const todo = await Todo.create({
        title:check.data.title,
        description:check.data.description,
        completed:false
    })
    if(todo){
        res.status(201).json({msg:"Todo Created", id: todo._id});
        return;
    }else{
        res.status(501).json({msg:"Creation failed"});
    }    
})

app.get('/todos',async (req,res)=>{
    const todos = await Todo.find();
    
    if(todos){
        res.status(201).json({todos:todos});
        return;
    }else{
        res.status(501).json({msg:"Request failed"});
    }
})

app.put('/completed', async (req,res)=>{
    const parsed = updateTodo.safeParse(req.body);
    if(!parsed.success){
        res.status(411).json({
            msg:"Wrong format"
        })
        return;
    }
    const todo = await Todo.findOneAndUpdate({_id:parsed.data.id},{completed:true});

    if(todo){
        res.status(201).json({msg:"Todo Updated", id: todo._id});
        return;
    }else{
        res.status(501).json({msg:"Updation failed"});
    }
} )

app.listen(3000);