const form = document.getElementById("form");
const mail = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", e =>{
   
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "akvglportfolio@gmail.com",
        Password : "DA51D67B142C10018F7F7948F788760BD21E",
        To : 'akshay.venu25@gmail.com',
        From : "akvglportfolio@gmail.com",
        Subject : "New feedback",
        Body : "EmailID : " + mail.value + "<br/> Message : " + message.value
    })
    .then(success => alert("Feedback sent successfully"),error => alert("Sorry something went wrong!!"));

    setTimeout(()=>{mail.value = ''; message.value = '';}, 5000);

    
})