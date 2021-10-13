const express = require('express');
const bodyparser = require('body-parser');
// const axios = require('axios')
const app = express(); 
// const https = require('https');
const request = require('superagent');

var mailchimpInstance   = 'us5',
    listUniqueId        = '6f27008ca1',
    mailchimpApiKey     = '473fb8efb2e2cb16a806a9a61ccee90f-us5';

    app.use(express.static('signup'));
app.post('/signup', function (req, res) {
    request
        .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey ).toString('base64'))
        .send({
          'email_address': req.body.email,
          'status': 'subscribed',
          'merge_fields': {
            'FNAME': req.body.firstName,
            'LNAME': req.body.lastName
          }
        })
            .end(function(err, response) {
              if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
                res.send('Signed Up!');
              } else {
                res.send('Sign Up Failed :(');
              }
          });
});
app.listen(5000 , function(){
    console.log("Server is running on port:8000");


})

// app.use(bodyparser.urlencoded({extended:true}));
// app.use(express.static("public"))
  

// app.get('/', (req , res) => {
//     res.sendFile(`${__dirname}/signup.html`)
//     console.log(req.body);
// })
 
// app.post(`/`, (req, res) => {
//     const firstname = req.body.fname;
//     const secondname = req.body.sname;
//     const email = req.body.email;

//     const data = {
//         members : [
//             {
//                 email_address : email,
//                 status: "subscriber",
//                 merge_fields: {
//                     FNAME: firstname,
//                     LNAME: secondname
//                 }
//             }
//         ]
//     };
//     const jsonData =JSON.stringify(data);
//     console.log(firstname , secondname , email);
//     const url = `https://server.api.mailchimp.com/3.0/lists/6f27008ca1`;
//     const options ={
//         method: "POST",
//         auth: "HexBlast:aa5e1f1c3a6918b0a0755d01d745173e-us5"
//     }
//    const request =  https.request(url, options , function(response){
//         response.on("data" , function(data){
//             console.log(JSON.parse(data));
//         })
//     })

//     request.write(jsonData);
//     request.end();
// });
 
// app.listen(8000 , ()=>{
// });

// // apikey
// // 473fb8efb2e2cb16a806a9a61ccee90f-us5

// // audience id 
// // 6f27008ca1