const express = require('express');
const ConnectDB = require('./connection');
const User = require('./User');
const app = express();
app.use(express.json())

app.get('/select',async (req,res)=>{
    const data = await User.find();
    res.json(data);
});

app.post('/insert',async (req,res)=>{
    const data = await User.create(req.body);
    res.json(data);
});

app.put('/update/:id',async (req,res)=>{
    const data = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.json(data);
})

app.delete('/delete/:id',async (req,res)=>{
    const data = await User.findByIdAndDelete(req.params.id);
    res.json(data);
})

const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log("Server Started");
    ConnectDB()
    .then(()=>{
        console.log("DB Connection Established");
    })
    .catch(()=>{
        console.log("Connection Error");
    })
})