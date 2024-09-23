import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
// import dotenv from 'dotenv';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


const allowedOrigins = [
    'https://food-delivery-backend-q3fa.onrender.com',
    'https://food-delivery-101w.onrender.com',
    'https://food-delivery-admin-tl7p.onrender.com',
    // 'http://localhost:5173',  // Frontend
    // 'http://localhost:5174',
    // 'https://your-admin-panel.netlify.app'      // Admin Panel
];

// dotenv.config()
// app config
const app = express()
// const port = process.env.PORT || 4000
const port = 'https://food-delivery-backend-q3fa.onrender.com'

// middleware
app.use(express.json())
app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true // If you're using cookies, set this to true
}));

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