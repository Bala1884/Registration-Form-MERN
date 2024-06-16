import mongoose from "mongoose";

const registrationSchema= new mongoose.Schema({
    name : String,
    email : String,
    password : String,
});

const registrationModel=mongoose.model("Registration", registrationSchema);
export default registrationModel;