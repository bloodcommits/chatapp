import { Schema , model, models } from "mongoose";

const schema = new Schema({
name:{
    type:String,
    required:true
},
groupChat:{
    type:Boolean,
    default:false
},
creator:{
    type:Types.objectId,
    ref:"User"

},
members:[{
    type:Types.objectId,
    ref:"User"

}]

}, {
    timestamps:true
})


export const User = models.User || model("User" , schema)