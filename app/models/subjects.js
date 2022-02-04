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
let subjects=mongoose.model("examFees",Schema,"Subjects");
module.exports=subjects;