let mongoose=require("mongoose");
var Schema=new mongoose.Schema(
        {
            "username": {
              "type": "String"
            },
            "Regulation": {
              "type": "String"
            },
            "semester": {
              "type": "String"
            },
            "Department": {
              "type": "String"
            },
            "Fees": {
              "type": "Number"
            },
            "subjects": {
              "type": [{
                "sub_code": {
                    "type": "String"
                  },
                  "sub_name": {
                    "type": "String"
                  },
                  "date": {
                    "type": "String"
                  },
                  _id : false 
                } 
              ]
            }
          },
      {collection:"Exam Fees"}
);
let examfees=mongoose.model("ExamFees",Schema,"Exam Fees");
module.exports=examfees;