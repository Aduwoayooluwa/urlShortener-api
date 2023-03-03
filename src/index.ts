import express from 'express';
import mongoose from 'mongoose'
import connectDb from './config/db'
import { router } from './router/LinkRouter'

const app = express()

//connect to database
connectDb()
app.use(express.urlencoded({ extended: false }))

app.use(express.json())

// routes
app.use('/', router)

// app running 
const port = 3000

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})