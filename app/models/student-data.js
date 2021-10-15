let mongoose=require("mongoose");
let schema=new mongoose.Schema(
    {
        "S_no": {
          "type": "String"
        },
        "S_name": {
          "type": "String"
        },
        "Regulation": {
          "type": "String"
        },
        "Dept": {
          "type": "String"
        },
        "phone-number": {
          "type": "Number"
        },
        "Address": {
          "type": [
            "Mixed"
          ]
        }
      },
      {collection:"Student_data"}
);
let stud_data=mongoose.model("student_data",schema,"Student_data");
module.exports=stud_data;