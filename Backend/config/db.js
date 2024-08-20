import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://marufibnhossain:maruf98@cluster0.6oouc.mongodb.net/Food-Del').then(()=>console.log('DB Connected'));
}