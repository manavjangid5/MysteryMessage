import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string, 
    username: string,
    verifyCode: string
): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'manavjangid10@gmail.com',
            to: email,
            subject: 'Verification Email Testing',
            react: VerificationEmail({username, otp: verifyCode})
        });
        
        return {success: true, message: "Verification email sent successfully."};
    } catch (emailError) {
        console.error("Email sending verification email", emailError);
        return {success: false, message: "Failed to send verification email."};
    }
}