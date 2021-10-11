let mongoose=require("mongoose");
var Schema=new mongoose.Schema(
    {
        "username": {
          "type": "String",
          required:true,
          //index:{unique:true}
        },
        "password": {
          "type": "String",
          required:true
        }
      },
      {collection:"Admin"}
);
let admin=mongoose.model("admin",Schema,"Admin");
module.exports=admin;