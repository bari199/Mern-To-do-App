import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/note-app`)
        console.log('MongoDb connected successfully ')
    } catch (error) {
        console.log('MongoDb connection error',error);
    }
}

export default connectDB;