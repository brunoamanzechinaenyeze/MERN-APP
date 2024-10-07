import { PASSWORD_RESET_REQUEST_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailTrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipent = [{ email }];

  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipent,
      subject: "verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Email sent successufully", response);
  } catch (err) {
    console.error(`Error sending verification`, `email: ${err}`);
    throw new Error("Error sending verification email");
  }
};
export const sendWelcomeEmail = async (email, name) => {
  const recipent = [{ email }];

  try {
   const res = await mailTrapClient.send({
      from: sender,
      to: recipent,
      template_uuid: "a5eb4a26-4807-4ced-a002-d1dfa12e5844",
      template_variables: {
        company_info_name: "Amanze's Company",
        name: name,
      },
    });

    console.log("Email sent successfully")
  } catch (err) {
    console.error('Error sending the welcome email', err)
    throw new err(`Email was not successfully sent to the user: ${err}`)
  }
};
export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipent = [{ email }]
try {
  const response = await mailTrapClient.send({
    from: sender,
    to: recipent,
    subject: "Reset Your Password",
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace('{resetURL}', resetURL),
    category: "Password Reset"
  })
} catch (error) {
   console.error(`Error sending password reset email`, error);
   throw new Error(`Error sending password reset email: ${error}`);
}
}