import { model, Schema } from 'mongoose'

const userSchema = new Schema({
     name: {
         type: String 
     },
     email: {
         type: String, 
     },
     created_at: {
         type: Date,
         default: Date.now()
     }, 
     updated_at: {
         type: Date,
         default: Date.now()
     }
})

export default model('User', userSchema)