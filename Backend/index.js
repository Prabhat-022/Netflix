import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import userRoute from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import cors from 'cors';

databaseConnection()

dotenv.config({
    path: ".env"
})
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}
app.use(cors(corsOptions));


app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello i am coming from backend',
        success: true
    })
})

//create API
app.use("/api/v1/user", userRoute);


app.listen(process.env.PORT, () => {

    console.log(`Server listen at port ${process.env.PORT}`);
});