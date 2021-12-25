let mongoose=require("mongoose");
var Schema=new mongoose.Schema(
    {
        "Regulation": {
          "type": "String"
        },
        "Semester": {
          "type": "String"
        },
        "Dept": {
          "type": "String"
        },
        "Subjects": {
          "type": [
            "Mixed"
          ]
        }
    },
    {collection:"Subjects"}
);
let admin=mongoose.model("subject",Schema,"Subjects");
module.exports=admin;