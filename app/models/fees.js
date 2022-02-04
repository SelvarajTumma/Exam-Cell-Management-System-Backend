let mongoose=require("mongoose");
var Schema=new mongoose.Schema(
    {
        "number_Of_Subjects":{
            "type":Number
        },
        "fees":{
            type:Number
        }
      },
      {collection:"Fees"}
);
let fees=mongoose.model("fees",Schema,"Fees");
module.exports=fees;