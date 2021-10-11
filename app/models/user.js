mongoose=require("mongoose");
var Schema=new mongoose.Schema(
    {
        "username": {
          "type": "String",
          required:true
          //index:{unique:true}
          //ref:rno
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