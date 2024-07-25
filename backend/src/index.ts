import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import exp from "constants";
import mongoose from "mongoose";
import MyUserController from "./controllers/MyUserController";
import MyUserRoutes from "./routes/MyUserRoutes"
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=>console.log("Connected to database!"));
const app=express();

//middleware
app.use(express.json());
app.use(cors());

app.use("/api/my/user", MyUserRoutes)
app.get("/test", async(req: Request, res: Response)=>{
    res.json({message: "Hello"})
})

app.listen(7000,()=>{
    console.log("Server started at 7000")
})
