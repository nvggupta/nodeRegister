import mongoose from "mongoose";
 

const userSchema = new mongoose.Schema({
    UserName:{
        type:String,
        required: true,
        unique:true
    },
    fullName:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    },
    dob:{
        type: Number,
        required: true, 
    }
},{timestamps: true})

// export const User = mongoose.model("User" , userSchema)

const user = mongoose.model("nikhil" , userSchema);
export default user