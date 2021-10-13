let express=require("express");
let app=express();
let bodyparser=require("body-parser");
let cors=require("cors");
let jwt=require("jsonwebtoken");
let authConfig=require("./app/config/auth_config");
// let corsOptions={
//     "origin":"http:localhost:4200"
// };
//let mongo=require("mongodb").MongoClient;
app.options('*',cors());
//app.use(cors(corsOptions));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use((req,res,next)=>{
    res.setHeader(
        'Access-Control-Allow-Origin','http://localhost:4200',
        "Access-Control-Allow-Headers", "Origin, X-Requested-With,x-access-token, Content-Type, Accept, form-data"   ,
        "Access-Control-Allow-Methods","POST, GET,DELETE",
        "Content-Type","application/json"
    );
    next();
});
let url=require("./app/config/db_config");
let mongoose=require("mongoose");
mongoose.connect(url.url,{useNewUrlParser: true, useUnifiedTopology: true});
let db=mongoose.connection;
db.on("error",console.error.bind("connection error"));
db.once("open",()=>{
    console.log("connected to the database");
});
let model=require("./app/models");
const admin = require("./app/models/admin");
const user = require("./app/models/user");
const { users } = require("./app/models");
let Users=model.users;
let Admin=model.admins;
app.get("/",(req,res)=>{
    res.send({messege:"working"});
});

// for (let i=0;i<data.length;i++){
//         const newUser=new Users({username:data[i].username,password:data[i].password});
//         newUser.save(newUser).then(data=>{
//             console.log(data);
//         })
//         .catch(err=>{
//             res.status(500).send({messege:"Error occured"});
//         });
//     }
   

app.post("/api/check",async (req,res)=>{
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
    admin.findOne({username:credentials.username}, async (req,data)=>{
      if(data==null){
        users.findOne({username:credentials.username},async (req,data)=>{
          if(data==null){
            res.send({messege:"Invalid"});
          }
          else{
            if(credentials.username==data.username && credentials.password==data.password){
              let token=jwt.sign({username:data.username},authConfig.code,{expiresIn:"3d"});
              res.send({messege:"User",value:token});
            }
            else{
              res.send({messege:"Invalid"});
            }
          }
        });
      }
      else{
        if(credentials.username==data.username && credentials.password==data.password){
          let token=jwt.sign({username:data.username},authConfig.code,{expiresIn:"3d"});
          res.send({messege:"Admin",value:token});
        }
        else{
          res.send({messege:"Invalid"});
        }
      }
    })
    
});
let port =process.env.PORT ||8080;
app.listen(port,()=>{
    console.log(`server is running in the port ${port}`);
    console.log(url.url);
})