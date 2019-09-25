let request = require("request")

let expObj = {}

expObj.token=function(authCode,req, res){
    return new Promise((resolve, reject)=>{
        let code = authCode
        let options = {
            body :`grant_type=authorization_code&client_id=8f9906b8-3153-4d39-84f8-b263fcc86464&code=${code}&redirect_uri=http://localhost:6000/home/redirectURI&client_secret=zo7Y%2FBCNJuimpIYzo%404P0YPJ%3D-36ZI%2Fm&scope=api%3A%2F%2F8f9906b8-3153-4d39-84f8-b263fcc86464%2F.default`,
            method : "POST",
            url: "https://login.microsoftonline.com/d4b7e268-9b08-4062-a07a-f98550f56298/oauth2/v2.0/token",
            headers: {"key":"Content-Type","name":"Content-Type","value":"application/x-www-form-urlencoded","description":"","type":"text"}
        };
        request(options, function (err, response, body) {
            if (err){
                reject("Error")
            } 
              console.log('body',JSON.stringify(body));
                  resolve (body)
                 }
        )
    })

}
module.exports = expObj