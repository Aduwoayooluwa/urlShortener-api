import express from 'express';
import mongoose from 'mongoose'


const app = express()

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

// routes
app.use('/', require('./router/LinkRouter'))

// app running 
const port = 3000

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})