let mongoose=require("mongoose");
var Schema=new mongoose.Schema(
    {
        "logo": {
          "type": "String"
        },
        "college_name": {
          "type": "String"
        },
        "college_code": {
          "type": "Number"
        },
        "address": {
          "type": [
            "Mixed"
          ]
        },
        "phone": {
          "type": "String"
        },
        "website": {
          "type": "String"
        },
        "email": {
          "type": "String"
        }
      },
    {collection:"CollegeDetails"}
);
let collegeDetails=mongoose.model("CollegeDetails",Schema,"CollegeDetails");
module.exports=collegeDetails;