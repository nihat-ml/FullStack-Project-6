import mongoose from "mongoose";

let CustomerSchema = new mongoose.Schema({
    image:String,
    title:String,
    salary:Number,
    description:String
})

export let CustomerModel = mongoose.model("customers", CustomerSchema)