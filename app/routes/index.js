const router = require('express').Router();
const controller=require('../controllers/controller.js');
const { fees } = require('../models');
router.get("/hello",controller.hello);
let model=require("../models");
let Users=model.users;
let Admin=model.admins;
let studdata=model.studData;
let subjects=model.subjects;
let Timetable=model.timetable;
let Fees=model.fees;
let EXAMFEES=model.examfees;
let college=model.collegedatils;
router.post("/check",async (req,res)=>{
    credentials={username:req.body.username,password:req.body.password};
  //   for (let i=0;i<data.length;i++){
  //     const newUser=new Users({username:data[i].username,password:data[i].password});
  //     newUser.save(newUser).then(data=>{
  //         console.log(data);
  //     })
  //     .catch(err=>{
  //         res.status(500).send({messege:"Error occured"});
  //     });
  // }
    // for (let i=0;i<data.length;i++){
    //       const newAdmin=new Admin({username:data[i].username,password:data[i].password});
    //       newAdmin.save(newAdmin).then(data=>{
    //           console.log(data);
    //       })
    //       .catch(err=>{
    //           res.status(500).send({messege:"Error occured"});
    //       });
    //   }


    // var user=false;
    // var admin=false;
    // Admin.findOne(credentials,(err,data)=>{
    //   if (err) throw err;
    //   console.log(data);
    //   if (data==null){
    //     admin=false;
    //   }
    //   else{
    //     if(credentials.username==data.username && credentials.password==data.password){
    //       admin=true;
    //       console.log("admin",credentials.username==data.username,"   ",credentials.password==data.password);

    //     }
    //     else{
    //       admin=false;
    //     }
    //   }
    // }); 
    // Users.findOne({username:req.body.username},(err,data)=>{
    //     if (err) throw err;
    //     console.log(data);
    //     if (data==null){
    //       user=false;
    //     }
    //     else{
    //       if(credentials.username==data.username && credentials.password==data.password)
    //       {
    //         user=true;
    //         console.log("user",credentials.username==data.username,"   ",credentials.password==data.password);
    //         console.log(user);
    //       }
    //       else{
    //         user=false;
    //       }
    //     }
    // });
    // if(admin==true || user==true){
    //   console.log("called");
    //   if(admin==true){
    //     res.send({messege:"admin"});
    //     console.log({messege:"admin"});
    //   }
    //   else{
    //     console.log("called");
    //     res.send({messege:"user"});
    //     console.log({messege:"user"});
    //   }
    // }
    // else{
    //   res.send({messege:"Invalid login details"});
    //   console.log({messege:"Invalid login details"});
    // }
    // console.log("end ",user,admin);
    console.log("called");
    Admin.findOne({username:credentials.username}, async (req,data)=>{
      if(data==null){
        Users.findOne({username:credentials.username},async (req,data)=>{
          if(data==null){
            res.send({messege:"Invalid"});
          }
          else{
            if(credentials.username==data.username && credentials.password==data.password){
              //let token=jwt.sign({username:data.username},authConfig.code,{expiresIn:"3d"});
              res.send({messege:"User",username:data.username});
              console.log("Send");
            }
            else{
              res.send({messege:"Invalid"});
            }
          }
        });
      }
      else{
        if(credentials.username==data.username && credentials.password==data.password){
          //let token=jwt.sign({username:data.username},authConfig.code,{expiresIn:"3d"});
          res.send({messege:"Admin",username:data.username});
        }
        else{
          res.send({messege:"Invalid"});
        }
      }
    })
    
});
router.get("/StudentData/:username",async(req,res)=>{
    console.log(req.params.username);
      studdata.findOne({S_no:req.params.username},async(err,data)=>{
          if(err){
              console.log(err);
          }
          console.log(data);
          res.send(data);
      });
});
// posting of the data to the db 
//router.post("/subjects",(req,res)=>{
//   for(i=0;i<data.length;i++){
//     const newSubjects=new subjects(data[i]);
//     newSubjects.save().then(()=>{
//       console.log(newSubjects);
//     })
//     .catch(err=>{
//       console.log(err);
//     })
//   }
//   res.send("Posted successfully");
// })

router.post("/getSubjects",async(req,res)=>{
  console.log(req.body);
  query={Regulation:req.body.data.Regulation,Dept:req.body.data.Dept,Semester:req.body.data.Semester};
  console.log(query);
  subjects.findOne(query,async(err,data)=>{
    if(err){
      throw err;
    }
    console.log(data);
    res.send(data);
  })
});

router.post("/set_timetable",async(req,res)=>{
  console.log("called");
  console.log(req.body);
  console.log(req.body.subjects);
  const timetable=new Timetable(
    {Regulation:req.body.Regulation,
      Dept:req.body.Dept,
      Semester:req.body.Semester,
      year:req.body.year,
      month:req.body.month,
      subjects:req.body.subjects});
  timetable.save(timetable).then(data=>{
    console.log(data);
    res.send({messege:"Sccessful"});
  })
  .catch(err=>{
    console.log(err);
    res.send({"messege":"unsccessful"});
  });
})

