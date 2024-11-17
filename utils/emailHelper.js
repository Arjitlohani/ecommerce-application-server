import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
import { error } from 'console';


export const sendEmail = async (useremail, subject, payload,templates) => {
    const template ="utils/templates/passwordResetEmail.handelbars"
    const host = process.env.EMAIL_HOST;
    const port = process.env.EMAIL_PORT;
    const username = process.env.EMAIL_USER;
    const password = process.env.EMAIL_PASSWORD;
    const __dirname = path.resolve();
    try{
        const transporter = nodema
        iler.createTransport({
            host,
            port,
            auth: {
                user: username,
                pass: password
            }
        })
        const source = fs.readFileSync(path.join(__dirname,  template), 'utf8')
        const compiledTemplate = handlebars.compile(source)
        const options =()=>{
            return{
                from:username,
            to:useremail,
            subject:subject,
            html:compiledTemplate(payload)

            }
            
        }
        transporter.sendMail(options(),(error,info)=>{
            if(error){
                console.log(error)
                
            }
            else{
                console.log(info)}
        })
    }
    catch(error){
        console.log(error)
        return error
    }
  

}