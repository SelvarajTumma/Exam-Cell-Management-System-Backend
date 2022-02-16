let mongoose=require("mongoose");
var Schema=new mongoose.Schema(
    {
      
        "username": {
          "type": "String"
        },
        "Regulation": {
          "type": "String"
        },
        "Dept": {
          "type": "String"
        },
        "subjects": {
          "type": [
            "Mixed"
          ]
        }
      
      },
    {collection:"CollegeDetails"}
);
let collegeDetails=mongoose.model("CollegeDetails",Schema,"CollegeDetails");
module.exports=collegeDetails;