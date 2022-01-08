var mongoose=require("mongoose");
var timetable_schema=mongoose.Schema(
    {
      "Dept": {
        "type": "String"
      },
      "Regulation": {
        "type": "String"
      },
      "Semester": {
        "type": "String"
      },
        "year": {
          "type": "String"
        },
        "month": {
          "type": [
            "String"
          ]
        },
        "subjects": {
          "subjectsArray": {
            "type":
            [
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
                _id : false 
              } 
            ]
          }    
        }
      }

,{collection:"Timetable"}
);
var timetable=mongoose.model("timetable",timetable_schema,"Timetable")
module.exports=timetable;