const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'sameera@forestpin.com',
        subject: 'Welcome to my Task App',
        text: `Welcome to the app, ${name}. I am testing my node app`
    })
}

const sendCancelEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'sameera@forestpin.com',
        subject: 'Sorry to see you leave',
        text: `Why did you leave my app ${name}`
    })
}

module.exports = { 
    sendWelcomeEmail,
    sendCancelEmail
}