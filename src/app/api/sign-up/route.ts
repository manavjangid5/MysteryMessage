import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";
import bcrypt from "bcryptjs";
import { success } from "zod";

export async function POST(request: Request){
    await dbConnect()
    try {
        const {username, email, password} = await request.json();
        
    } catch (error) {
        console.log("Error registering error:", error);
        return Response.json(
            {
                success:false,
                message: "Error registering user"
            },
            {
                status: 500
            }
        )
    }
}