import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
// import dotenv from 'dotenv';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


// dotenv.config()
// app config
const app = express()
const port = process.env.PORT

// middleware
app.use(express.json())
app.use(cors())

//DB Connection
connectDB();

// API endpoint
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`)
})
//mongodb+srv://marufibnhossain:maruf98@cluster0.6oouc.mongodb.net/?