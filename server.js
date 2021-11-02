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
// const admin = require("./app/models/admin");
// const user = require("./app/models/user");
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

//app.post("/api/student",async(req,res)=>{
    // for(let i=0;i<data.length;i++){
    //     const userData=new studdata(
    //         {
    //             S_no:data[i].S_no,
    //             S_name:data[i].S_name,
    //             Regulation:data[i].Regulation,
    //             Dept:data[i].Dept,
    //             phone_number:data[i].phone_number,
    //             Address:[
    //                 {Dno:data[i].Address[0].Dno},
    //                 {     Street:data[i].Address[1].Street},
    //                 {City:data[i].Address[2].City},
    //                 {District:data[i].Address[3].District},
    //                 {State:data[i].Address[4].State}
    //             ]                
    //         }
    //     );
    //     userData.save(userData).then(data=>{
    //         console.log(data);
    //     })
    //     .catch(
    //         err=>{
    //             console.log(err);
    //         }
    //     )}

//});


let port =process.env.PORT ||8080;
app.use(require('./app/routes/index.js'));
app.listen(port,()=>{
    console.log(`server is running in the port ${port}`);
    console.log(url.url);
})