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
// const admin = require("./app/models/admin");
// const user = require("./app/models/user");
let Users=model.users;
let Admin=model.admins;
let studdata=model.studData;
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

var data=[
  {
      S_no:"19471A0501",
      S_name:"korapati Ajay",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:7997329875,
      Address:[
          {Dno:"11-2-5/8"},
          {Street:"Navodaya nagar"},
          {City:"Narasaraopet"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0502",
      S_name:"Thumati kumari",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:6673298759,
      Address:[
          {Dno:"667-12/A"},
          {Street:"vidyanagar 2nd line"},
          {City:"Guntur"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0503",
      S_name:"Rayapudi vijaya kumar",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:7652385964,
      Address:[
      {Dno:"118/214-A"},
      {Street:"Amaravathi road beside ala hospital"},
      {City:"Guntur"},
      {District:"Guntur"},
      {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0504",
      S_name:"khambhampati Dorababu",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:7995456712,
      Address:[
          {Dno:"88-105"},
          {Street:"sai nagar 3rd line"},
          {City:"Guntur"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0505",
      S_name:"kandru samson",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:7997789875,
      Address:[
          {Dno:"11-2-5/8"},
          {Street:"prakash nagar"},
          {City:"Narasaraopet"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0506",
      S_name:"Korapati sanjai",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:7996759875,
      Address:[
          {Dno:"114-65"},
          {Street:"sai nagar 3rd line"},
          {City:"Guntur"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0507",
      S_name:"koppula sneha",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:6345659875,
      Address:[
          {Dno:"456-78"},
          {Street:"lalapeta 4/5"},
          {City:"Guntur"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0508",
      S_name:"Detta vishnu rekha",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:9845672310,
      Address:[
          {Dno:"11-2-5/8"},
          {Street:"Arandla peta 13/4"},
          {City:"Guntur"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0509",
      S_name:"mahatho anjali kumari",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:981234560,
      Address:[
          {Dno:"66/484"},
          {Street:"Sriram nagar 6th line"},
          {City:"Guntur"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0510",
      S_name:"Patan karishma",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:7997373455,
      Address:[
          {Dno:"117/456-A"},
          {Street:"vishvas colony 3/4"},
          {City:"chilakaluri peta"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0511",
      S_name:"Justin Bhuvan",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:9398480475,
      Address:[
          {Dno:"1756-12/A"},
          {Street:"Kotha peta 3/4"},
          {City:"Guntur"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0512",
      S_name:"Dodda uday kumar",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:8297891375,
      Address:[
          {Dno:"12-808"},
          {Street:"A.T. Agraharam"},
          {City:"Guntur"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0513",
      S_name:"Bonam Venkata manikanta",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:7956329875,
      Address:[
          {Dno:"68-105/B"},
          {Street:"KVP colony"},
          {City:"Guntur"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0514",
      S_name:"Kadiyam pavan kumar",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:7997329895,
      Address:[
          {Dno:"1206-12-25"},
          {Street:"joseph nagar"},
          {City:"Gunutur"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0515",
      S_name:"Gera raj vamsi",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:9345671235,
      Address:[
          {Dno:"23-45"},
          {Street:"Bank colony"},
          {City:"Chilakaluri peta"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0516",
      S_name:"Konkana swathi",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:8797329875,
      Address:[
          {Dno:"115/8"},
          {Street:"Santhi nagar"},
          {City:"Narasaraopet"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0517",
      S_name:"kolli apparna reddy",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:7997329345,
      Address:[
          {Dno:"11-2-5/8"},
          {Street:"chuttugunta"},
          {City:"Guntur"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0518",
      S_name:"Gunta sumanth",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:7967543219,
      Address:[
          {Dno:"11-2-5/8"},
          {Street:"chandhan nagar"},
          {City:"Narasaraopet"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0519",
      S_name:"Shaik sanaunnisa",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:7997456782,
      Address:[
          {Dno:"345-67"},
          {Street:"nalla gunta"},
          {City:"Edlapadu"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0520",
      S_name:"Tummala thriveni",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:7997320785,
      Address:[
          {Dno:"11-2-5/8"},
          {Street:"Reddy colony"},
          {City:"Chirala"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0521",
      S_name:"Kandru prasad kumar",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:8997329875,
      Address:[
          {Dno:"11-52"},
          {Street:"Kobalpet 3rd line"},
          {City:"Guntur"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0522",
      S_name:"Arramsetti Devi",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:8973298759,
      Address:[
          {Dno:"665-2/A"},
          {Street:"H.B colony"},
          {City:"Guntur"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0523",
      S_name:"Dodda kalyani",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:6578904321,
      Address:[
      {Dno:"118/214-A"},
      {Street:"sampath nagar 4th line"},
      {City:"Chilakaluri peta"},
      {District:"Guntur"},
      {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0524",
      S_name:"khambhampati Raja",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:7995456745,
      Address:[
          {Dno:"88-105"},
          {Street:"Gundlapadu mandala"},
          {City:"Marchella"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0525",
      S_name:"Ditta ragasryava",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:7997782375,
      Address:[
          {Dno:"11-67/4-5"},
          {Street:"Church colony"},
          {City:"Narasaraopet"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0526",
      S_name:"Vanga Tarun kumar reddy",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:9848225575,
      Address:[
          {Dno:"114-65"},
          {Street:"Bhavanipuram 3rd line"},
          {City:"Guntur"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0527",
      S_name:"Mutluri kusuma",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:6356659875,
      Address:[
          {Dno:"456-78"},
          {Street:"A.T.Agraharam 5th line"},
          {City:"Guntur"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0528",
      S_name:"Detta vishnu rekha",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:6745672310,
      Address:[
          {Dno:"11-2-5/8"},
          {Street:"Arandla peta 5/6"},
          {City:"Narasarao peta"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0529",
      S_name:"Egala sanjya kumari",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:981239860,
      Address:[
          {Dno:"66/484"},
          {Street:"uppalapadu"},
          {City:"Chilalkaluri peta"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0530",
      S_name:"Goddapalli prakash babu",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:7997373456,
      Address:[
          {Dno:"117/456"},
          {Street:"vishvas colony 3/4"},
          {City:"vijayawada"},
          {District:"Prakasham"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0531",
      S_name:"Ruppu kalayan babu",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:9398480985,
      Address:[
          {Dno:"1756-12"},
          {Street:"Kotha peta 3/4"},
          {City:"Narasarao peta"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0532",
      S_name:"Rachi Rohit reddy",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:8297891655,
      Address:[
          {Dno:"12-808"},
          {Street:"kumaraya swami nagar 3rd"},
          {City:"Gunutur"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0533",
      S_name:"Bonam Sirisha ",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:7956329235,
      Address:[
          {Dno:"66-789"},
          {Street:"Achimpet 3rd line"},
          {City:"Guntur"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0534",
      S_name:"Kadiyam Renuka devi",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:9997329895,
      Address:[
          {Dno:"12-12-25"},
          {Street:"Brongalabidi"},
          {City:"Gunutur"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0535",
      S_name:"Tumma rajasekhar",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:9345671455,
      Address:[
          {Dno:"23-45-66"},
          {Street:"Krishna colony"},
          {City:"Chilakaluri peta"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0536",
      S_name:"Konkala Srilekha",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:8797329895,
      Address:[
          {Dno:"115/8-4"},
          {Street:"Mahathma gandhi nagar"},
          {City:"Narasaraopet"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0537",
      S_name:"kolika devamma",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:8997329735,
      Address:[
          {Dno:"118-5/8"},
          {Street:"vishava nagar"},
          {City:"Tenali"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0538",
      S_name:"Devandla umanthi",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:6967543210,
      Address:[
          {Dno:"156-5/8"},
          {Street:"chalapathi nagar 4th line"},
          {City:"Narasaraopet"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0539",
      S_name:"Shaik Tehameem",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:7997456772,
      Address:[
          {Dno:"345-67-89"},
          {Street:"lachimpeta 3rd line"},
          {City:"vijayawada"},
          {District:"Prakasham,"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0540",
      S_name:"Tummala Teja",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:7997323785,
      Address:[
          {Dno:"11-2-5/8"},
          {Street:"Reddy colony"},
          {City:"Guntur"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0541",
      S_name:"Royyal lalithi babu",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:9398480905,
      Address:[
          {Dno:"17-12"},
          {Street:"vishava nagar3/4"},
          {City:"Narasarao peta"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0542",
      S_name:"Kotha sasi kumar",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:8297867855,
      Address:[
          {Dno:"12-00-08"},
          {Street:"Ayeppa nagar 3rd line"},
          {City:"Chilakaluripeta"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0543",
      S_name:"Vonga kalayani ",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:7956329675,
      Address:[
          {Dno:"66-78/E"},
          {Street:"H.B>colony 3rd line"},
          {City:"Guntur"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0544",
      S_name:"Kunkama Adharsha",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:9997323455,
      Address:[
          {Dno:"12-12-405"},
          {Street:"Balji puram 1st line"},
          {City:"Gunutur"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0545",
      S_name:"Chinthala pavan kumar",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:6345671455,
      Address:[
          {Dno:"23-5-66"},
          {Street:"janaja colony"},
          {City:"Chilakaluri peta"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0546",
      S_name:"Shaik sabihaa",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:8797328995,
      Address:[
          {Dno:"119-8-4"},
          {Street:"Mamatha nagar 7th line"},
          {City:"Narasaraopet"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0547",
      S_name:"konidhala Saitej",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:8997329895,
      Address:[
          {Dno:"118-78-9"},
          {Street:"vishak colony"},
          {City:"Tenali"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0548",
      S_name:"Dumanthi umamaheshwari",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:6967543260,
      Address:[
          {Dno:"156-5-88"},
          {Street:"chalapathi clg "},
          {City:"Amaravathi"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0549",
      S_name:"Shaik Musarth",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:7997458972,
      Address:[
          {Dno:"345-6-9"},
          {Street:"lakshmipuram 5th line"},
          {City:"Guntur"},
          {District:"Guntur,"},
          {State:"ANDHRA PRADESH"}
      ]
  },
  {
      S_no:"19471A0550",
      S_name:"jongalaa sai manognya",
      Regulation:"R19",
      Dept:"CSE",
      phone_number:7997329085,
      Address:[
          {Dno:"11-25-67"},
          {Street:"AGP colony 16th line"},
          {City:"Guntur"},
          {District:"Guntur"},
          {State:"ANDHRA PRADESH"}
      ]
  }
];
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
let port =process.env.PORT ||8080;
app.listen(port,()=>{
    console.log(`server is running in the port ${port}`);
    console.log(url.url);
})