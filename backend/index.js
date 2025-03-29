const express = require('express');
const zod = require('zod')
const {createTodo, updateTodo} = require('./types')

const app = express();



app.use(express.json());

app.post('/todo', (req,res)=>{
    const check = createTodo.safeParse(req.body)
    if(check.success===false){
        res.status(501).json({msg:"Invalid Format"});
        return;
    }
    
    res.send('working!')
})

app.get('/todos', (req,res)=>{
    res.send('working!')
})

app.put('/completed',(req,res)=>{
    res.send('done');
} )

app.listen(3000)