const mongoose=require("mongoose");
const db={};
db.mongoose=mongoose;
db.users=require("./user.js");
db.admins=require("./admin.js");
module.exports=db;