const express = require("express");
const bodyParser = require("body-parser");
const request = require("request"); 
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("publlic"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.mail;

    const data = {
        members: {
            email_address : email , 
            status : "subscribed" ,
            merge_fields : {
                FNAME : firstName ,
                LNAME : lastName ,
            }
        }
    }

    const jsonData = JSON.stringify(data);
    const url = 

    https.request(url , options  function(response){

    });

});









app.listen("3000", function(){
    console.log("server is running on port 3000");
});


// apikey
// 0840d2beb8c97a01df23cafbb3648d1a-us21

// audiance id
// 62053745e3