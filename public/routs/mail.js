'use strict';
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'chef.dzmitry@gmail.com',
        pass: 'Jetta2011'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Fred Foo 👻" <chef.dzmitry@gmail.com>', // sender address
    to: 'ddzmitry@yahoo.com, baz@blurdybloop.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});