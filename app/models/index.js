const mongoose=require("mongoose");
const db={};
db.mongoose=mongoose;
db.users=require("./user.js");
db.admins=require("./admin.js");
db.studData=require("./student-data");
module.exports=db;