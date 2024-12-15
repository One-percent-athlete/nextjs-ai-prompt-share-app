import mongoose from "mongoose";

MongoDB_URI=""

let isConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log('MongoDB is connected.');
        return 
    }

    try {
        await mongoose.connect(MongoDB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true
        console.log('MongoDB Connected.');
        
    } catch (error) {
        console.log(error);
        
    }
}