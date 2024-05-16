import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
})

const databaseConnection = () => {
    mongoose.connect(
        // "mongodb://127.0.0.1:27017/Netflix"
        process.env.MONGODB_URI
        ,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then(() => {
        console.log("mongoDB connected")
    }).catch((error) => {
        console.log(error)
    })

}
export default databaseConnection;