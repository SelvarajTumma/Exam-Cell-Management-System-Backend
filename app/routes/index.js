const router = require('express').Router();
const controller=require('../controllers/controller.js');
router.get("/hello",controller.hello);
let model=require("../models");
let Users=model.users;
let Admin=model.admins;
let studdata=model.studData;
let subjects=model.subjects;
let Timetable=model.timetable;
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
  let subjects=JSON.parse(req.body.subjects);
  console.log(subjects);
  const timetable=new Timetable({year:req.body.year,month:req.body.month,subjects:JSON.parse(req.body.subjects)});
  timetable.save(timetable).then(data=>{
    console.log(data);
    res.send({messege:"Sccessful"});
  })
  .catch(err=>{
    console.log(err);
    res.send({"messege":"unsccessful"});
  });
})
router.use("/api",router);
module.exports = router;