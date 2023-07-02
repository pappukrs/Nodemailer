const nodemailer=require('nodemailer');

//transporter

 const transporter= nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"digitalpappu101@gmail.com",
        pass:"owiapyemmgeppkzj"
    }
  })

  const info={
    from:"digitalpappu101@gmail.com",
    to:"impappukrs@gmail.com",
    subject:"Nodemailer email application",
    text:`Welcome to my codeserver youtube channel
            please subscribe it`
  }

  transporter.sendMail(info,(err,result)=>{
    if(err){
        console.log("Error in sending Mail",err);
    }
    else{
        console.log("Mail sent successfully",info);
    }
  })

