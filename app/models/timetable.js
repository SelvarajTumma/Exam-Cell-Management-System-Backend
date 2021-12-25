var mongoose=require("mongoose");
var timetable_schema=mongoose.Schema(
    {
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
                  "type": "Date",
                  "min":"01-01-1998",
                  "max":"31-12-9999"
                }
              }   
            ]
          }    
        }
      }

,{collection:"Timetable"}
);
var timetable=mongoose.model("timetable",timetable_schema,"Timetable")
module.exports=timetable;