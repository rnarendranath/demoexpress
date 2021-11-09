const mongoose = require('mongoose');
const ConnectDB = async ()=>{
    await mongoose.connect("mongodb+srv://naren1:password@cluster0.0p7hn.mongodb.net/mydb?retryWrites=true&w=majority");
};
module.exports=ConnectDB;