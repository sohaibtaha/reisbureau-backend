import mongoose from 'mongoose';
const { Schema } = mongoose;

const CountrySchema = new mongoose.Schema({
name:{
    type: String,
    required:true
},
code:{
    type: String,
},
description:{
    type: String,
    required:true
},
})

export default mongoose.model("Country", CountrySchema)