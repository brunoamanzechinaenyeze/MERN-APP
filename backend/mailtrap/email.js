import  { VERIFICATION_EMAIL_TEMPLATE }  from "./emailTemplates.js"
import { mailTrapClient, sender } from "./mailtrap.config.js"

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipent = [{ email }]

    try {
        const response = await mailTrapClient.send({
             from: sender,
             to: recipent,
             subject:"verify your email",
             html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
             category: "Email Verification"
        }) 

        console.log("Email sent successufully", response)
    } catch(err) {
        console.error(`Error sending verification`, `email: ${error}`)
        throw new Error("Error sending verification email")
    }
} //58:22