const fs = require("fs");

// task 1 : 
console.log("hello,World ! ");

// task 2 : 
var http =require("http");
http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'text/html'});
    response.end('<h1>Hello Node!!!!</h1>\n');
}).listen(3000);

// task 3 : 


fs.writeFile("welcome.txt", 'Hello Node', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Data written successfully");

});
fs.open("welcome.txt", 'r+', function (err, fd) {
        if (err) {
            return console.error(err);
        }
        console.log("File opened");
    });
  
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Contenu de "welcome.txt":', data);
});

//task 4 : 


fs.writeFile("password-generator", 'vide', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Data written successfully");

});


const generatePassword = require('generate-password');


function generateRandomPassword() {
    
    const passwordOptions = {
        length: 12, 
        numbers: true,
        symbols: true, 
        uppercase: true, 
        excludeSimilarCharacters: true, 
    };

    
    const password = generatePassword.generate(passwordOptions);

    
    console.log('Mot de passe généré:', password);
}

generateRandomPassword();

// task 5 : 
const nodemailer = require('nodemailer');


const emailConfig = {
  service: 'gmail',
  auth: {
    user: '', // replace with your email
    pass: '' // replace with your email password or app password
  }
};


const transporter = nodemailer.createTransport({
  service: emailConfig.service,
  auth: emailConfig.auth
});


const mailOptions = {
  from: '',
  to: '', 
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js using nodemailer.'
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent:', info.response);
});

