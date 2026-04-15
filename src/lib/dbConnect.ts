import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {} 

async function dbConnect(): Promise<void> {
    //checking if already connected the do not connect again.
    if(connection.isConnected){
        console.log("Already connected to DB");
        return ;
    }
    
    //If not connected already then connect it.
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {});
        connection.isConnected = db.connections[0].readyState;

        console.log("DB connected Successfully");
    }
    catch(error){
        console.log("DB connection failed", error);
        process.exit(1);
    }
}

export default dbConnect;