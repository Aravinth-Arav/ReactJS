const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const mysql = require('mysql')

const add = express();
add.use(cors());
add.use(express.json());
add.use(bodyparser.urlencoded({require:true}));
add.use(express.static('public'));

let conn = mysql.createConnection({
    host : "localhost",
    port : 3306,
    user : "root",
    password : "av12345678",
    database : "kgm"
})

conn.connect(function(error){
    if (error) {
        console.log(error);
    } else {
        console.log("Connection Success");
    }
})

add.post('/add',(request,response)=>{
    let {sno, first_name, last_name, email, dob, phoneno, password, created_by, updated_by, created_date, updated_date} = request.body;
    let insertQuery = "INSERT INTO kgm.user_details (sno, first_name, last_name, email, dob, phoneno, password, created_by, updated_by, created_date, updated_date) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    conn.query(insertQuery,[sno, first_name, last_name, email, dob, phoneno, password, created_by, updated_by, created_date, updated_date],(error,result)=>{
        if (error) {
            let res={"Status":"Error"}
            console.log(error);
            response.send(res);
            
        } else {
            let res={"Status":"Success"}
            console.log("Success");
            response.send(res);
            
        }
      })
})

add.get('/get',(request,response)=>{
    let getAllquery = "SELECT * FROM kgm.user_details"
    conn.query(getAllquery,(error,result)=>{
        if (error) {
            response.send(res);
            
        } else {
            response.send(result);
            
        }
      }
)})

add.listen(3013,()=>{
    console.log("Runnung on port 3013");
})