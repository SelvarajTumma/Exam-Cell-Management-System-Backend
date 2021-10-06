let express=require("express");
let app=express();
let bodyparser=require("body-parser");
let cors=require("cors");
// let corsOptions={
//     "origin":"http:localhost:4200"
// };
//let mongo=require("mongodb").MongoClient;
let bcrypt=require("bcryptjs");
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
let url=require("./app/config/db_congig");
let mongoose=require("mongoose");
mongoose.connect(url.url,{useNewUrlParser: true, useUnifiedTopology: true});
let db=mongoose.connection;
db.on("error",console.error.bind("connection error"));
db.once("open",()=>{
    console.log("connected to the database");
});
let model=require("./app/models");
let Users=model.users;
let Admin=model.admins;
app.get("/",(req,res)=>{
    res.send({messege:"working"});
});
var data=[
  {
    username:"Admin1",
    password:"Admin1"
},
{
    username:"Admin2",
    password:"Admin2"
},
{
    username:"Admin3",
    password:"Admin3"
},
{
    username:"Admin4",
    password:"Admin4"
},
{
    username:"Admin5",
    password:"Admin5"
},{
    username:"Admin6",
    password:"Admin6"
}, {
    username:"Admin7",
    password:"Admin7"
},
{
    username:"Admin8",
    password:"Admin8"
},
{
    username:"Admin9",
    password:"Admin9"
},
{
    username:"Admin10",
    password:"Admin10"
}

]
app.post("/api/check",(req,res)=>{
    credentials={username:req.body.username,password:bcrypt.hashSync(req.body.password)};
    console.log(req.body);
    // console.log(credentials);
    // console.log("called");
    // db.collection("users",(err,path)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     path.find(req.body).toArray((err,res)=>{
    //         if (err){
    //             console.log(err);
    //         }
    //         console.log(res);
    //     });
    // })
    // console.log(puser);
    // for (let i=0;i<data.length;i++){
    //     const newUser=new Users({username:data[i].username,password:bcrypt.hashSync(data[i].password)});
    //     newUser.save(newUser).then(data=>{
    //         console.log(data);
    //     })
    //     .catch(err=>{
    //         res.status(500).send({messege:"Error occured"});
    //     });
    // }
    // for (let i=0;i<data.length;i++){
    //       const newAdmin=new Admin({username:data[i].username,password:bcrypt.hashSync(data[i].password)});
    //       newAdmin.save(newAdmin).then(data=>{
    //           console.log(data);
    //       })
    //       .catch(err=>{
    //           res.status(500).send({messege:"Error occured"});
    //       });
    //   }
    let user,admin;
    Admin.findOne(credentials,(err,data)=>{
      if (err) throw err;
      if (data==null){
        admin={admin_messege:false};
      }
      else{
        if(credentials.username==data.username && credentials.password==data.password){
          admin={admin_messege:true};
        }
        else{
          admin={admin_messege:false};
        }
      }
    });
    Users.findOne({username:req.body.username},(err,data)=>{
        if (err) throw err;
        if (data==null){
          user={user_messege:false};
        }
        else{
          if(credentials.username==data.username && credentials.password==data.password){
            user={user_messege:true};
          }
          else{
            user={user_messege:false};
          }
        }
    });
    if(admin.admin_messege==false && user_messege==false){
      res.send({messege:"Invalid login details"});
    }
    else{
      if(admin.admin_messege==true){
        res.send({messege:"admin"})
      }
      else{
        res.send({messege:"user"})
      }
    }
})
let port =process.env.PORT ||8080;
app.listen(port,()=>{
    console.log(`server is running in the port ${port}`);
    console.log(url.url);
})