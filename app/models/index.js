const mongoose=require("mongoose");
mongoose.Promise=global.Promise;
const db={};
db.mongoose=mongoose;
db.users=require("./user.js");
db.admins=require("../models/admin");
module.exports=db;