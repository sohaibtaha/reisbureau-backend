import mongoose from 'mongoose';
const { Schema } = mongoose;

const CitySchema = new mongoose.Schema({
code:{
    type: String,
    required:true
},
description:{
    type: String,
    required:true
},
})

export default mongoose.model("City",CitySchema)