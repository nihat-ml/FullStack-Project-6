import express from "express"
const app = express()
import { route } from "./routers/router.js"
import cors from "cors"
import dotenv, { config } from "dotenv"
app.use(express.json())
app.use(cors())
dotenv.config()
import "./config/config.js"
app.use("/customers", route)
app.listen(3000,()=>{
    console.log("Bu port 3000 portunda dinlenilir")
})
