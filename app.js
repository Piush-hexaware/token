const express = require('express');
const app = new express();

let route = require("./routes")
const bodyParser 	= require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.get('/home/redirectURI/', function(request, response){
    let code = request.query.code
    console.log("code",code)
    route.token(code).then(body=>{
        if(body.error){
            response.send(body.error_description)
        }
        else {
            response.send(body)
        }
     
    })
    .catch(err=>{
        response.send(err)
    })
    
    
});



const port = 6000;

let server = app.listen(port,  ()=> {	
    console.log("\nApplication started listening port test " + port);		
});