router.post("/get_timetable", async (req,res)=>{
  console.log("called");
  console.log(req.body.fetch_timetable);
  const find_Timetable={Regulation:req.body.fetch_timetable.Regulation,Dept:req.body.fetch_timetable.Dept,Semester:req.body.fetch_timetable.Semester,year:req.body.fetch_timetable.year,month:req.body.fetch_timetable.month};
  // Timetable.find(query,async(data,err)=>{
  //   if(err) throw err;
  //   console.log(data);
  // })
  //Fetching the req data
//   Timetable.find(query,(timetable,err)=>{
//     // console.log(timetable);
//     console.log('Data from db : ', timetable);
//     // res.send(timetable);
//     res.send(timetable);
//     if (err) throw err;
//   })
  await Timetable.findOne(find_Timetable).then(
    (timetable)=>{
      console.log(timetable);
      res.send(timetable);
    }
  )
  .catch(
    (err)=>{
      console.log(err);
    }
  )
});
router.post("/update_timetable",async (req,res)=>{
  console.log("called");
  console.log(req.body)
  console.log(req.body.updated_timetable.subjects)
  await Timetable.findByIdAndUpdate({_id:req.body.key},{subjects:req.body.updated_timetable.subjects,month:req.body.updated_timetable.month,year:req.body.updated_timetable.year}).then(
    (updated)=>{
      console.log(updated);
      res.send({message:"updated"});
    }
  ).catch(
    (err)=>{
      console.log(err);
    }
  )
})

router.get("/Delete/:id",(req,res)=>{
  console.log(req.params.id);
  Timetable.remove({_id:req.params.id}).then(
    (deleted)=>{
      console.log(deleted)
      res.send({message:"deleted"});
    }
  )
  .catch(
    (err)=>{
      console.log(err);
    }
  )
});

var data=[
  {
    number_Of_Subjects:1,
    fees:400   
},
{
    number_Of_Subjects:2,
    fees:600   
},
{
    number_Of_Subjects:3,
    fees:800   
},
{
    number_Of_Subjects:4,
    fees:800   
},
{
    number_Of_Subjects:5,
    fees:1300   
},
{
    number_Of_Subjects:6,
    fees:1300   
},
]
router.post("/fees",(req,res)=>{
  for(let i=0;i<data.length;i++){
    let fee=new Fees({
      "number_Of_Subjects":data[i].number_Of_Subjects,
        "fees":data[i].fees
    } 
    )
    fee.save(fee).then(
      (sccess)=>{
        console.log("saved");
        res.send("success");
      }
    ).catch(
      (err)=>{
        console.log(err);
      }
    )
  }
})
router.get("/fees/:number",async (req,res)=>{
  console.log(req.params.number);
  console.log(typeof(req.params.number))
  await fees.findOne({number_Of_Subjects:parseInt(req.params.number)}).then(
    (data)=>{
      res.send(data.fees+"");
    }
  )
  .catch(
    (err)=>{
      console.log(err);
    }
  )
})

router.post("/ExamFees",(req,res)=>{
  console.log(req.body);
  let examfees=new EXAMFEES({
  username:req.body.username,
  Regulation:req.body.Regulation,
  semester:req.body.Semester,
  Department:req.body.Department,
  Fees:req.body.Fees,
  subjects:req.body.subjects,
  })
  examfees.save().then(
    (saved)=>{
      res.send({message:"Paid"});
    }
  ).catch(
    (error)=>{
      res.send({message:"error"});
      console.log(error)
    }
  )
})
router.get("/generateHallticket/:username/:semester",(req,res)=>{
  console.log(req.params.username);
  console.log(req.params.semester);
})
router.post("/paidList",(req,res)=>{
  console.log(req.body);
  EXAMFEES.findOne({username:req.body.username,semester:req.body.semester}).then(
    (list)=>{
      console.log(list);
      res.send(list);
    }
  ).catch(
    (err)=>{
      console.log(err);
    }
  )
})
router.get("/paidList/:username",(req,res)=>{
  console.log(req.params.username);
  EXAMFEES.find({username:req.params.username}).then(
    (list)=>{
      console.log(list);
      res.send(list);
    }
  ).
  catch(
    (err)=>{
      console.log(err);
    }
  )
})

router.get("/collegeDetails",(req,res)=>{
  college.find({}).then(
    (clg)=>{
      console.log(clg);
      res.send(college);
    }
  )
  .catch(
    (err)=>{
      console.log(err);
    }
  )
})
router.use("/api",router);
module.exports = router;