const nodemailer = require('nodemailer');
 
let mailTransporter =
    nodemailer.createTransport(
        {
            service: 'gmail',
            auth: {
                user: 'agrawal07aditi@gmail.com',
                pass: 'llcn yfpt gexy qqeu'
            }
        }
    );

function emailSend(email){
let mailDetails = {
    from: '07aditiagrawal@gmail.com',
    to: email,
    subject: 'Test mail',
    text: 'Node.js testing mail'
};
 

    mailTransporter.sendMail(mailDetails,
        function (err, data) {
            if (err) {
                console.log('Error Occurs',+err);
            } else {
                console.log('Email sent successfully');
            }
        });
}

module.exports = {
    emailSend
}

