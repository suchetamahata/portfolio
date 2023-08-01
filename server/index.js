import cors from 'cors'
//require('dotenv').config()
import mongoose from 'mongoose'
import {messageModel} from './schema.js'

import express from 'express'

const app = express()

app.use(express.json())
app.use(cors())
app.listen(8080, () => console.log('listening on port 8080'))

app.post('/', async (req, res) => {
    try {
        console.log(req.body)
         const newMessage = new messageModel(req.body)
         await newMessage.save()
        res.json({
            message: 'New doc saved Sucessfully'
        })
    } catch (error) {
        res.sendStatus(500)
    }
})

mongoose.connect('mongodb+srv://nosuchetamahatano:moonstars96@cluster0.k0urpm5.mongodb.net/',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});