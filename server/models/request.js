import { Schema , Types, model, models } from "mongoose";

const schema = new Schema({
    status:{
        type:String,
        default:"pending",
        enum :["pending" , "accepted" , "rejected"]
    },
    sender:{
        type:Types.ObjectId,
        ref : "User",
        required:true
    },
    reciever:{
        type:Types.ObjectId,
        ref : "User",
        required:true
    }

}, {
    timestamps:true
})


export const User = models.User || model("User" , schema)