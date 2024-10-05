import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates"
import { mailTrapClient } from "./mailtrap.config.js"

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipent = [{ email }]

    try {
        const recipent = await mailTrapClient.send({
             from:sender,
             to:recipent,
             subject:"verify your email",
             html: VERIFICATION_EMAIL_TEMPLATE
        })
    } catch(err) {
        
    }
} //58:22