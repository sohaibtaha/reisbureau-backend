import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
first_name:{
    type: String,
    required:true
},
last_name:{
    type: String,
    required:true
},
email: {
    type: String,
    // There are two ways for an promise-based async validator to fail:
    // 1) If the promise rejects, Mongoose assumes the validator failed with the given error.
    // 2) If the promise resolves to `false`, Mongoose assumes the validator failed and creates an error with the given `message`.
    validate: {
      validator: () => Promise.resolve(false),
      message: 'Email validation failed'
    }
},
adress:{
    type: String,
    required:true
},
postal_code:{
    type: String,
    required:true
},
city:{
    type: String,
    required:true
},
country_code:{
    type: String,
    required:true
},
phone:{
    type: String,
    required:true
},
})

export default mongoose.model("User",UserSchema)