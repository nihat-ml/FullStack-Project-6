import { connect } from "mongoose";
import dotenv from "dotenv"
dotenv.config()

connect("mongodb+srv://nihatrmaf206:nihat206206@clusterproducts.mylry.mongodb.net/")
.then(()=>{
    console.log("Connected")
})