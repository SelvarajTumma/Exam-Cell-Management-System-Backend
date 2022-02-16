var mongoose=require("mongoose");
var Schema=mongoose.Schema(
    {

        "RollNo": {
            "type": "String"
          },
          "Regulation": {
            "type": "String"
          },
          "Dept": {
            "type": "String"
          },
          "semester": {
            "type": "String"
          },
          "subjects": {
            "type": [
                {
                    "sub_code": {
                      "type": "String"
                    },
                    "sub_name": {
                      "type": "String"
                    },
                    "date": {
                      "type": "String"
                    },
                    "marks": {
                      "type": "String"
                    },
                    _id : false 
                }
            ]
          }
      }

,{collection:"Marks"}
);
var marks=mongoose.model("Marks",Schema,"Marks")
module.exports=marks;