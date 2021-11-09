const mongoose = require('mongoose');
const ConnectDB = async ()=>{
    await mongoose.connect("mongodb+srv://naren:naren@cluster0.0p7hn.mongodb.net/mydb?retryWrites=true&w=majority");
};
module.exports=ConnectDB;