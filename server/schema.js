import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    messagetext: String
})

export const messageModel = mongoose.model('message',messageSchema)