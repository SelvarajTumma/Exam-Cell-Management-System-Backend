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
      {collection:"users"}
);
let user=mongoose.model("user",Schema,"users");
module.exports=user;